import fs from 'node:fs';
import path from 'node:path';

// Episode 05 rough cut: builds the CapCut draft from assets/capcut_ready/timeline_plan.json
// (written by scripts/build_ep05_beats.py; every file already 1920x1080 @30 and exactly its beat length).
// AI clips keep their own audio (mute in CapCut at the end if needed).
// Music: the episode 04 bed, planned by scripts/plan_ep05_audio.py (extras.json). SFX are placeholders.
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

const DRAFT_NAME = "Who Gets Paid Every Time You Plug In a TV - Rough Cut";
const DRAFT_ROOT = process.env.DRAFT_ROOT_OVERRIDE
  || "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft";
const EP = "/Users/bilalashraf/YT Videos/videos/05-hdmi-monopoly";
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
let n = { still: 0, clip: 0, remotion: 0 };
for (const item of plan) {
  // every item is already a finished mp4 of the exact beat length; only AI clips carry audio
  const vol = item.kind === "V" ? (extras.clips?.[path.basename(item.filePath)]?.volume ?? 1) : 0;
  await service.addVideo({ draft: DRAFT_NAME, path: item.filePath, atSeconds: item.start, durationSeconds: item.duration, volume: vol });
  if (item.kind === "S") n.still++; else if (item.kind === "V") n.clip++; else n.remotion++;
}
await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/vo_master_-15LUFS.wav`, atSeconds: 0, volume: 1 });
for (const m of extras.music) {
  await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/music/cinematic_meditation_loop.mp3`, atSeconds: m.at, sourceStartSeconds: m.src, durationSeconds: m.dur, volume: m.vol });
}
for (const f of extras.sfx) {
  await service.addAudio({ draft: DRAFT_NAME, path: `${READY}/sfx/${f.file}`, atSeconds: f.at, volume: f.vol });
}
console.log(`AI clips ${n.clip} | still motion clips ${n.still} | Remotion ${n.remotion} | music pieces ${extras.music.length} | sfx ${extras.sfx.length}`);
const s = await service.getDraft(DRAFT_NAME);
console.log(`duration ${s.durationSeconds.toFixed(1)}s`);
s.tracks.forEach((t, i) => console.log(`  track ${i + 1} (${t.type}): ${t.segments.length} segments`));
console.log(`Draft: ${draftFolder}`);
// Asset containment: every file the draft uses must be inside this episode's own folder.
try {
  execSync(`python3 "/Users/bilalashraf/YT Videos/scripts/check_capcut_assets.py" "${draftFolder}" "${EP}"`, { stdio: 'inherit' });
} catch { console.error('ASSET CONTAINMENT FAILED: the draft points at files outside the episode folder.'); process.exit(1); }
