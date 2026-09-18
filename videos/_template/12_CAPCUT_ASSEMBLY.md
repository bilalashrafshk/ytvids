# Phase 13: CapCut Timeline Assembly & NLE Master Blueprint

> **Instructions**: Standalone post-production deliverable. Multi-track timeline assembly guide (Tracks 0–3), transition rules, keyframed pans, and audio ducking envelopes.
>
> **MANDATORY RULES:**
> 1. **Zero Gap Frames:** Visual cuts snap seamlessly to spoken downbeats without black frames or frame overlaps.
> 2. **Audio Drift Limit:** Master VO audio duration ($T_{audio}$) and total visual beat duration ($\sum D_i$) must match within $\pm 0.5$ seconds.
> 3. **Muted Video Clips:** All AI video clips must have their internal audio muted (-inf dB).

---

## 1. Multi-Track Timeline Architecture

- **Track 0 (Visual Master)**: Sequenced visual beats (Nano Banana 2 stills with Ken Burns, AI video clips, Remotion MP4 renders).
- **Track 1 (Voiceover)**: Master narration (`master_narration.wav`) at 0.0 dB (-14 to -16 LUFS).
- **Track 2 (Foley & Micro-SFX)**: Tactile paper slides, sub-bass 40Hz drops, mechanical ticker clicks (-24dB to -28dB).
- **Track 3 (Background Music Bed)**: Master score bed ducked to -34dB (pause swell +8dB on gaps >1.2s, math duck -50dB, dead silence cuts).

---

## 2. Beat-by-Beat Assembly Guide

| Beat # | Timecode (Start – End) | Asset File | Transition In | Motion / Keyframing | Sound Design & Foley Trigger |
| :---: | :---: | :--- | :--- | :--- | :--- |
| **010** | `00:00.0 - 00:03.5` | `010_scene_title.png` | Hard Cut | Slow 2.5D Push-in (1.0x to 1.08x) | `010_foley_sub_drop.wav` (-24dB) |
| **020** | `00:03.5 - 00:07.2` | `020_data_viz.mp4` | Hard Cut | Remotion Native Motion | BGM cognitive duck to -50dB |

---

## 3. Final Export Specifications

- Resolution: 1920×1080 (1080p Full HD)
- Frame Rate: 30.00 fps
- Codec: H.264 / MP4 (High Profile)
- Bitrate: Constant Bitrate (CBR) or High Quality VBR (~20-25 Mbps)
- Audio: Stereo AAC, 48kHz, 320 kbps
