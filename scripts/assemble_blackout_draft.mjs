import fs from 'node:fs';
import path from 'node:path';

// Import directly from capcut-mcp dist
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

const DRAFT_NAME = "Social Media Blackout - Rough Cut";
// ~/Movies/CapCut/... gets locked down by macOS (EPERM) once CapCut has
// touched the draft folder, so we stage the build outside ~/Movies and the
// user copies the finished folder into place via Finder (which still has
// full access) instead of us writing to it directly.
const DRAFT_ROOT = process.env.DRAFT_ROOT_OVERRIDE
  || "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft";
const PLAN_PATH = "/Users/bilalashraf/YT Videos/videos/03-social-media-blackout-for-30-days/scratch_timeline_plan.json";
const VO_DIR = "/Users/bilalashraf/YT Videos/videos/03-social-media-blackout-for-30-days/voiceover";
const VO_CHUNKS = [
  { file: `${VO_DIR}/chunk 0-2.wav`, atSeconds: 0 },
  { file: `${VO_DIR}/chunk 3 onwards.wav`, atSeconds: 85.84 },
];

async function main() {
  console.log(`=== ASSEMBLING CAPCUT TIMELINE: ${DRAFT_NAME} ===`);

  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, "utf8"));
  console.log(`Loaded timeline plan with ${plan.length} beats.`);

  const draftFolder = path.join(DRAFT_ROOT, DRAFT_NAME);
  if (fs.existsSync(draftFolder)) {
    console.log(`Removing old draft folder: ${draftFolder}`);
    fs.rmSync(draftFolder, { recursive: true, force: true });
  }

  const ids = new UuidIdGenerator();
  const clock = new SystemClock();
  const repository = new FsDraftRepository(DRAFT_ROOT, clock, ids);
  const mediaProbe = new ChainMediaProbe([new FfprobeMediaProbe(), new SipsImageProbe()]);
  const files = new FsFileChecker();
  const service = new DraftService(
    repository,
    mediaProbe,
    files,
    new DraftContentFactory(ids),
    new MaterialFactory(ids),
    new SegmentFactory(ids)
  );

  console.log(`Creating project draft: "${DRAFT_NAME}" (1920x1080 @ 30fps)...`);
  await service.createDraft({ name: DRAFT_NAME, width: 1920, height: 1080, fps: 30 });

  // 1. Visual track (Track 0): all 133 beats, muted so they never fight the VO
  // Clips shorter than their assigned beat duration were already freeze-held
  // (last frame extended) on disk beforehand, so every source file here is
  // long enough to cover its own item.duration natively — no speed changes.
  const startTime = Date.now();
  let videoCount = 0;
  let imageCount = 0;

  for (let i = 0; i < plan.length; i++) {
    const item = plan[i];
    const isVideo = item.filePath.endsWith('.mp4');

    try {
      if (isVideo) {
        await service.addVideo({
          draft: DRAFT_NAME,
          path: item.filePath,
          atSeconds: item.start,
          durationSeconds: item.duration,
          volume: 0, // dialogue lives on its own track (VO chunks below)
        });
        videoCount++;
      } else {
        await service.addImage({
          draft: DRAFT_NAME,
          path: item.filePath,
          atSeconds: item.start,
          durationSeconds: item.duration,
        });
        imageCount++;
      }

      if ((i + 1) % 20 === 0 || i === plan.length - 1) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`[${i + 1}/${plan.length}] beat ${item.beat}: "${item.title.slice(0, 40)}" at ${item.start}s (${elapsed}s)`);
      }
    } catch (err) {
      console.error(`Error adding beat ${item.beat} (${item.filePath}):`, err.message);
    }
  }

  // 2. Dialogue track (Track 1): the two real recorded VO files, back to back
  console.log(`\nAdding ${VO_CHUNKS.length} real VO audio chunks...`);
  for (const chunk of VO_CHUNKS) {
    const res = await service.addAudio({
      draft: DRAFT_NAME,
      path: chunk.file,
      atSeconds: chunk.atSeconds,
      volume: 1,
    });
    console.log(`  VO chunk "${path.basename(chunk.file)}" -> starts ${res.startSeconds}s, duration ${res.durationSeconds}s`);
  }

  const finalSummary = await service.getDraft(DRAFT_NAME);
  const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n==========================================");
  console.log("=== CAPCUT TIMELINE ASSEMBLY COMPLETED ===");
  console.log("==========================================");
  console.log(`Video Clips: ${videoCount} | Still Images: ${imageCount}`);
  console.log(`Total Timeline Duration: ${finalSummary.durationSeconds.toFixed(1)}s (Target: 630.92s)`);
  console.log(`Tracks: ${finalSummary.tracks.length}`);
  for (let t = 0; t < finalSummary.tracks.length; t++) {
    const trk = finalSummary.tracks[t];
    console.log(`  Track ${t + 1} (${trk.type}): ${trk.segments.length} segments`);
  }
  console.log(`Assembly Time: ${totalElapsed}s`);
  console.log(`Draft location: ${draftFolder}`);
}

main().catch(err => {
  console.error("Assembly fatal error:", err);
  process.exit(1);
});
