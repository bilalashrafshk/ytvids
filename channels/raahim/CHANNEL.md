# Raahim — Channel Profile

*Absurd what-if stories and strange-but-true questions, explained with total calm. A 1950s educational filmstrip that has been handed a completely unreasonable question and is determined to answer it properly.*

This profile overrides the Bible wherever they overlap. Anything not covered here falls back to the shared engine (see `channels/README.md`).

---

## 1. Identity

**The promise:** a ridiculous premise, followed with real reasoning, all the way to the end. *The premise can be absurd; the reasoning under it can't be.*

**The joke engine:** deadpan contrast. The host and the visual style stay polite, orderly and unbothered while the world falls apart around them. The calmer the delivery, the funnier the consequence. Nobody on screen ever says "this is crazy."

**Two episode types:**
- **What-ifs (Track 2)** — an impossible premise followed honestly to the end. *What if everyone on Earth jumped at once?*
- **Strange-but-true questions (Track 3)** — a real, weird question whose answer overturns what you assumed. *Why do desert people wear more clothes in extreme heat? How did ancient Egyptians sleep without air conditioning?* Same deadpan Host, same style — the absurdity is in how strange the real answer is.

**Topics:** any domain — physics, biology, space, society, economics, animals, the human body. The test is the one-line pitch: *would a stranger tap on "What if…" before they've finished reading it?*

Examples: *What if everyone on Earth jumped at once? What if the Moon was made of cheese — the real consequences? What if you swallowed a teaspoon of neutron star? What if every cat vanished tomorrow? What if the ocean was drained for one day?*

**Never:** white empty backgrounds, stick figures, the clean-minimal look other what-if channels use, sarcasm or winking at the camera, mean-spirited humour, gore.

---

## 2. Pipeline overrides

| Engine step | For Raahim |
| --- | --- |
| STEP 2 track | **Track 2** (what-ifs) or **Track 3** (strange-but-true questions). **Never Track 1** — a real company, scandal or event is not a Raahim episode; flag it at HARD STOP 0. |
| Skeletons | What-ifs: **A5** (Constrained Hypothetical — clock + escalation, default), **A10** (Scale Wall), **A6** (two characters, two choices, e.g. *you vs. your neighbour who didn't*), **A9** (personal-choice parable). Strange-but-true: **A8** (Reversal Explainer — state the common belief, then break it; the channel's best-evidenced shape). Rank as usual at HARD STOP 1. |
| STEP 3 prompt | What-ifs: `invention-prompt-v2.md` with `[CHANNEL]` = *"an absurd what-if storytelling channel with a deadpan 1950s educational-film narrator"*. Strange-but-true: `research-prompt-track3-v2.md` (light — one trustworthy number per claim, heavy texture). **Never Deep Research. Never the Track 1 research prompt.** |
| Mechanic check | What-ifs, instead of research: list the **3–6 load-bearing numbers or physical claims** the story stands on (e.g. total force of 8 billion people landing) and verify each with a quick calculation or one reputable source. These are the only facts that must be right. The rest is invented and proud of it. |
| Script generator | `bible/08-hypothetical-script-generator.md`, with these switched **off**: the `[WATERMARK: HYPOTHETICAL SCENARIO]` badge (the whole channel is obviously fiction), the "teach a real *financial* mechanic" framing (any real mechanic works), finance jargon examples. Invented names only still applies. |
| Gates | CP-0 bands for the chosen skeleton, `gate_check.py`, Retell test, Two-Pass Rule — all unchanged. `gate_check.py`'s CITES gate matters doubly: "scientists say" is dryness here too. |
| Episode folder | `videos/raahim/<NN-slug>/`, built from `videos/_template/` with the overrides in this file. |

---

## 3. The comedy toolbox

What has made this kind of video funny. Use what the story wants; none of it is a quota.

- **Escalation** — each consequence a bigger *and different kind* of consequence, not the same joke scaled up.
- **The deadpan turn** — a catastrophe reported like a weather report. (*"This is, broadly, the end of Portugal. Now, the tides."*)
- **A small recurring victim** — one pigeon, one Gerald, whose fate we keep checking on.
- **The honest number** — a real, calculated figure made physical.
- **The button** — end on a quiet, polite, absurd line, not a lesson.

The only hard test is the engine's Retell test: every stretch of the video has something worth repeating.

---

## 4. Visual style — Mid-Century Deadpan

**Look:** 1950s mid-century educational illustration. Flat shapes, confident charcoal ink outlines, limited-palette screen printing, visible halftone dots, slightly misregistered colour layers, soft paper grain on a cream base. Orderly, wholesome, geometric.

**Palette** (the only colours; Remotion tokens in `remotion/src/themes/raahim.ts`):

