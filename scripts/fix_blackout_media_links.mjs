// Repairs "0/N media linked" in the CapCut app for a draft built by
// assemble_blackout_draft.mjs.
//
// Root cause: capcut-mcp's FsDraftRepository.save() calls updatedMetaInfo(),
// which never calls the library's own registerMedia() helper — so
// draft_meta_info.json's media index (draft_materials[type=0]) never gets
// populated with the real imported files, even though draft_content.json
// itself has all the correct absolute paths. CapCut reads its "linked media"
// count from draft_meta_info.json, so it shows every clip as unlinked.
//
// This script rebuilds that index directly from draft_content.json's
// materials (videos + audios), using the repository's own mediaEntry() shape
// so the result matches what registerMedia() would have produced.
//
// Second root cause (found after the first fix still showed "0 linked" in
// CapCut): registerMedia()'s mediaEntry() stamps every meta entry with a
// FRESH random id via this.ids.next(), instead of reusing the id the
// material already has in draft_content.json's materials.videos/audios.
// CapCut correlates a timeline material to its media-library entry by that
// id, not just by file path, so the mismatched ids left every clip showing
// as unlinked even though the paths were all correct. This script now
// builds each meta entry by hand (same shape as mediaEntry()) with
// id === the material's own id, mirroring the working pattern in
// scripts/sync_clean_capcut_project.py (same generated id reused for both
// the material and its meta entry).

import path from 'node:path';

const MCP_DIST = "/Users/bilalashraf/CapCut/capcut-mcp/dist";
const { FsDraftRepository } = await import(`${MCP_DIST}/infrastructure/FsDraftRepository.js`);
const { SystemClock } = await import(`${MCP_DIST}/infrastructure/SystemClock.js`);
const { UuidIdGenerator } = await import(`${MCP_DIST}/infrastructure/UuidIdGenerator.js`);

const DRAFT_NAME = "Social Media Blackout - Rough Cut";
const DRAFT_ROOT = process.env.DRAFT_ROOT_OVERRIDE
  || "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft";

async function main() {
  const ids = new UuidIdGenerator();
  const clock = new SystemClock();
  const repository = new FsDraftRepository(DRAFT_ROOT, clock, ids);

  const document = await repository.load(DRAFT_NAME);
  const content = document.raw();

  const importedMedia = [];
  for (const v of content.materials.videos ?? []) {
    importedMedia.push({
      id: v.id, // reuse the material's own id -- see note above
      path: v.path,
      name: v.material_name || path.basename(v.path),
      durationUs: v.duration,
      width: v.width,
      height: v.height,
      kind: v.type === 'photo' ? 'photo' : 'video',
    });
  }
  for (const a of content.materials.audios ?? []) {
    importedMedia.push({
      id: a.id, // reuse the material's own id -- see note above
      path: a.path,
      name: a.name || path.basename(a.path),
      durationUs: a.duration,
      width: 0,
      height: 0,
      kind: 'music',
    });
  }

  console.log(`Registering ${importedMedia.length} media items into draft_meta_info.json...`);

  const folder = repository.folderOf(DRAFT_NAME);
  const meta = await repository.readMetaInfo(DRAFT_NAME, folder);

  const buckets = meta.draft_materials ?? (meta.draft_materials = []);
  let mediaBucket = buckets.find((b) => b.type === 0);
  if (!mediaBucket) {
    mediaBucket = { type: 0, value: [] };
    buckets.unshift(mediaBucket);
  }

  // Wipe the bucket clean -- both the dead placeholder entry the library
  // seeds on createDraft() (empty file_Path) and any stale, id-mismatched
  // entries left by the previous run of this script -- then rebuild fresh
  // below with ids that actually match draft_content.json's materials.
  mediaBucket.value = [];

  const nowUs = repository.nowUs();
  const nowSeconds = Math.floor(nowUs / 1_000_000);
  for (const media of importedMedia) {
    mediaBucket.value.push({
      create_time: nowSeconds,
      duration: media.durationUs,
      extra_info: media.name,
      file_Path: media.path,
      height: media.height,
      id: media.id, // <-- the fix: match draft_content.json's material id exactly
      import_time: nowSeconds,
      import_time_ms: nowUs,
      item_source: 1,
      md5: '',
      metetype: media.kind,
      roughcut_time_range: { duration: media.durationUs, start: 0 },
      sub_time_range: { duration: -1, start: -1 },
      type: 0,
      width: media.width,
    });
  }

  meta.tm_draft_modified = repository.nowUs();
  meta.tm_duration = document.durationUs();

  await repository.writeJson(path.join(folder, 'draft_meta_info.json'), meta);
  await repository.updateRootMeta(DRAFT_NAME, folder, meta, content);

  const finalBucket0 = (meta.draft_materials ?? []).find((b) => b.type === 0);
  console.log(`draft_materials[type=0] now has ${finalBucket0.value.length} entries.`);
  const missingOnDisk = finalBucket0.value.filter((e) => e.file_Path && !e.file_Path.startsWith('/'));
  console.log(`Entries with non-absolute paths (should be 0): ${missingOnDisk.length}`);
}

main().catch((err) => {
  console.error("Repair failed:", err);
  process.exit(1);
});
