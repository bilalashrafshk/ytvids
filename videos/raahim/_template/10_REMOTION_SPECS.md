# Phase 10: Batch 3 — Remotion

> **Channel:** Raahim — profile `channels/raahim/CHANNEL.md` (overrides anything below that conflicts). General engine rules apply automatically.
>
> **Rules:** use the Raahim kit in `remotion/src/channels/raahim/` (below) before writing anything new; colours only from `remotion/src/themes/raahim.ts`; check with `python3 check_remotion_theme.py --tokens remotion/src/themes/raahim.ts <dir>`; render a still of every component and look at it (CP-14); frame counts snap to `alignment.json`.

## Raahim kit (reusable)

| Component | Composition ID | Use for |
| :--- | :--- | :--- |
| `FilmLook` | wrapper | Grain, halftone, jitter, dust, vignette over any scene |
| `RaahimChalkboard` | `Raahim-Chalkboard` | Chalk-drawn diagram build: lines, an arrow, a circled answer |
| `HonestNumber` | `Raahim-HonestNumber` | The act's real number counting up, with a plain-words caption |
| `ActCard` | `Raahim-ActCard` | Filmstrip chapter card ("PART TWO: THE TIDES") |

## Inventory

| Beat # | Component | Props | Frames | Render command |
| :-: | :--- | :--- | :-: | :--- |
| **030** | `RaahimChalkboard` | `{"lines":["8 BILLION PEOPLE"],"answer":"EARTH"}` | 150 | `npx remotion render src/index.ts Raahim-Chalkboard out/030.mp4 --props='...'` |