| Role | Colour | Hex |
| --- | --- | --- |
| Paper (background) | Warm cream | `#F3EAD3` |
| Paper shadow | Aged cream | `#E4D6B5` |
| Ink (outlines, text) | Charcoal | `#2B2A28` |
| Calm / normal world | Teal | `#2F7F7A` |
| Escalation | Burnt orange | `#D2692F` |
| Highlight / the number | Mustard | `#E1A73B` |
| Catastrophe peak (sparingly) | Tomato red | `#D8433A` |

**Semantic lock:** teal = the world still normal; orange = things getting worse; mustard = the number to remember; tomato red = the peak moment only (≤ 1 accent use per act).

**Standing prompt clause (every still and AI video):**
> *1950s mid-century educational filmstrip illustration, flat mid-century modern shapes, limited-palette screen print, visible halftone dot texture, slightly misregistered colour layers, soft paper grain, cream off-white paper base, charcoal ink outlines. Palette only: warm cream, teal, burnt orange, mustard yellow, charcoal, one small tomato-red accent. Deadpan, wholesome, orderly tone. Every natural colour is rendered through the palette: skies cream or pale teal, grass and trees teal, the globe teal land on mustard-cream ocean — no true sky-blue, no grass-green.*

**Reference:** `remotion/public/filmstrip_jumping_people.jpg` is the first approved test — the Host's look is right; its natural blues and greens are the drift the clause above fixes.

**Standing negative prompt:** *photorealism, 3D render, glossy CGI, anime, modern flat corporate vector, white empty background, stick figures, neon colours, sky blue, grass green, realistic globe colours, heavy gradients, cluttered text, misspelled words, extra fingers, distorted faces.*

