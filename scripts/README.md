# FinanceCraft Automation & Pipeline Scripts

This folder contains utility scripts for assembling CapCut timelines, fixing draft media links, and synchronizing project assets.

---

### Available Scripts

1. **`sync_clean_capcut_project.py`**:
   - Synchronizes generated visual assets, VO chunks, and background audio beds into a clean, verified CapCut `draft_content.json` project.
   - Automatically repairs timecode alignment, handles transition durations, and strips corrupt keyframes.

2. **`fix_capcut_media_links.py`**:
   - Re-links absolute file paths in CapCut drafts when migrating between machines or workspace directories.
   - Ensures media references point to the local `videos/<episode>/assets/` directories without "media missing" errors.

3. **`assemble_peloton_draft.mjs`**:
   - Reference Node.js assembly script demonstrating programmatic timeline construction for complex multi-act documentary drafts.

---

### Usage Example

```bash
# Relink media assets in a CapCut draft after pulling repository to a new machine
python3 scripts/fix_capcut_media_links.py --project-path "/path/to/CapCut/Drafts/Episode"

# Synchronize clean assets to CapCut timeline
python3 scripts/sync_clean_capcut_project.py --manifest "videos/01-peloton-collapse/04_PRODUCTION_MANIFEST.json"
```
