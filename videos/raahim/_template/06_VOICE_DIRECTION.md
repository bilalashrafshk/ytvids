# Phase 06: Voice Direction (VoxCPM2)

> **Channel:** Raahim — profile `channels/raahim/CHANNEL.md` (overrides anything below that conflicts). General engine rules apply automatically.
>
> **Instructions:** VoxCPM2 process from `bible/12`, with Raahim's persona. Accompanies `06_VOICE_DIRECTION.json`.
>
> **Rules:** phonetic decimals ("point"); a vivid delivery instruction written fresh for every chunk, no fixed persona prefix; zero bracket tags in spoken text.

---

## Narrator feel (guides every instruction; never pasted in)
"A warm, articulate mid-century educational-film narrator, crisp and cheerful, with perfect diction and unshakeable calm."

## Dynamic register rules
- Never rises to match the chaos. Catastrophes: *slightly slower and more pleased*, not louder.
- Deadpan turns: half-beat pause before the understatement.
- Honest number: clear, proud, a touch slower.

## Chunk table

| Chunk | Act | Words | Target duration | Dynamic register |
| :--- | :--- | :-: | :-: | :--- |
| `chunk_001` | Cold open | | | Speaks with polite, bright curiosity, as if introducing a perfectly ordinary topic. |

> [!CAUTION]
> **Timing gate:** synthesize all chunks → `voiceover/master_narration.wav` + `voiceover/alignment.json` **before** writing `07_BEAT_SHEET.md`.
