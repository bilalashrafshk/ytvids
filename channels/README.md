# Channels

The engine is shared; each channel is a **profile**. `00-ROUTER.md` STEP 0 asks which channel a run is for, then loads that channel's `CHANNEL.md` before anything else.

| Channel | Profile | Format | Episode folder |
| --- | --- | --- | --- |
| **FinanceCraft** | `channels/financecraft/CHANNEL.md` | Finance documentaries: case autopsies, hypotheticals, mechanism explainers | `videos/` |
| **Raahim** | `channels/raahim/CHANNEL.md` | Absurd what-if stories in a 1950s deadpan educational-film style | `videos/raahim/` |

## How precedence works

1. **The channel profile wins** wherever it speaks: identity, allowed tracks and skeletons, style, palette, characters, thumbnails, music, voice, titles, and any rule it explicitly switches off.
2. **Shared engine files** apply unless the profile overrides them: `00-ROUTER.md`, `IDEA_GATE.md`, `SKELETON_LIBRARY.md`, the gate scripts, and the process sections of the Bible (`bible/05` CP-VERIFY + Two-Pass Rule, `bible/06` CP-0, `bible/11` production phases, `bible/12` voice process, `bible/15` Remotion process).
3. **FinanceCraft-only files** are never loaded for another channel unless its profile says so: the Bible index's identity sections, `bible/01`, `bible/02`, `bible/03`, `bible/07`, `bible/10`, `bible/13`, `bible/14`.

## Isolation

The Clean-Room rule extends across channels: never look at, copy or anchor to another channel's episodes, characters, palette or thumbnails. Two channels that look alike to YouTube look like mass-produced content.

## Adding a channel

Copy `raahim/CHANNEL.md` as the shape, fill every section, add a Remotion theme in `remotion/src/themes/<name>.ts`, add a row above, and add the channel to STEP 0's list in `00-ROUTER.md`.
