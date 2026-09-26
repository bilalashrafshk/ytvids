# Phase 12: CapCut Assembly

> **Channel:** Raahim — profile `channels/raahim/CHANNEL.md` (overrides anything below that conflicts). General engine rules apply automatically.
>
> **Rules:** zero gap frames; VO and total beat duration within ±0.5s; AI clips muted; transitions mostly hard cuts, no generic preset effects; a global film-grain layer only if `FilmLook` wasn't baked into renders.

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
