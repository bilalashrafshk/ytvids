// Render preview stills for episode 05 compositions (CP-14 render-and-view).
// usage: node scripts/preview_ep05.mjs <outDir> [idFilter]
import path from 'node:path';
import fs from 'node:fs';
import { bundle } from '@remotion/bundler';
import { renderStill, selectComposition } from '@remotion/renderer';

const out = process.argv[2];
const filter = process.argv[3];
fs.mkdirSync(out, { recursive: true });
const beats = JSON.parse(fs.readFileSync('src/scenes/episode05/beats.json', 'utf8'));
const serveUrl = await bundle({ entryPoint: path.resolve('src/index.ts'), publicDir: path.resolve('public') });
const fr = [0.1, 0.3, 0.5, 0.75, 0.98];
for (const b of beats) {
  if (filter && !b.id.includes(filter)) continue;
  const inputProps = { durationInFrames: b.frames, scene: b.scene, plateDir: 'ep05' };
  const comp = await selectComposition({ serveUrl, id: b.id, inputProps });
  let n = 0;
  for (const x of fr) {
    const frame = Math.min(comp.durationInFrames - 1, Math.round(comp.durationInFrames * x));
    await renderStill({ composition: comp, serveUrl, output: path.join(out, `${b.id}_${n++}.png`), frame, inputProps, imageFormat: 'png', chromiumOptions: { gl: 'angle' } });
  }
  console.log('ok', b.id, comp.durationInFrames);
}
