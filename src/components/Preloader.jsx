import React, { useEffect, useState } from 'react';

export default function Preloader({ progress = 0, isFinished = false }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isFinished]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#06040A] transition-all duration-1000 ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="font-serif font-light text-2xl md:text-3xl tracking-[0.62em] indent-[0.62em] text-[#F4ECDD]">
        ASCENTA
      </div>

      <div className="w-[190px] max-w-[46vw] h-[1px] bg-[#F4ECDD]/15 overflow-hidden">
        <div
          className="h-full bg-[#E3A94E] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(8, progress))}%` }}
        />
      </div>

      <small className="font-sans text-[0.55rem] tracking-[0.44em] uppercase text-[#B4A891]">
        Haute Parfumerie
      </small>
    </div>
  );
}
