# Phase 07: Spoken-Cadence Beat Sheet

> **Instructions**: Standalone visual direction deliverable. **GENERATED STRICTLY AFTER VO AUDIO STEMS & TIMESTAMPS EXIST.**
>
> **MANDATORY RULES:**
> 1. **Audio-First Ground Truth:** Every beat timecode MUST snap directly to spoken sentence/phrase downbeats from `voiceover/alignment.json`. Pre-audio word-count estimation is strictly forbidden for final beats.
> 2. **Pacing Bounds & Motion Freedom:** Timeline average beat tempo is 2.5s to 4.0s. Static scene-setting stills target 2.5s to 5.0s (multi-sentence scenes illustrated with stills must cut on every sentence). Motion assets (AI video and Remotion graphics) have **zero artificial duration suppression**—they hold across complete multi-sentence thought-blocks (e.g. 5s–8s for AI video, 4s–12s+ for Remotion) to allow the visual motion arc or data reveal to play out naturally.
> 3. **Motion Declaration:** Every beat specifies shot framing, camera movement, and visual role.

---

## Audio Reference & Runtime Alignment

- **Master VO Audio File**: `voiceover/master_narration.wav`
- **Total Spoken Duration ($T_{audio}$)**: `MM:SS.mmm`
- **Total Visual Beats ($B$)**: `[Formula: round(T / 3.5)]`
- **Average Beat Duration**: `~3.5s`

---

## Chronological Beat Sheet

| Beat # | Timecode (Start – End) | Duration | Visual Type | Staging & Subject Description | Framing & Camera Motion | Spoken Voiceover Line |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| **010** | `00:00.0 - 00:03.5` | 3.5s | Static Image | [Subject description] | Wide establishing shot, slow push-in (1.0x to 1.1x) | "Spoken narration line..." |
| **020** | `00:03.5 - 00:12.0` | 8.5s | Remotion Graphic | [Chart / map description across 2-3 sentences] | Kinetic graph reveal, newsroom typography | "Spoken narration multi-sentence data explanation..." |
| **030** | `00:12.0 - 00:18.5` | 6.5s | AI Video Clip | [Continuous action / drone flight across 2 sentences] | Medium tracking shot, subtle parallax | "Spoken narration multi-sentence scene action..." |
