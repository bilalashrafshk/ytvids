# Channels

The engine is shared; each channel is a **profile**. `00-ROUTER.md` STEP 0 asks which channel a run is for, then loads that channel's `CHANNEL.md` before anything else.

| Channel | Profile | Format | Episode folder |
| --- | --- | --- | --- |
| **FinanceCraft** | `channels/financecraft/CHANNEL.md` | Finance documentaries: case autopsies, hypotheticals, mechanism explainers | `videos/` |
| **Raahim** | `channels/raahim/CHANNEL.md` | Absurd what-ifs and strange-but-true questions in a 1950s deadpan educational-film style | `videos/raahim/` |
| **It's Probably Nothing** | `channels/its-probably-nothing/CHANNEL.md` | Medical explainers told through Dennis Fine, the man who ignores the symptom; a fork shows the road where he goes | `videos/its-probably-nothing/` |

## How precedence works

1. **The channel profile wins** wherever it speaks: identity, allowed tracks and skeletons, look, palette, characters, thumbnail formats, music beds, voice persona, titles, and any rule it explicitly switches off.
2. **Everything else in the engine applies to every channel automatically** — including the general production rules that happen to live in FinanceCraft's Bible files: minimal, glanceable on-screen text; big-and-few labels with no overlaps; one focal point; recurring settings; animate any text-heavy asset; the stills-first technique menu; map accuracy; standing negative prompts; loss-of-life restraint; audio mixing, ducking and micro-audio mechanics; the thumbnail Anchor / Legibility / Instant-Recognition / Benchmark rules; the Two-Pass Rule, CP-0, cold open and every gate. **A new general rule added anywhere in the engine applies to all channels unless a profile opts out by name.**
3. **FinanceCraft identity is never inherited:** its mission and tracks, cel-shaded register and palette, caricature and real-person rules, SEC/evidence-insert conventions, T1–T7 thumbnail styles, M1–M5 music beds, narrator persona, research methodology and channel descriptions.

Each profile has an **Inherited rules** section listing the general rules by file, so nothing depends on memory.

## Isolation

The Clean-Room rule extends across channels: never look at, copy or anchor to another channel's episodes, characters, palette or thumbnails. Two channels that look alike to YouTube look like mass-produced content.

### Enforced by `check_channel_isolation.py`

The Clean-Room rule is checked by script, not memory: registry (every channel listed here and in the router), ownership (every `videos/` folder and Remotion file belongs to exactly one channel), identity (no other channel's names or characters in a channel's files), imports (no Remotion code importing another channel's theme or components) and themes (no shared accent hex). Run it before every handoff. Ownership by location: FinanceCraft owns `videos/NN-*`, `remotion/src/scenes/` and `tokens.ts`; other channels own `videos/<channel>/`, `remotion/src/channels/<channel>/` and `remotion/src/themes/<channel>.ts`.

## Adding a channel

Copy `raahim/CHANNEL.md` as the shape, fill every section, add a Remotion theme in `remotion/src/themes/<name>.ts`, add a row above, add the channel to STEP 0's list in `00-ROUTER.md`, and add an entry to `CHANNELS` in `check_channel_isolation.py` (the script fails until you do).
