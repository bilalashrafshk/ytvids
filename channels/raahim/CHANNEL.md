# Raahim — Channel Profile

*Absurd what-if stories, explained with total calm. A 1950s educational filmstrip that has been handed a completely unreasonable question and is determined to answer it properly.*

This profile overrides the Bible wherever they overlap. Anything not covered here falls back to the shared engine (see `channels/README.md`).

---

## 1. Identity

**The promise:** a ridiculous premise, followed with real reasoning, all the way to the end. *The premise can be absurd; the reasoning under it can't be.*

**The joke engine:** deadpan contrast. The host and the visual style stay polite, orderly and unbothered while the world falls apart around them. The calmer the delivery, the funnier the consequence. Nobody on screen ever says "this is crazy."

**Topics:** any domain — physics, biology, space, society, economics, animals, the human body. The test is the one-line pitch: *would a stranger tap on "What if…" before they've finished reading it?*

Examples: *What if everyone on Earth jumped at once? What if the Moon was made of cheese — the real consequences? What if you swallowed a teaspoon of neutron star? What if every cat vanished tomorrow? What if the ocean was drained for one day?*

**Never:** white empty backgrounds, stick figures, the clean-minimal look other what-if channels use, sarcasm or winking at the camera, mean-spirited humour, gore.

---

## 2. Pipeline overrides

| Engine step | For Raahim |
| --- | --- |
| STEP 2 track | **Track 2 only.** Every episode is a hypothetical. (A real event is never a Raahim episode — route it to another channel or reject it at HARD STOP 0.) |
| Skeletons | **A5** (Constrained Hypothetical — clock + escalation) as the default, **A10** (Scale Wall — escalating size/impossibility), **A9** only for a personal-choice what-if. Rank as usual at HARD STOP 1. |
| STEP 3 prompt | `invention-prompt-v2.md` with `[CHANNEL]` = *"an absurd what-if storytelling channel with a deadpan 1950s educational-film narrator"*. **No research prompt. Never Deep Research.** |
| Mechanic check | Instead of research: list the **3–6 load-bearing numbers or physical claims** the story stands on (e.g. total force of 8 billion people landing) and verify each with a quick calculation or one reputable source. These are the only facts that must be right. The rest is invented and proud of it. |
| Script generator | `bible/08-hypothetical-script-generator.md`, with these switched **off**: the `[WATERMARK: HYPOTHETICAL SCENARIO]` badge (the whole channel is obviously fiction), the "teach a real *financial* mechanic" framing (any real mechanic works), finance jargon examples. Invented names only still applies. |
| Gates | CP-0 bands for the chosen skeleton, `gate_check.py`, Retell test, Two-Pass Rule — all unchanged. `gate_check.py`'s CITES gate matters doubly: "scientists say" is dryness here too. |
| Episode folder | `videos/raahim/<NN-slug>/`, built from `videos/_template/` with the overrides in this file. |

---

## 3. The comedy layer (added to every script, checked at Pass 2)

- **Escalation ladder.** Each consequence is bigger *and a different kind* of consequence than the last — personal → street → city → planet → physics. Never the same joke at a larger scale.
- **The deadpan turn.** At least once per act, the narrator reports something catastrophic in the tone of a weather report. (*"This is, broadly, the end of Portugal. Now, the tides."*)
- **One small, specific victim.** A recurring tiny character (a pigeon, a man named Gerald, one very confused dog) whose fate is tracked through the whole escalation. They get the callback at the end.
- **The honest number.** Each act lands one real, calculated number made physical (*"that's the energy of four hundred Hiroshimas, released by people who just wanted to see what would happen"*).
- **The button.** The episode ends on a quiet, polite, absurd final line — not a lesson, not a subscribe ask.

Pass 2 check: quote the ladder rungs in order, the deadpan turn per act, and the victim's callback line.

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

## 5. The Host (recurring character)

A cheerful, unflappable mid-century presenter: round head, neat side part, thick black-rimmed glasses, short-sleeved white shirt, skinny black tie, wooden pointer. Always polite, always slightly too calm. **Name: TBD** — pick one and record it here.

- Generate **one character reference sheet first** (front, three-quarter, pointing, thumbs-up, alarmed-but-composed) and reuse it as the reference image for every still and clip.
- He appears in the cold open, at each act's deadpan turn, and at the button. He never panics; at most he adjusts his tie.
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

## 10. Still to decide (record decisions here)

- [ ] The Host's name
- [ ] Channel handle, banner and description
- [ ] First 5 episode ideas through the Idea Gate
- [ ] Benchmark channels for this niche — the current CP-0 bands come from FinanceCraft's benchmark set (A5's is a what-if video, so it transfers); recalibrate once 3–5 absurd-what-if outliers are in `references/idea_bank/`
