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

const DRAFT_NAME = "Peloton Collapse";
const DRAFT_ROOT = "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft";
const PLAN_PATH = "/Users/bilalashraf/YT Videos/videos/01-peloton-collapse/scratch_timeline_plan.json";

async function main() {
  console.log(`=== ASSEMBLING CAPCUT TIMELINE: ${DRAFT_NAME} ===`);

  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, "utf8"));
  console.log(`Loaded timeline plan with ${plan.length} beats.`);

  // 1. Clear existing draft folder if present
  const draftFolder = path.join(DRAFT_ROOT, DRAFT_NAME);
  if (fs.existsSync(draftFolder)) {
    console.log(`Removing old draft folder: ${draftFolder}`);
    fs.rmSync(draftFolder, { recursive: true, force: true });
  }

  // 2. Initialize CapCut Services
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

  // 3. Create fresh 1920x1080 30fps project draft
  console.log(`Creating project draft: "${DRAFT_NAME}" (1920x1080 @ 30fps)...`);
  await service.createDraft({
    name: DRAFT_NAME,
    width: 1920,
    height: 1080,
    fps: 30
  });

  const startTime = Date.now();
  let addedCount = 0;
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
          volume: 0 // CP-11: all AI videos / graphics muted to leave headroom for VO
        });
        videoCount++;
      } else {
        await service.addImage({
          draft: DRAFT_NAME,
          path: item.filePath,
          atSeconds: item.start,
          durationSeconds: item.duration
        });
        imageCount++;
      }
      addedCount++;

      if ((i + 1) % 10 === 0 || i === plan.length - 1) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`[${i + 1}/${plan.length}] Processed beat ${item.beat}: "${item.title.slice(0, 30)}..." at ${item.start}s (${elapsed}s elapsed)`);
      }
    } catch (err) {
      console.error(`Error adding beat ${item.beat} (${item.filePath}):`, err.message);
    }
  }

  // 4. Verify Final Draft
  const finalSummary = await service.getDraft(DRAFT_NAME);
  const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n==========================================");
  console.log("=== CAPCUT TIMELINE ASSEMBLY COMPLETED ===");
  console.log("==========================================");
  console.log(`Total Beats Processed: ${addedCount} / ${plan.length}`);
  console.log(`  - Video Clips: ${videoCount}`);
  console.log(`  - Still Images / Insets: ${imageCount}`);
  console.log(`Total Timeline Duration: ${finalSummary.durationSeconds.toFixed(1)}s (Target: 835.0s)`);
  console.log(`Tracks Count: ${finalSummary.tracks.length}`);
  for (let t = 0; t < finalSummary.tracks.length; t++) {
    const trk = finalSummary.tracks[t];
    console.log(`  Track ${t + 1} (${trk.type}): ${trk.segments.length} segments`);
  }
  console.log(`Assembly Time: ${totalElapsed} seconds`);
}

main().catch(err => {
  console.error("Assembly fatal error:", err);
  process.exit(1);
});
