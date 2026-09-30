# 14 — Regeneration list (from the review of the delivered assets)

> **Status after the regenerated set arrived** (`assets/regenerated/`, swapped into the draft and the timeline):
> **Resolved:** section A (`310_bouncer_badge.mp4`, 8 s, arms folded at the club door) and section B (`780_patent_sheet`, `790_blueprint_close` (delivered unnamed as `Blueprint_of_small_rectangular_plug…`), `820_stamp_licensed`, `1090_chip_board` (now reads only "AVAILINK"), `1430_contract_plug`).
> **Small leftovers, judged not worth another round on 1 to 3 second beats:** `780` shows an invented patent number (US 10,987,654 B1); `820` draws a two-pin plug and carries "OCT 2023"; `1430` has a gibberish Greek heading and lorem-ipsum body text.
> **Still open (optional):** section C (`1380`, `1410`, `350`, `830` clip) and section D.

Delivered: 76 of 76 beat stills, 13 of 13 feeders, 4 of 4 character references, 4 of 4 thumbnails, **28 of 29** AI clips. Stills are 1376×768 JPG (the prompts asked for 3840×2160); clips are 1280×720 at 24 fps with audio, in whole 6, 8 or 10 s lengths. None of that blocks the edit. The items below are the ones where the picture shows the wrong thing.

All prompts below carry the quality clause: *follow best industry-standard guidelines and quality and visualisations.* Style for every still: `3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients, light warm-greige neutral palette with a single gold accent, generous negative space, one clear focal point.`

## A. Missing

| File | What to do |
| :--- | :--- |
| `310_bouncer_badge.mp4` | Never arrived. Regenerate from the prompt in `09_VIDEO_PROMPTS.md` (Beat 310, Image-to-Video from `ref_char_03`). Until then the draft holds `ref_char_03` as a slow push for those 8.5 s. |

## B. Wrong subject (fix before publishing)

| Beat | Problem | Replacement prompt (add to the style line above) |
| :--- | :--- | :--- |
| `780_patent_sheet` | Draws a mains **power plug** (ground prong, neutral terminal). The video is about the small flat plug. | A patent-style technical drawing sheet pinned to a drawing board. It shows a small flat connector: a flat trapezoid plug body with two clipped bottom corners and a row of thin contacts, with thin dimension lines. No mains prongs, no electrical plug, no readable text. |
| `790_blueprint_close` | Same power-plug drawing, close up. | Close-up of the same flat-plug drawing lines with a thin gold outline around the plug. No prongs, no readable text. |
| `820_stamp_licensed` | The stamped drawing is a **house** plan. | A rubber stamp pressing onto a technical drawing of a small flat plug with two clipped corners (not a house), ink rising, dust in the light. ON-IMAGE TEXT: Direct in-generation text: "LICENSED" |
| `1090_chip_board` | Chip is printed **"MADE IN TAIWAN"**, with a made-up part number, lot and date. That states something about a real company that we can't source. | A single chip on a circuit board with a small blank paper tag tied to it. ON-IMAGE TEXT: Direct in-generation text: "AVAILINK". No other text, no country, no numbers. |
| `1430_contract_plug` | The contract is headed **"Agreement for electrical services"** and the plug is a mains plug. | A paper contract on a desk with a simple outline drawing of a small flat plug with two clipped corners in the middle of the page. The only printed word is the heading "CONTRACT". Nothing about electricity. |

## C. Weak (replace if time allows)

| Beat | Problem | Replacement idea |
| :--- | :--- | :--- |
| `1380_spec_small_print` | Almost blank page with a faint pattern; not a spec sheet. | A product spec sheet page, mostly headline and a big number block, with one tiny line of small print at the bottom edge. |
| `1410_plug_macro` | The plug is a rectangular connector with two square holes, not the flat plug with two clipped corners. | Macro of the flat plug with two clipped bottom corners, gold contacts visible, on a plain surface. |
| `350_coin_on_badge` | Shows an award medal reading "ACHIEVEMENT / MERIT". | A plain gold coin resting on a small blank badge. No text. |
| `830_real_vs_fake` (clip) | Shows mains two-prong plugs. | Optional: a real flat plug and an identical fake on a table, a chalk line between them, only the real one gets a stamp. |

## D. Minor, leave unless you're regenerating anyway

`240_plug_named` (tag reads "Oct 2023"), `250_clapper_reel` (invented names and dates on the clapperboard), `560_viewer_blank` (the TV back shows ports), `990_same_names` (name plates read as people's names), `Gold_coin_on_table…jpg` (unused alternate of `140_coin_small`).

## E. Whip-zoom plates (`140_feeder_…`)

`02`, `05` and `06` show mains power plugs, and `05` has a readable "POWER PLUG TYPES" label. The finished montage skips them and re-shows the good plates (`03`, `04`, `07`, `08`, then lands on `01`), so nothing is needed. If you'd like fresh plates, ask for video and audio leads instead: a yellow composite plug, a red-and-white audio pair, a VGA plug.

## F. Flywheel cutouts (`680_feeder_…`)

Delivered as JPG with a fake checkerboard baked in, so their backgrounds were removed locally (`scripts/prepare_ep05_remotion_inputs.py`). No action needed.
