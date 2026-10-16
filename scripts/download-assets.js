const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const CATALOG_DIR = path.join(PUBLIC_DIR, 'catalog');
const FRAMES_DIR = path.join(PUBLIC_DIR, 'frames');

[PUBLIC_DIR, CATALOG_DIR, FRAMES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function downloadFile(url, dest) {
  try {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${path.basename(dest)}`);
      return;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Downloaded ${path.basename(dest)} (${(buffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed ${url}: ${err.message}`);
  }
}

async function main() {
  console.log('--- Downloading Brand & Catalog Assets ---');
  await downloadFile('https://ascentatrack.com/parfum/logo.png', path.join(PUBLIC_DIR, 'logo.png'));
  
  const catalog = ['or', 'noir', 'ambre', 'rose', 'fumee', 'lumiere'];
  for (const item of catalog) {
    await downloadFile(`https://ascentatrack.com/parfum/catalog/${item}.webp`, path.join(CATALOG_DIR, `${item}.webp`));
  }

  console.log('--- Downloading Scroll Film Frame Sequence ---');
  // We sample 90 frames evenly across the 607 total frames (from 1 to 607)
  const TOTAL_FRAMES_SOURCE = 607;
  const SAMPLE_COUNT = 90;
  
  const tasks = [];
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const srcIndex = Math.min(TOTAL_FRAMES_SOURCE, Math.max(1, Math.round(1 + i * (TOTAL_FRAMES_SOURCE - 1) / (SAMPLE_COUNT - 1))));
    const padIndex = String(srcIndex).padStart(4, '0');
    const outPad = String(i).padStart(3, '0');
    const url = `https://ascentatrack.com/parfum/frames-d/f_${padIndex}.webp?v=1`;
    const dest = path.join(FRAMES_DIR, `frame_${outPad}.webp`);
    tasks.push({ url, dest, i });
  }

  // Download with concurrency limit of 10
  const CONCURRENCY = 10;
  for (let i = 0; i < tasks.length; i += CONCURRENCY) {
    const chunk = tasks.slice(i, i + CONCURRENCY);
    await Promise.all(chunk.map(t => downloadFile(t.url, t.dest)));
  }

  // Save manifest of frames
  const manifest = tasks.map(t => `/frames/${path.basename(t.dest)}`);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'frames.json'), JSON.stringify(manifest, null, 2));
  console.log(`Manifest created with ${manifest.length} frames.`);
  console.log('--- Asset Download Complete ---');
}

main();