**Motion grammar** (what makes it move like a filmstrip, not a slideshow):
- Film-frame jitter (1–2px) and faint gate weave on everything; occasional dust specks.
- Limited animation: characters move in held poses at 8–12fps, like cut-outs; the camera moves smoothly.
- Transitions: a filmstrip "advance" wipe or a chalkboard-diagram build — never generic crossfades.
- Opening: cold, 2–4 AI video clips in-style carrying the premise (per the engine's cold-open default). No logo.

**Text on screen:** chunky hand-lettered sans for headlines (Remotion: *Bowlby One*), clean geometric sans for labels (*Jost*). Big and few — one label per idea.

---

## 5. Raahim — the Host

A cheerful, unflappable mid-century presenter: round head, neat side part, thick black-rimmed glasses, short-sleeved white shirt, skinny black tie, wooden pointer. Always polite, always slightly too calm. **His name is Raahim** — the channel is named after him. Reference prompts: `channels/raahim/STANDING_ASSETS.md`.

- One master portrait, then each pose generated *from* it as a reference image — every still and clip of him uses these, so he stays on-model.
- He's funniest where his calm plays against the chaos. He never panics; at most he adjusts his tie.
- Supporting cast are generic 1950s archetypes (the milkman, the housewife, the kid with a dog, the scientist in a lab coat) — invented, never real people.

---

## 6. Thumbnails

Replaces `bible/03`'s T1–T7 for this channel. Three formats:

| Code | Format | When |
| --- | --- | --- |
| **R1** | **Host + catastrophe** — the Host calm in the foreground (thumbs-up / pointer), the absurd consequence huge behind him | Default |
| **R2** | **The object** — one absurd hero object on cream paper (a cheese Moon, a teaspoon of neutron star bending the table) | When the premise is a single thing |
| **R3** | **Diagram gone wrong** — a tidy textbook diagram whose final arrow points to disaster | Science/scale episodes |

Rules carried over from the engine: Anchor Rule, Legibility Rule (168px test), Instant-Recognition Object Rule, two-pass generation. Channel rules: headline 1–3 words in mustard with charcoal outline, always on cream or teal — never white; one focal point; the style must be recognisable at 168px (halftone + palette do this).

---

## 7. Music & sound

Replaces `bible/10`'s M1–M5.

- **Bed:** 1950s library / educational-film music — bright strings, xylophone, woodwinds, light brass, a gentle lounge rhythm. It stays cheerful *through* the catastrophe; the contrast is the joke. Drop it to silence for the single biggest beat per act.
- **Stings:** brass "ta-da" on the honest number; a descending trombone only on the button, if at all.
- **Foley:** projector clicks and film-advance clunks on transitions, chalk scratches on diagram builds, a polite desk bell on each act break. Real-world impact sounds (boom, rumble) are allowed but always mixed a touch too small.
- Mixing levels and ducking follow the engine's standard (VO −16 dB, bed −34 dB).

---

## 8. Voice

VoxCPM2 process from `bible/12` unchanged; persona replaced:

- **Persona anchor:** *"A warm, articulate mid-century educational-film narrator, crisp and cheerful, with perfect diction and unshakeable calm."*
- **Dynamic register:** delivery never rises to match the chaos. Catastrophes are delivered *slightly slower and more pleased*, not louder. Deadpan turns get a half-beat pause before the understatement.

---

## 9. Titles

- Always a **"What if…"** or a direct absurd statement ("We Drained the Ocean for One Day"). Plain words; the premise must be fully understood from the title alone.
- The weirdness is in the premise, never in clickbait wording. No "SHOCKING", no "you won't believe".
- Two-pass: 10–15 raw titles first, then check.

---

## 10. Inherited rules — apply to Raahim exactly as written

Everything general in the engine applies here automatically (see `channels/README.md`). Listed so nothing depends on memory; where a rule names FinanceCraft's palette or register, read it as **this** channel's.

**On-screen text** (`bible/02` §7, `bible/11` Phase 4 checks)
- Glanceable, never reading: big bold numbers and 1–4 word labels, never sentences on screen.
- Labels big and few, never shrunk to fit; zero text-on-text or text-on-chart overlap.
- Any text-heavy asset must be animated (typewriter, highlight sweep, stamp) — never a static wall of text.
- Lettering matches the illustrated register (here: Bowlby One / Jost, charcoal or mustard, on cream).

**Composition & look** (`bible/02` §2, §5, §6, §8, §9)
- **Light by default:** cream paper ground; charcoal frames only for night scenes or a deliberate beat.
- One focal point per frame, generous negative space, minimal supporting elements.
- One or two recurring "home base" settings (e.g. the Host's classroom) rather than a new set every beat.
- Stills-first technique menu: AI stills + pan/zoom and parallax as the default; AI video where motion earns it (cold open, big moments); Frames-to-Video for character consistency.
- Maps start from a real reference map — never AI-generated geography.
- Standing negative prompts for scene and map beats, plus this channel's negative prompt (§4).
- Anything involving real loss of life gets restraint, not jokes.

**Motion & Remotion** (`bible/11`, `bible/15`, `SKELETON_LIBRARY.md`)
- Cold open on motion, no logo; shot-duration bounds; AI video cap; Remotion render-and-view check (CP-14); Theme Lock via `check_remotion_theme.py --tokens remotion/src/themes/raahim.ts`.

**Audio** (`bible/10` §1, §3, §5 — mixing only; music beds replaced by §7 above)
- Golden mixing rules, Breathe & Swell ducking, speech EQ pocket, dead-silence drop, VO processing chain.

**Thumbnails & titles** (`bible/03`, `bible/11` Phases 1–2)
- Anchor Rule, Legibility Rule (168px), Instant-Recognition Object Rule, subject-bridge check, Benchmark Cross-Check, two-pass generation, 4–5 title options with a recommendation.

**Scripts & gates** (`bible/05`, `bible/06`, `bible/08`, `gate_check.py`)
- Two-Pass Rule, CP-0 bands, Retell test, CITES gate, phonetic decimals ("point"), open loops and micro-hooks at every transition.

**Not inherited:** FinanceCraft's cel-shaded register and palette, caricatures of real people, SEC/evidence inserts, T1–T7, M1–M5, its narrator persona, research methodology, the HYPOTHETICAL SCENARIO watermark.

---

## 11. Benchmarks — already in the engine

These idea-bank outliers are this channel's lane, and the CP-0 bands for their skeletons were measured on them, so `gate_check.py -a <n>` is already calibrated to them. Transcripts: `references/idea_bank/top_outliers/`; measurements: `calibration/`.

| Video | Ratio | Skeleton | What to take from it |
| --- | --- | --- | --- |
| inkly — *Why Desert People Wear More Clothes in Extreme Heat* | 253.5× | A8 | The reversal: a belief everyone holds, broken by a physical answer |
| My Chaotic Stories — *POV: You Have $1 Trillion But Only 7 Days* | 99.3× | A5 | Second-person clock, escalating by category, ledger beat each time block |
| inkly — *How Did Ancient Egyptians Sleep in Desert Heat* | 90.8× | A8 | Sister video: proves the A8 shape repeats, not a one-off |
| Logical Money — *Renting vs Buying a Home* | 66.2× | A6 | Two characters, two choices, running score |
| Kurzgesagt — *Why Humanity Will Never Leave the Solar System* | 0.38× | A10 | Scale ladder (provisional — below the outlier bar) |

Use them for structure, pacing and the kind of question that pulls — never for their look, characters or wording (Clean-Room rule).

---

## 12. Still to decide (record decisions here)

- [x] The Host's name — Raahim
- [ ] Channel handle, banner and description
- [ ] First 5 episode ideas through the Idea Gate
- [ ] Add 3–5 more absurd-what-if outliers to `references/idea_bank/` (only one pure what-if benchmark so far), then re-measure A5's band
