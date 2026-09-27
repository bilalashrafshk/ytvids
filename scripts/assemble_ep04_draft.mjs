import fs from 'node:fs';
import path from 'node:path';

// Episode 04 rough cut: builds the CapCut draft from assets/capcut_ready/timeline_plan.json
// (generated from the v2 beat sheet). Same capcut-mcp approach as assemble_blackout_draft.mjs.
const MCP_DIST = "/Users/bilalashraf/CapCut/capcut-mcp/dist";
const { FsDraftRepository } = await import(`${MCP_DIST}/infrastructure/FsDraftRepository.js`);
const { SystemClock } = await import(`${MCP_DIST}/infrastructure/SystemClock.js`);
const { UuidIdGenerator } = await import(`${MCP_DIST}/infrastructure/UuidIdGenerator.js`);
const { ChainMediaProbe } = await import(`${MCP_DIST}/infrastructure/probes/ChainMediaProbe.js`);
const { FfprobeMediaProbe } = await import(`${MCP_DIST}/infrastructure/probes/FfprobeMediaProbe.js`);
const { SipsImageProbe } = await import(`${MCP_DIST}/infrastructure/probes/SipsImageProbe.js`);
const { FsFileChecker } = await import(`${MCP_DIST}/infrastructure/FsFileChecker.js`);
const { DraftContentFactory } = await import(`${MCP_DIST}/domain/factories/DraftContentFactory.js`);
const { MaterialFactory } = await import(`${MCP_DIST}/domain/factories/MaterialFactory.js`);
const { SegmentFactory } = await import(`${MCP_DIST}/domain/factories/SegmentFactory.js`);
const { DraftService } = await import(`${MCP_DIST}/application/DraftService.js`);

const DRAFT_NAME = "What If Humans Lived to 150 - Rough Cut";
const DRAFT_ROOT = process.env.DRAFT_ROOT_OVERRIDE
  || "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft";
const EP = "/Users/bilalashraf/YT Videos/videos/04-what-if-humans-live-to-150";
const READY = `${EP}/assets/capcut_ready`;
const BADGE = `${READY}/remotion/badge_hypothetical.mov`;

import { execSync } from 'node:child_process';
// Rebuilding a draft while CapCut is open leaves it half-migrated and unopenable. Refuse.
try {
  execSync('pgrep -x CapCut', { stdio: 'ignore' });
  console.error('CapCut is running. Quit CapCut completely, then rerun this script.');
  process.exit(1);
} catch { /* not running — safe to build */ }

const plan = JSON.parse(fs.readFileSync(`${READY}/timeline_plan.json`, "utf8"));
const draftFolder = path.join(DRAFT_ROOT, DRAFT_NAME);
if (fs.existsSync(draftFolder)) fs.rmSync(draftFolder, { recursive: true, force: true });

const ids = new UuidIdGenerator();
const service = new DraftService(
  new FsDraftRepository(DRAFT_ROOT, new SystemClock(), ids),
  new ChainMediaProbe([new FfprobeMediaProbe(), new SipsImageProbe()]),
  new FsFileChecker(),
  new DraftContentFactory(ids), new MaterialFactory(ids), new SegmentFactory(ids),
);
await service.createDraft({ name: DRAFT_NAME, width: 1920, height: 1080, fps: 30 });

let n = { video: 0, image: 0, badge: 0 };
for (const item of plan) {
  if (item.filePath.endsWith('.png')) {
    await service.addImage({ draft: DRAFT_NAME, path: item.filePath, atSeconds: item.start, durationSeconds: item.duration });
    n.image++;
  } else {
    await service.addVideo({ draft: DRAFT_NAME, path: item.filePath, atSeconds: item.start, durationSeconds: item.duration, volume: 0 });
    n.video++;
  }
}
// Lavender HYPOTHETICAL SCENARIO badge (transparent) — lands on its own track above the pictures.
for (const item of plan.filter((p) => p.watermark)) {
  await service.addVideo({ draft: DRAFT_NAME, path: BADGE, atSeconds: item.start, durationSeconds: 4, volume: 0 });
  n.badge++;
}
await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/vo_master_-15LUFS.wav`, atSeconds: 0, volume: 1 });
await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/music_bed_ep04.wav`, atSeconds: 0, volume: 1 });

const s = await service.getDraft(DRAFT_NAME);
console.log(`Videos ${n.video} | stills ${n.image} | badges ${n.badge} | duration ${s.durationSeconds.toFixed(1)}s`);
s.tracks.forEach((t, i) => console.log(`  track ${i + 1} (${t.type}): ${t.segments.length} segments`));
console.log(`Draft: ${draftFolder}`);
