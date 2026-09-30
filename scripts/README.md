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

4. **`align_voiceover.py`** (episode 05): aligns `voiceover/master_narration.wav` to `06_VOICE_DIRECTION.json` with faster-whisper word timestamps and writes `voiceover/alignment.json` (and caches `voiceover/whisper_words.json`). Needs a Python that has `faster-whisper` installed and the `small.en` model cached. Run: `<python> scripts/align_voiceover.py [--force]`.

5. **`build_ep05_beats.py`** (episode 05): builds phases 07 to 12 (`07_BEAT_SHEET.md` through `12_CAPCUT_ASSEMBLY.md`) from `voiceover/alignment.json`. Beats are stored as sentence ranges, so re-running after any re-alignment updates every timecode, frame count and clip length. Beat numbers and filenames stay stable. Run: `python3 scripts/build_ep05_beats.py`.

6. **`check_capcut_assets.py`** (all channels): asset containment check. `python3 scripts/check_capcut_assets.py "<draft folder>" "<episode folder>"` fails if any media file a CapCut draft uses is outside the episode's own folder, or missing on disk. The episode 05 assembly script runs it after every build.

7. **`setup_upscaler.sh`** + **`upscale_stills.py`** (all channels): the shared still-upscaling routine. Run `bash scripts/setup_upscaler.sh` once per machine (private PyTorch environment and the Real-ESRGAN illustration model in `~/.cache/financecraft/upscaler`, about 1.1 GB; delete that folder to remove it). Then `python3 scripts/upscale_stills.py videos/<episode>` writes 2x upscales to `assets/upscaled/`. Options: `--src <folder>` (repeatable), `--only <text>`, `--force`, `--scale N`, `--dest <folder>`, `--list` (dry run, needs no setup). Skips thumbnails, character references and the patterns in `assets/upscale_skip.txt`; a watchdog restarts the worker if the GPU stalls. The `prepare_*_assets.py` builders prefer `assets/upscaled/`.

8. **`check_motion_smoothness.py`** (all channels): measures choppiness instead of guessing. `python3 scripts/check_motion_smoothness.py videos/<episode>` reports the repeated-frame share of every AI clip (flags above 12%, the sign of a 24-to-30 fps conversion done by repeating frames) and the stutter in pixels of sampled Ken Burns clips (under 1 px is invisible). Needs OpenCV (Anaconda's Python has it). Run it on the built clips before assembling the draft.
9. **`kenburns_render.py`** (all channels): the Ken Burns renderer. `~/opt/anaconda3/bin/python scripts/kenburns_render.py STILL OUT.mp4 SECONDS MOTION(0-4)`. Sub-pixel crop per frame plus a smoothstep ease; replaces ffmpeg `zoompan`, which wobbles on slow zooms. Needs OpenCV.

