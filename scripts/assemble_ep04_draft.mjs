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

import { execSync } from 'node:child_process';
// Rebuilding a draft while CapCut is open leaves it half-migrated and unopenable. Refuse.
try {
  execSync('pgrep -x CapCut', { stdio: 'ignore' });
  console.error('CapCut is running. Quit CapCut completely, then rerun this script.');
  process.exit(1);
} catch { /* not running — safe to build */ }

const plan = JSON.parse(fs.readFileSync(`${READY}/timeline_plan.json`, "utf8"));
const draftFolder = path.join(DRAFT_ROOT, DRAFT_NAME);
if (fs.existsSync(draftFolder)) {
  const backup = `${READY}/draft_backups/${DRAFT_NAME} ${new Date().toISOString().replace(/[:.]/g, '-')}`;
  fs.mkdirSync(path.dirname(backup), { recursive: true });
  fs.cpSync(draftFolder, backup, { recursive: true });
  fs.rmSync(draftFolder, { recursive: true, force: true });
  console.log(`Backed up the previous draft to ${backup}`);
}

const ids = new UuidIdGenerator();
const service = new DraftService(
  new FsDraftRepository(DRAFT_ROOT, new SystemClock(), ids),
  new ChainMediaProbe([new FfprobeMediaProbe(), new SipsImageProbe()]),
  new FsFileChecker(),
  new DraftContentFactory(ids), new MaterialFactory(ids), new SegmentFactory(ids),
);
await service.createDraft({ name: DRAFT_NAME, width: 1920, height: 1080, fps: 30 });

const extras = JSON.parse(fs.readFileSync(`${READY}/extras.json`, "utf8"));
let n = { video: 0, kenburns: 0, music: 0, sfx: 0 };
for (const item of plan) {
  // Stills play as their Ken Burns motion clip (assets/capcut_ready/kenburns/), rendered at exact beat length.
  let file = item.filePath;
  if (file.endsWith('.png')) { file = `${READY}/kenburns/${path.basename(file, '.png')}.mp4`; n.kenburns++; } else n.video++;
  await service.addVideo({ draft: DRAFT_NAME, path: file, atSeconds: item.start, durationSeconds: item.duration, volume: 0 });
}
await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/vo_master_-15LUFS.wav`, atSeconds: 0, volume: 1 });
// Music: the user's chosen track, pre-cut into pieces (levels, dips under number graphics, silence drops, loop).
for (const m of extras.music) {
  await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/music/cinematic_meditation_loop.mp3`, atSeconds: m.at, sourceStartSeconds: m.src, durationSeconds: m.dur, volume: m.vol });
  n.music++;
}
for (const f of extras.sfx) {
  await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/sfx/${f.file}`, atSeconds: f.at, volume: f.vol });
  n.sfx++;
}
console.log(`videos ${n.video} | still motion clips ${n.kenburns} | music pieces ${n.music} | sfx ${n.sfx}`);
const s = await service.getDraft(DRAFT_NAME);
console.log(`duration ${s.durationSeconds.toFixed(1)}s`);
s.tracks.forEach((t, i) => console.log(`  track ${i + 1} (${t.type}): ${t.segments.length} segments`));
console.log(`Draft: ${draftFolder}`);
