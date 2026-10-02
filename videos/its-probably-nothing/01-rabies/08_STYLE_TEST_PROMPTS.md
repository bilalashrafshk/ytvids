# Style test prompts v2 — Episode 01: Rabies (Nano Banana 2, 3840x2160, 16:9)

> New direction (owner request): drop the realistic-room-plus-vector-Dennis look, which read as generic. Use a mid-century printed-pamphlet look: a **1950s public-health pamphlet**, the kind of hygiene film that tells you to see your doctor. Dennis and every room are drawn in the same screen-print style, so nothing looks pasted on.
> Kept distinct from the other channels on purpose (the repo's isolation check forbids shared accent hexes and borrowed characters): pale sage paper, deep navy ink, our own teal and mustard hexes, clinical red as the only accent, no host character.
> Draft palette (hexes not yet locked): paper `#E6EDE4` pale sage, ink `#1F2A44` deep navy, Dennis mustard `#D9A21B`, Dennis teal `#1F7A8C`, clinical red `#C8332B` (the disease only), drained grey `#9A9A94`.
> The channel's two new visual devices, both free in post: **colour plates drop away** (as Dennis gets sicker, the printed colour layers fade out one by one until only the navy line plate is left) and **misregistration as a progress bar** (the colour layers slide further out of alignment with the ink line as the illness advances).
> Generate #1 first and use it as the INPUT reference for #2, #4 and #5.

**Standing prompt clause (every still and AI video):**
> *1950s public-health education pamphlet illustration, flat mid-century modern shapes, confident deep-navy ink outlines, limited-palette screen print, visible halftone dot texture, slightly misregistered colour layers, soft paper grain on a pale sage-green paper base. Palette only: pale sage paper, deep navy, mustard yellow, teal, neutral grey, and one small clinical-red accent used only for the disease. Calm, wholesome, orderly tone that sits uneasily next to what is happening.*

**Standing negative prompt:** *photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, cream paper, stick figures, neon colours, heavy gradients, clutter, misspelled words, extra fingers, distorted faces, a different-looking Dennis.* (No ban on gore: this channel can show hard moments.)

---

### Still 1: Dennis Fine master portrait (character reference, generate first)
```
FILENAME: ref_char_01_dennis.png
TYPE: Static Image
TECHNIQUE: N/A
INPUT FRAMES: None
PROMPT: 3840x2160, 16:9, character reference sheet. 1950s public-health education pamphlet illustration, flat mid-century modern shapes, confident deep-navy ink outlines, limited-palette screen print, visible halftone dot texture, slightly misregistered colour layers, soft paper grain on a pale sage-green paper base. Dennis Fine, a cheerful, slightly overconfident man in his early forties, drawn as a warm, expressive mid-century character with a real face: a heavyset, soft, round build with broad shoulders, a round belly gently straining the shirt, full cheeks and a light double chin, short side-parted brown hair, thick expressive eyebrows, kind eyes, an easy half-smile. Mustard-yellow short-sleeved shirt, teal trousers, a white hospital wristband on his left wrist. He holds a white mug that reads "World's Okayest Grillmaster". Layout, left to right: front view, three-quarter view, side view, then a row of four face expressions underneath: breezy denial smile, puzzled, sweating and worried, relieved. Palette only: pale sage paper, deep navy, mustard yellow, teal, neutral grey. Generous empty space, one clear focal point per view. Crisp focus, professional framing, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, cream paper, stick figures, neon colours, heavy gradients, clutter, misspelled words, extra fingers, distorted faces
CONTINUITY: This is the master. Every later Dennis is generated from it.
ON-IMAGE TEXT: Direct in-generation text: "World's Okayest Grillmaster" (on the mug only)
DURATION: n/a
```

### Still 2: The present-day kitchen (the cold open)
```
FILENAME: style_test_02_kitchen.png
TYPE: Static Image
TECHNIQUE: Image-to-Image (character reference)
INPUT FRAMES: ref_char_01_dennis.png
PROMPT: 3840x2160, 16:9, 1950s public-health education pamphlet illustration, flat mid-century modern shapes, confident deep-navy ink outlines, limited-palette screen print, visible halftone dot texture, slightly misregistered colour layers, soft paper grain on a pale sage-green paper base. A tidy mid-century kitchen on an ordinary weekday morning: a boxy fridge, a patterned curtain, a round table with one chair, a window with a pale glow. In the middle, Dennis Fine from the reference image, same heavyset round build and face, same mustard shirt and teal trousers, hospital wristband, mug in his right hand, left hand rubbing his left forearm, puzzled but trying to smile. A phone lies on the table. A clean thought bubble above him with the words "It's probably nothing." The colour layers are very slightly out of register, just enough to feel uneasy. Dennis is the most saturated thing in the frame. Palette only: pale sage paper, deep navy, mustard yellow, teal, neutral grey. One clear focal point, generous negative space. Crisp focus, professional framing, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, cream paper, neon colours, heavy gradients, clutter, misspelled words, extra fingers, distorted faces, a different-looking Dennis
CONTINUITY: Dennis matches ref_char_01_dennis.png. The same kitchen is reused for the colour-plate drain.
ON-IMAGE TEXT: Direct in-generation text: "It's probably nothing."
DURATION: n/a
```

### Still 3: Explainer plate, the virus climbing the nerve
```
FILENAME: style_test_03_nerve_plate.png
TYPE: Static Image
TECHNIQUE: N/A
INPUT FRAMES: None
PROMPT: 3840x2160, 16:9, a 1950s public-health textbook plate in the same pamphlet style: flat shapes, deep-navy ink outlines, limited-palette screen print, halftone dot texture, soft paper grain on a pale sage-green paper base. One long, gently curving nerve drawn as a teal cable runs diagonally from a simple navy hand outline at lower left to a simple navy brain outline at upper right. A single small clinical-red dot, with a short halftone trail, sits on the cable a quarter of the way up. Generous empty space, one to three objects only, calm and clear. A small tab at the lower left with the words "Week 2". Palette only: pale sage paper, deep navy, teal, neutral grey, and the one clinical-red dot. Crisp focus, professional framing, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, 3D render, glossy CGI, modern flat corporate vector, white empty background, cream paper, mixed clip-art, neon colours, heavy gradients, clutter, misspelled words
CONTINUITY: Clinical red is used only for the virus. Same plate style for every explainer frame.
ON-IMAGE TEXT: Direct in-generation text: "Week 2"
DURATION: n/a
```

### Still 4: The fork, with the colour plates dropping away
```
FILENAME: style_test_04_fork.png
TYPE: Static Image
TECHNIQUE: Image-to-Image (character reference)
INPUT FRAMES: ref_char_01_dennis.png
PROMPT: 3840x2160, 16:9, split screen divided by a thin vertical navy line, 1950s public-health education pamphlet illustration, flat mid-century modern shapes, deep-navy ink outlines, screen print with halftone dots and paper grain on pale sage paper. Both halves show the same mid-century kitchen and the same Dennis Fine from the reference image, same pose, at the table with his mug. Left half: the colour plates have dropped away, so Dennis is mostly grey and navy line only, with only a ghost of mustard and teal left, and the colour layers are badly out of register, slipping off the ink outline. His shoulders slump. Right half: full colour, mustard and teal vivid, layers perfectly in register, standing straight with a relaxed smile. Under the left half, a clean tab with the words "IGNORED IT". Under the right half, a clean tab with the words "WENT ON DAY 3". Same bold sans-serif, large and few. Palette only: pale sage paper, deep navy, mustard yellow, teal, neutral grey. Crisp focus, professional framing, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, cream paper, neon colours, heavy gradients, clutter, misspelled words, extra fingers, distorted faces, a different-looking Dennis
CONTINUITY: Same Dennis and kitchen as still 2. This split is the channel's signature.
ON-IMAGE TEXT: Direct in-generation text: "IGNORED IT" and "WENT ON DAY 3"
DURATION: n/a
```

### Still 5: Intensity test, the glass of water
```
FILENAME: style_test_05_glass_of_water.png
TYPE: Static Image
TECHNIQUE: Image-to-Image (character reference)
INPUT FRAMES: ref_char_01_dennis.png
PROMPT: 3840x2160, 16:9, 1950s public-health education pamphlet illustration, flat mid-century modern shapes, deep-navy ink outlines, screen print with halftone dots, paper grain, pale sage paper. A dinner table in a mid-century dining room, a family seated and blurred into simple flat shapes in the background. In the foreground, Dennis Fine from the reference image, mostly drained to grey and navy line, one hand gripping a glass of water raised to his mouth, his throat and neck drawn tense, eyes wide with sudden fear, the glass trembling with a few drawn water drops, the colour layers badly out of register. A tiny clinical-red accent only in the shadow of the glass. Cinematic low angle, tense and quiet, one clear focal point. Palette only: pale sage paper, deep navy, neutral grey, a ghost of mustard and teal, and the one small clinical-red accent. Crisp focus, professional framing, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, cream paper, neon colours, heavy gradients, clutter, misspelled words, extra fingers, a different-looking Dennis
CONTINUITY: Dennis matches ref_char_01_dennis.png. Tests how hard a moment this style can carry.
ON-IMAGE TEXT: None
DURATION: n/a
```

---

## After generating

- Send me the five images. I will judge: does Dennis stay the same man across 1, 2, 4 and 5; does the style feel distinct from the other channels; does the colour-plate drain read in one second; does still 5 carry a hard moment without losing the look.
- The plate drain and the misregistration slide can also be done in post from still 2, with no new generation.
