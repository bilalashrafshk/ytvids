# Phase 05: Character Setup — Episode 04

> Composite characters only (Hypothetical rule): invented, deliberately generic, archetypal. One master portrait per character, no turnaround sheets. Later poses are generated with the master attached as the reference image.
>
> **The visual joke of this episode:** everyone looks far younger than their age. Under the premise, body-age ≈ 25 + (real age − 25) × 0.45. So always show the real age on screen (badge, caption or label) next to a face that doesn't match it.

---

## Roster

| Character | Real age | Looks about | Role in the story | Signature trait | Reference file |
| :--- | :-: | :-: | :--- | :--- | :--- |
| **The girl** (at 6) | 6 | 6 | Opens the video: outnumbered at her own party | Yellow party dress, one lavender balloon | `ref_char_01_girl6.png` |
| **The girl** (at 120) | 120 | ~65 | Closes the video: writes her name on the key tag | Same lavender hair clip she wore at 6 | `ref_char_02_girl120.png` |
| **Great-great-grandfather** | 126 | ~70 | On the bouncy castle | Neat white beard, party hat, "126" badge | `ref_char_03_ggf.png` |
| **The man on the bench** | 91 | ~55 | Waits for the corner office: "Is he in?" | Sharp charcoal suit, briefcase on his knees | `ref_char_04_bench.png` |
| **The 70-year-old student** | 70 | ~45 | Beside an 18-year-old in the lecture hall | Reading glasses pushed up, an 11-page CV | `ref_char_05_student.png` |
| **The undertaker's apprentice** | ~80 | ~50 | Trained for 60 years, never seen a body | Black apron, spotless unused tools | `ref_char_06_apprentice.png` |

Mum (150, looks ~81), Grandma and her first husband, and the judge appear only once each. Generate them at the beat from the style clause below; no master needed.

---

## Master portrait prompts (Nano Banana 2 — 3840×2160)

Shared style clause (keep identical across all six): *clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients, light warm-neutral background, one lavender accent.*

### 1. The girl, age 6 (`ref_char_01_girl6.png`)
```
FILENAME: ref_char_01_girl6.png
TYPE: Static Image (Character Master Reference)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. Full-body portrait of a six-year-old girl in a yellow party dress, a small lavender hair clip, holding one lavender balloon, standing centred on a plain light warm-neutral background, curious half-smile. Generic, archetypal design with no distinctive real-person features. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, generic cartoon mascot style, round-head stick figure with dot eyes, multiple views, turnaround sheet, text, extra fingers.
CONTINUITY: Master reference; also the reference for ref_char_02 (same person at 120).
ON-IMAGE TEXT: None
```

### 2. The girl, age 120 (`ref_char_02_girl120.png`)
```
FILENAME: ref_char_02_girl120.png
TYPE: Static Image (Character Master Reference)
TECHNIQUE: Image reference: ref_char_01_girl6.png (same person, grown up)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. Full-body portrait of the same girl grown up, now a healthy woman who looks about sixty-five: silver-streaked hair, the same small lavender hair clip, practical coat, holding a brass house key with a paper tag. Plain light warm-neutral background, calm, slightly moved expression. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, frail or sickly elderly look, multiple views, turnaround sheet, text, extra fingers.
ON-IMAGE TEXT: None
```

### 3. Great-great-grandfather, 126 (`ref_char_03_ggf.png`)
```
FILENAME: ref_char_03_ggf.png
TYPE: Static Image (Character Master Reference)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. Full-body portrait of a fit, cheerful man who looks about seventy, neat white beard, colourful party hat, rolled-up shirt sleeves, a round lavender birthday badge reading "126" pinned to his chest, standing on a plain light warm-neutral background, grinning. Generic, archetypal design. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, frail elderly look, wheelchair, walking stick, multiple views, turnaround sheet, extra fingers.
ON-IMAGE TEXT: Direct in-generation text: "126" (badge)
```

### 4. The man on the bench, 91 (`ref_char_04_bench.png`)
```
FILENAME: ref_char_04_bench.png
TYPE: Static Image (Character Master Reference)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. A man who looks about fifty-five in a sharp charcoal suit, sitting upright on a wooden bench, briefcase on his knees, patient, hopeful expression, looking to his left at an unseen office door. Plain light warm-neutral corridor background, lavender accent on his tie. Generic, archetypal design. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, multiple views, turnaround sheet, text, extra fingers.
ON-IMAGE TEXT: None
```

### 5. The 70-year-old student (`ref_char_05_student.png`)
```
FILENAME: ref_char_05_student.png
TYPE: Static Image (Character Master Reference)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. A woman who looks about forty-five, reading glasses pushed up into greying hair, casual cardigan, backpack over one shoulder, holding a thick stapled CV, cheerful and determined. Plain light warm-neutral background, lavender accent on the backpack. Generic, archetypal design. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, frail elderly look, multiple views, turnaround sheet, extra fingers.
ON-IMAGE TEXT: None
```

### 6. The undertaker's apprentice (`ref_char_06_apprentice.png`)
```
FILENAME: ref_char_06_apprentice.png
TYPE: Static Image (Character Master Reference)
PROMPT: 3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, subtle dimensional gradients. A man who looks about fifty in a neat black apron over a white shirt, holding a polishing cloth, standing beside a tray of spotless, clearly unused tools, earnest and slightly wistful expression. Plain light warm-neutral background, lavender accent on the cloth. Generic, archetypal design. Follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, glossy 3D render, gore, coffins with bodies, dark horror lighting, multiple views, turnaround sheet, extra fingers.
ON-IMAGE TEXT: None
```
