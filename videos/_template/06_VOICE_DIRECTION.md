# Phase 06: Voice Direction & Audio Stems (VoxCPM2)

> **Instructions**: Standalone audio production deliverable. Provides human-readable overview of voice chunking, dynamic per-chunk delivery instructions, and decimal normalization checks. Accompanies [`06_VOICE_DIRECTION.json`](./06_VOICE_DIRECTION.json).
>
> **MANDATORY RULES:**
> 1. **Phonetic Decimal Normalization:** 100% of spoken decimal numbers MUST be written with the word "point" (e.g. `2 point 5 billion`), NEVER raw numeric decimals (`2.5`).
> 2. **Dynamic Control Instructions:** Every chunk gets its own vivid delivery instruction for that line. No fixed persona prefix — the cloned voice carries identity.
> 3. **Clean Spoken Text:** ZERO bracket tags (`[DATA]`, `[TENSE]`) may leak into spoken narration.

---

## 1. Master Voice Profile

- **Track Selection**: [Track 1 Corporate Investigation / Track 2 Hypothetical Simulation]
- **Narrator feel** (guides instructions, never pasted in): [e.g., sharp, fast-paced scenario guide]
- **Target Overall Cadence**: ~155 WPM

---

## 2. Chunk Summary Table

| Chunk ID | Act / Section | Word Count | Target Duration | Dynamic Register / Acoustic Mood |
| :--- | :--- | :--- | :--- | :--- |
| `chunk_001` | Prologue | 45 words | ~17.4s | Suspenseful, measured, hook curiosity |
| `chunk_002` | Act I | 80 words | ~31.0s | Analytical, escalating tempo |

---

## 3. Audio Synthesis Execution Gatekeeper

> [!CAUTION]
> **MANDATORY TIMING GATE (DO NOT PROCEED TO PHASE 07 WITHOUT VO AUDIO):**  
> Synthesize all stems via VoxCPM2 or TTS API, concatenate into `voiceover/master_narration.wav`, and generate `voiceover/metadata.json` (or `alignment.json`) containing word- and sentence-level timestamps.  
> **Beat Sheet (`07_BEAT_SHEET.md`) generation is strictly blocked until this step is complete.**
