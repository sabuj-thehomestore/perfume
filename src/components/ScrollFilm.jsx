import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function ScrollFilm({ lenisInstance, onLoaded }) {
  const canvasRef = useRef(null);
  const framesRef = useRef([]); // Array of { img, ready: boolean }
  const curFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const lastDrawnIdxRef = useRef(-1);
  const animFrameIdRef = useRef(null);

  const TOTAL_FRAMES = 90;

  // Find the closest ready frame to prevent any blank/flicker
  const getBestFrame = useCallback((desiredIdx) => {
    const frames = framesRef.current;
    if (!frames || frames.length === 0) return null;

    // Check exact frame first
    if (frames[desiredIdx] && frames[desiredIdx].ready) {
      return frames[desiredIdx].img;
    }

    // Search outward for the closest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = desiredIdx - offset;
      if (prev >= 0 && frames[prev] && frames[prev].ready) {
        return frames[prev].img;
      }
      const next = desiredIdx + offset;
      if (next < TOTAL_FRAMES && frames[next] && frames[next].ready) {
        return frames[next].img;
      }
    }

    return null;
  }, []);

  // Draw frame with cover geometry onto canvas
  const drawFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = getBestFrame(frameIdx);
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1928;
    const ih = img.naturalHeight || 1074;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const nw = iw * ratio;
    const nh = ih * ratio;
    const cx = (cw - nw) / 2;
    const cy = (ch - nh) / 2;

    ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);
    lastDrawnIdxRef.current = frameIdx;
  }, [getBestFrame]);

  // Canvas resize with DPR capping
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = Math.round(window.innerWidth * dpr);
    const newHeight = Math.round(window.innerHeight * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (ctx) ctx.imageSmoothingQuality = 'high';
      // Redraw immediately after resize
      drawFrame(Math.round(curFrameRef.current));
    }
  }, [drawFrame]);

  // Main 60fps render loop with anti-flicker deadzone
  useEffect(() => {
    const loop = () => {
      const diff = targetFrameRef.current - curFrameRef.current;

      // Anti-flicker deadzone: if diff is very small, lock to target to prevent frame vibration
      if (Math.abs(diff) < 0.02) {
        curFrameRef.current = targetFrameRef.current;
      } else {
        // Smooth exponential damping (higher responsiveness with silky deceleration)
        curFrameRef.current += diff * 0.14;
      }

      const renderIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(curFrameRef.current))
      );

      // Only paint if the frame index has genuinely changed
      if (renderIdx !== lastDrawnIdxRef.current) {
        drawFrame(renderIdx);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame]);

  // Connect scroll listener via Lenis (or fallback to native scroll)
  useEffect(() => {
    const updateTarget = (progress) => {
      const clamped = Math.min(1, Math.max(0, progress));
      targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);
    };

    if (lenisInstance) {
      const unsubscribe = lenisInstance.on('scroll', (e) => {
        updateTarget(e.progress);
      });
      return () => {
        if (typeof unsubscribe === 'function') unsubscribe();
      };
    } else {
      const onScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        updateTarget(scrollY / maxScroll);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [lenisInstance]);

  // Handle Resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Preload and decode images cleanly
  useEffect(() => {
    const frames = new Array(TOTAL_FRAMES);
    framesRef.current = frames;
    let loadedCount = 0;

    // Load first frame with high priority so the page renders immediately
    const firstImg = new Image();
    firstImg.src = '/frames/frame_000.webp';
    frames[0] = { img: firstImg, ready: false };

    firstImg.decode()
      .then(() => {
        frames[0].ready = true;
        handleResize();
        drawFrame(0);
        if (onLoaded) onLoaded(15);
      })
      .catch(() => {
        // Fallback for browsers with decode issues
        firstImg.onload = () => {
          frames[0].ready = true;
          handleResize();
          drawFrame(0);
          if (onLoaded) onLoaded(15);
        };
      });

    // Progressively load and decode remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(3, '0');
      img.src = `/frames/frame_${pad}.webp`;
      frames[i] = { img, ready: false };

      const onDecoded = () => {
        frames[i].ready = true;
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        if (onLoaded) onLoaded(pct);
      };

      if (img.decode) {
        img.decode().then(onDecoded).catch(() => {
          img.onload = onDecoded;
        });
      } else {
        img.onload = onDecoded;
      }
    }
  }, [drawFrame, handleResize, onLoaded]);

  return (
    <>
      {/* Fixed Fullscreen Canvas */}
      <canvas
        ref={canvasRef}
        id="film"
        className="fixed inset-0 w-full h-[100lvh] block z-0 bg-[#06040A] pointer-events-none transform-gpu"
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />

      {/* Cinematic Vignette Overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none transform-gpu"
        style={{
          background: `
            linear-gradient(94deg, rgba(8,5,4,0.72) 0%, rgba(8,5,4,0.3) 35%, transparent 60%),
            linear-gradient(0deg, rgba(8,5,4,0.5) 0%, transparent 28%),
            radial-gradient(circle at 80% 50%, rgba(227, 169, 78, 0.05) 0%, transparent 60%)
          `,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </>
  );
}
