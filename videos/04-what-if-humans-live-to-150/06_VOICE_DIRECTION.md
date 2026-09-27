# Phase 06: Voice Direction (VoxCPM2) — Episode 04

> Draft A v2, split into 47 chunks at paragraph boundaries (2–6 sentences each; one-line beats merged with their neighbour). Machine file: `06_VOICE_DIRECTION.json`, mirrored to `voiceover/VOICE_DIRECTION_VOXCPM2.json`.
>
> **Rules applied:** one locked persona on every chunk; the second clause varies pacing only (no volume words, no acting); bracket tags stripped from spoken text; zero raw decimals; zero underscores; one earned `[sigh]` (the "never better" turn), within the ~1 per 2–4 min ceiling.

---

## 1. Persona anchor (locked, identical on every chunk)
`"Engaging video essay storyteller, curious and articulate."` — the channel's Engaging Video Essay Storyteller. A12 has no preset anchor. This one fits a curious world tour better than the finance-educator or ticking-clock anchors. Clone against the channel's saved reference clip; no new voice design.

## 2. Chunks — 1562 words, ~10.1 min at 155 wpm

| Chunk | Register | Words | Target | Delivery (second clause) |
| :-: | :--- | :-: | :-: | :--- |
| `0` | Irony | 53 | ~20.5s | dry, understated delivery, letting the details do the work. |
| `1` | Build | 51 | ~19.7s | calm curiosity, unhurried and articulate. |
| `2` | Build | 26 | ~10.1s | gently rising interest, as the pieces connect. |
| `3` | Build | 41 | ~15.9s | steady, curious momentum, one step leading to the next. |
| `4` | Build | 25 | ~9.7s | a shade more energy, following the chain forward. |
| `5` | Weight | 15 | ~5.8s | quiet, unhurried weight, each word placed with care. |
| `6` | Weight | 52 | ~20.1s | calm perspective, letting the moment land. |
| `7` | Weight | 18 | ~7.0s | a touch softer and slower, without melodrama. |
| `8` | Irony | 63 | ~24.4s | calm, deadpan restraint, the punchline already clear. |
| `9` | Irony | 9 | ~3.5s | matter-of-fact warmth, noticing the absurd without fuss. |
| `10` | Irony | 49 | ~19.0s | light, amused understatement, unhurried. |
| `11` | Irony | 19 | ~7.4s | dry, understated delivery, letting the details do the work. |
| `12` | Build | 49 | ~19.0s | calm curiosity, unhurried and articulate. |
| `13` | Build | 43 | ~16.6s | gently rising interest, as the pieces connect. |
| `14` | Build | 8 | ~3.1s | steady, curious momentum, one step leading to the next. |
| `15` | Build | 53 | ~20.5s | a shade more energy, following the chain forward. |
| `16` | Build | 16 | ~6.2s | calm curiosity, unhurried and articulate. |
| `17` | Build | 36 | ~13.9s | gently rising interest, as the pieces connect. |
| `18` | Build | 25 | ~9.7s | steady, curious momentum, one step leading to the next. |
| `19` | Irony | 67 | ~25.9s | calm, deadpan restraint, the punchline already clear. |
| `20` | Irony | 16 | ~6.2s | matter-of-fact warmth, noticing the absurd without fuss. |
| `21` | Irony | 49 | ~19.0s | light, amused understatement, unhurried. |
| `22` | Irony | 13 | ~5.0s | dry, understated delivery, letting the details do the work. |
| `23` | Build | 18 | ~7.0s | a shade more energy, following the chain forward. |
| `24` | Build | 55 | ~21.3s | calm curiosity, unhurried and articulate. |
| `25` | Build | 17 | ~6.6s | gently rising interest, as the pieces connect. |
| `26` | Build | 41 | ~15.9s | steady, curious momentum, one step leading to the next. |
| `27` | Build | 30 | ~11.6s | a shade more energy, following the chain forward. |
| `28` | Build | 50 | ~19.4s | calm curiosity, unhurried and articulate. |
| `29` | Tension | 38 | ~14.7s | measured seriousness, a little tighter and steadier. |
| `30` | Tension | 42 | ~16.3s | focused, low-register restraint, deliberate and steady. |
| `31` | Tension | 39 | ~15.1s | measured seriousness, a little tighter and steadier. |
| `32` | Tension | 38 | ~14.7s | focused, low-register restraint, deliberate and steady. |
| `33` | Tension | 45 | ~17.4s | measured seriousness, a little tighter and steadier. |
| `34` | Weight | 49 | ~19.0s | resolute, quiet finality, closing without melodrama. |
| `35` | Weight | 14 | ~5.4s | quiet, unhurried weight, each word placed with care. |
| `36` | Weight | 21 | ~8.1s | calm perspective, letting the moment land. |
| `37` | Weight | 38 | ~14.7s | a touch softer and slower, without melodrama. |
| `38` | Build | 11 | ~4.3s | gently rising interest, as the pieces connect. |
| `39` | Build | 31 | ~12.0s | steady, curious momentum, one step leading to the next. |
| `40` | Build | 40 | ~15.5s | a shade more energy, following the chain forward. |
| `41` | Build | 22 | ~8.5s | calm curiosity, unhurried and articulate. |
| `42` | Build | 16 | ~6.2s | gently rising interest, as the pieces connect. |
| `43` | Weight | 38 | ~14.7s | resolute, quiet finality, closing without melodrama. |
| `44` | Weight | 38 | ~14.7s | quiet, unhurried weight, each word placed with care. |
| `45` | Weight | 20 | ~7.7s | calm perspective, letting the moment land. |
| `46` | Weight | 15 | ~5.8s | a touch softer and slower, without melodrama. |

## 3. Timing gate — do this before Phase 07

> [!CAUTION]
> Generate **one chunk per call** (long inputs make VoxCPM2 unstable), using `control_instruction` + `target_text` exactly as written. Concatenate in `chunk_id` order into `voiceover/master_narration.wav`, then produce `voiceover/alignment.json` with sentence-level timestamps. **The beat sheet is blocked until both files exist.**

Spot-check first: chunk 0 (opening), the `[sigh]` chunk, and the "Is he in?" chunk. If any sounds like a different narrator, soften that chunk's second clause rather than changing the anchor.
