# Phase 12: CapCut Assembly

> **Channel:** Raahim — profile `channels/raahim/CHANNEL.md` (overrides anything below that conflicts). General engine rules apply automatically.
>
> **Rules:** zero gap frames; VO and total beat duration within ±0.5s; AI clips muted; transitions mostly hard cuts, no generic preset effects; a global film-grain layer only if `FilmLook` wasn't baked into renders.

> **Asset Containment:** every file the draft uses lives inside this episode's own folder (`assets/capcut_ready/`); never reference `remotion/out`, `remotion/public`, another episode or a downloads folder. Run `python3 scripts/check_capcut_assets.py "<draft folder>" "<episode folder>"` after every build.
> 5. **Motion Smoothness:** never convert AI clips 24→30 fps by repeating frames (use motion interpolation); build Ken Burns from the upscaled still with `scripts/kenburns_render.py` (sub-pixel, eased; never ffmpeg `zoompan`), ~8% zoom per beat; encode with `-g 15`; run `python3 scripts/check_motion_smoothness.py videos/<episode>` before assembling; judge in an export, not CapCut's preview. See `bible/11` Checkpoint 3.

---

## Tracks
- **Track 0 — Visual:** stills (slow pan/zoom), AI clips, Remotion renders.
- **Track 1 — VO:** `master_narration.wav`, −14 to −16 LUFS.
- **Track 2 — Foley & stings:** per `11_AUDIO_DESIGN.md`.
- **Track 3 — Bed:** −34 dB, pause swells, one silence drop per act.

## Assembly

| Beat # | Timecode | Asset | Transition in | Motion | Sound |
| :-: | :-: | :--- | :--- | :--- | :--- |
| **010** | `00:00.0 - 00:03.5` | `010_cold_open.mp4` | Hard cut (first frame) | Native | Bed starts, no sting |

## Export
1920×1080, 30 fps, H.264 High, ~20–25 Mbps; stereo AAC 48 kHz 320 kbps.
