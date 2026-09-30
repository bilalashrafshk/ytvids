# It's Probably Nothing — Channel Profile

*Medical explainers told as the story of one man who ignored the symptom. Dennis Fine says "it's probably nothing", the viewer knows better, and the video shows both roads: the one where he waits and the one where he goes.*

This profile overrides the Bible wherever they overlap. Anything not covered here falls back to the shared engine (see `channels/README.md`). Background, evidence and reasoning behind every decision are in `CONCEPT.md` (same folder).

---

## 1. Identity

**The promise:** a real disease explained honestly, in plain words, through a person you recognise from your own denial. *The story is invented; the medicine under it can't be.*

**The engine of the channel:** dramatic irony. Dennis explains every warning sign away; the calm clinical narrator says what it actually is. The viewer sits in the gap. Then the story forks and shows what the same symptom looks like on the road where he goes.

**The line:** *"It's probably nothing."* Dennis's catchphrase and the channel's running line. (Known and accepted overlap: the reference channel, Mr. Death, uses the phrase once in one sign-off. We own it through Dennis and the fork; see `CONCEPT.md` §7.)

**Episode type:** one type. A disease, condition or medical event explained through a Dennis story. Topics are diseases and conditions people tend to wave off: cancers, heart and stroke, diabetes, infections, autoimmune and neurological conditions, common "just stress" symptoms.

**Topics — allowed test:** would a stranger recognise the symptom in their own life within the first ten seconds? If they'd only recognise the disease from the name, it is a weaker fit.

**Topics — never:**
- Self-harm, suicide, or method-focused subjects (no hanging, overdose, self-injury episodes).
- Anything that mocks a patient, a condition, or the dead. The joke is Dennis's denial, never the suffering.
- Anything that gives treatment advice a viewer could act on instead of seeing a doctor.
- Graphic gore, or sensationalising the moment of death.

**Reference, for structure only:** Mr. Death (*What Dying From Cancer Feels Like*, *What Dying From a Heart Attack Feels Like*). Transcripts: `channels/its-probably-nothing/reference/transcripts/`. Never copied for look, wording or characters (Clean-Room rule).

---

## 2. Pipeline overrides

| Engine step | For It's Probably Nothing |
| --- | --- |
| STEP 2 track | **Track 3** (mechanism explainer) with a personal timeline. A hybrid: there is a system to explain *and* a person moving through time. Never Track 1 (no real company/scandal) and never Track 2 (no impossible hypotheticals). Flag mismatches at HARD STOP 0. |
| Skeletons | **A13 Clinical Timeline** (default; defined in §3, provisional). **A6** supplies the fork (two characters, two choices). **A8** (Reversal Explainer) when a popular belief about the disease is the hook. **A5** clock-and-escalation feel for fast-moving events (stroke, sepsis, heart attack). Rank as usual at HARD STOP 1. |
| STEP 3 prompt | `research-prompt-track3-v2.md`, **tightened**: every medical claim needs a sourced entry in the claims ledger (see §3, §11). Not the light "one number per claim" version. Never Deep Research. |
| Idea Gate | Runs unchanged, plus a **safety screen** (topic-never list above) and the question *"what is the Day 3 sign a viewer could act on?"* No answer, no episode. |
| Script generator | `bible/07-script-generation-prompt.md` or `bible/08` structure adapted to A13. Second-person cold open is the default. |
| Gates | CP-0 bands for the chosen skeleton, `gate_check.py`, Retell test, Two-Pass Rule — unchanged. `gate_check.py -a 13` (band calibrated on 14 Mr. Death episodes, see `SKELETON_LIBRARY.md` A13) plus **`gate_claims.py <script> 02_CLAIMS_LEDGER.md --metadata 13_FINAL_METADATA.md`**: a medical claim without a locatable source, an unhedged preclinical claim, an uncovered statistic, conspiracy framing, treatment advice, a missing clinician pointer, or a missing disclaimer all fail. Topic screen: `gate_claims.py --topic "..."`. For A13, `gate_check.py` allows the words *study, research, evidence, data* (the ledger polices them instead of the finance "research is invisible" rule). |
| Episode folder | `videos/its-probably-nothing/<NN-slug>/`, built from `videos/_template/` with the overrides in this file. |
| Captions | SRT for YouTube upload only. No captions or text labels written into the CapCut draft (standing rule). |

---

## 3. Episode shape — A13 Clinical Timeline (provisional)

Registered in `SKELETON_LIBRARY.md` (A13) and calibrated in `gate_check.py -a 13` on 14 Mr. Death episodes (transcripts and metrics: `reference/`). Structure measured in the reference episodes, plus our fork. Single-channel evidence, so provisional.

| Beat | What happens | Notes |
| --- | --- | --- |
| **1. Day 1 cold open** | Dennis notices something small. Second person or close third. He explains it away step by step; every explanation is plausible. Ends on a hard beat. | ~40–70s. Motion from frame one, no logo. Bubble: *"It's probably nothing."* |
| **2. Narrator enters** | The clinical narrator names what it actually is, then opens a quick game: a myth quiz (True/False or multiple choice) that corrects the popular belief about this disease. | Promise the answer will be paid off later. |
| **3. Mechanism, plainly** | "The 90-second version": what the organ does, what goes wrong. Analogies over jargon. Explainer mode visuals. | One organ/system per beat. |
| **4. The fork** | The story splits at the Day 1 decision. **Ignoring-Dennis** waits; **Goes-on-Day-3 Dennis** sees a doctor. | Split-screen or alternating. This is the channel's signature; never skipped. |
| **5. Dated timeline** | Ignoring-Dennis's stages ("Month 2–3"...), with the colour drain progressing. The other Dennis's path runs alongside, briefly, at each stage. | Keep suffering non-graphic and factual. |
| **6. What it feels like** | Short second-person recap of the experience. | Sober. No jokes at the patient's expense. |
| **7. Reality check** | The real numbers, each with a ledger source. | Big and few. |
| **8. The button** | "What Dennis should have noticed on Day 3": the early signs in plain language. Ends on the running line. | Actionable and sober. Not a lecture, not a sermon. |

**Hard rules for the skeleton:** the fork is mandatory; every quantitative or medical claim exists in the claims ledger; simplifications are labelled as simplifications; the ending always points the viewer toward a doctor, never toward self-treatment.

---

## 4. Dennis Fine — the protagonist

Cheerful, overconfident, early 40s. **Catchphrase: "It's probably nothing."** Payoff line: *"I'm fine, Dennis."*

- **Design:** a fully designed character with a face and expressions (not a faceless mannequin, not a mascot). Fixed colour identity: **mustard shirt, teal trousers**, a hospital wristband from frame one, a "World's Okayest [something]" mug. Round, soft, expressive brow. *Turnaround sheet still to be drawn.*
- **Running gags:** Googles the symptom and stops at the first reassuring result; takes advice from a coworker whose "cousin had the same thing"; treats "it's just stress" as a diagnosis; apologises to the doctor for "bothering" them.
- **A different Dennis every episode.** Same personality and look, different job, family and home, so any disease can be told without continuity. The audience recognises the flaw, not the biography.
- **Supporting cast:** doctor, spouse, coworker, nurse — generic archetypes, invented, never real people. Always simpler and less saturated than Dennis so he stays the focal point.
- **Never:** Dennis is not mocked *for being sick*. He is gently mocked for the denial only, and the narrator is on his side.

**Voices:** Dennis's inner lines (optimistic, wrong) versus a dry, calm clinical narrator who says what is really happening. **Open decision:** two voices or one (see §8). With one voice, Dennis's lines are on-screen thought bubbles only.

---

## 5. Visual style — Realistic scenes + minimal explainer

Two modes, chosen per beat. Full reasoning in `CONCEPT.md` §8.

**Story mode: realistic rooms, designed Dennis**
- Realistic (photoreal-style) recurring sets: home, workplace, clinic, waiting room, hospital corridor. Built once and reused (engine's recurring-settings rule).
- Dennis composited into the scene with matched light and contact shadows. Thought bubbles carry his inner lines.
- **Colour drain:** the scene grade desaturates as the illness advances and Dennis's colours fade to grey; the healthy fork stays at full saturation. Done as a grade in Remotion/CapCut, so it costs no extra generation.

**Explainer mode: minimal background, one illustration family**
- White or very light neutral background, one to three objects on screen, generous empty space.
- Organs, cells and diagrams in **one consistent illustration style** — no mixed stock icons, ever.
- Stage labels as clean tags ("Month 2–3", "Reality Check"). Never floating text on empty space.
- A white background cannot desaturate, so the drain in this mode is carried by Dennis, the organs and the accent colour.

**Palette (draft; tokens to be locked in `remotion/src/themes/its-probably-nothing.ts`)**

| Role | Colour | Note |
| --- | --- | --- |
| Dennis shirt | Mustard | Fixed |
| Dennis trousers | Teal | Fixed |
| The disease / clinical accent | Clinical red | Reserved for the disease and used nowhere else |
| Drained state | Neutral grey | End of the colour drain |
| Explainer ground | White / very light neutral | Explainer mode only |

*Exact hex values to be set during the style bible pass.*

**Semantic lock:** clinical red = the disease only; full colour = still well; grey = drained. Dennis's mustard/teal never changes except by the drain.

**Differentiation from the reference (which uses a white void and photoreal AI rooms):** a real, coloured, expressive Dennis instead of a grey faceless mannequin; the fork; the colour drain as a progress bar; one consistent illustration family; our own fixed room set; own palette, type and layout.

**Standing negative prompt (every still and AI video, draft):** *gore, blood spatter, graphic wounds, exposed organs realism, morgue or corpse imagery, faceless grey mannequin, ghost mascot, mixed stock clip-art, clutter, cluttered text, misspelled words, extra fingers, distorted faces, uncanny valley skin, a different-looking Dennis.*

**Text on screen:** clean sans-serif, big and few. Type tokens to be set with the palette.

**Known risks:** illustrated character composited into realistic stills can look pasted-on (mitigation: matched grade, contact shadows, test batch first); overall look sits close to the reference (mitigation: the differentiators above); sensitivity of realistic clinical imagery (mitigation: non-graphic, loss-of-life restraint).

---

## 6. Thumbnails

*Deferred: not yet decided. Until then the shared rules in `bible/03` (last section) apply: characters generated first, roster characters only, palette from the episode, Not-a-Copy check.*

*Original note: not yet decided. Formats, titles and hooks will be added here once the visual style is locked.* Rules carried from the engine already apply: Anchor Rule, Legibility Rule (168px), Instant-Recognition Object Rule, two-pass generation.

---

## 7. Music & sound

*Direction only; beds to be chosen during the audio pass.*

- **Bed:** low, sparse, unsettled but not horror — subtle piano or muted strings, no jump-scare stings. Lighter during the denial beats, thinner and colder as the colour drains.
- **Silence:** drop to near-silence for the single biggest beat per act (the doctor's pause, the diagnosis).
- **Foley:** hospital ambience (monitor beeps kept quiet and low), phone buzz on the Google-the-symptom gag. Never dramatised heartbeat or flatline for effect.
- Mixing levels and ducking follow the engine's standard (VO −16 dB, bed −34 dB).
- Reference measurement for context: the reference channel mixes at −19.4 LUFS integrated with a very flat 2.4 LU loudness range; we follow our own standard, not theirs.

---

## 8. Voice

TTS is **BreezeTTS2**. **Owner decision: the voice-direction file uses the same JSON chunk format as the FinanceCraft episodes** (`chunk_id`, `section`, `control_instruction`, `target_text`; see `videos/its-probably-nothing/_template/06_VOICE_DIRECTION.json`), chunked at paragraph turns, spoken-form text, no bracket tags. If BreezeTTS2 turns out to need different fields, convert at the last step rather than changing the episode files.

- **Narrator feel:** dry, calm, warm — a clinician who has seen this before and is quietly on Dennis's side. Not gleeful, not solemn.
- **Register:** delivery never rises to match the drama. Understatement carries the humour; the hardest beats are delivered slower and plainer.
- **Dennis's lines:** on-screen bubbles unless the two-voice decision is taken.
- Reference pacing, for context: ~182–199 wpm in the reference episodes. Our pace is set by the engine standard, not copied.

---

## 9. Titles

*Deferred: not yet decided.* Constraint already fixed: the name of the channel is the running line, so titles should not overuse it. Two-pass rule applies (10–15 raw titles first, then check).

---

## 10. Inherited rules — apply to It's Probably Nothing exactly as written

Everything general in the engine applies here automatically (see `channels/README.md`). Listed so nothing depends on memory; where a rule names FinanceCraft's palette or register, read it as **this** channel's.

**On-screen text** (`bible/02` §7, `bible/11` Phase 4 checks)
- Glanceable, never reading: big bold numbers and 1–4 word labels, never sentences on screen.
- Labels big and few, never shrunk to fit; zero text-on-text or text-on-chart overlap.
- Any text-heavy asset must be animated (typewriter, highlight sweep, stamp) — never a static wall of text.

**Composition & look** (`bible/02` §2, §5, §6, §8, §9)
- One focal point per frame, generous negative space, minimal supporting elements.
- One or two recurring "home base" settings rather than a new set every beat.
- Stills-first technique menu: AI stills + pan/zoom and parallax as the default; AI video where motion earns it (cold open, big moments); Frames-to-Video for character consistency.
- Maps start from a real reference map — never AI-generated geography.
- Standing negative prompts for scene beats, plus this channel's negative prompt (§5).
- **Anything involving real loss of life gets restraint, not jokes** — this rule is central here and is why the humour is Dennis's denial, not the outcome.

**Motion & Remotion** (`bible/11`, `bible/15`, `SKELETON_LIBRARY.md`)
- Cold open on motion, no logo; shot-duration bounds; AI Video Clip Rule (even 2–10s clips spanning sentences, retimed not trimmed, ~40–60% video); Remotion render-and-view check (CP-14); Theme Lock via `check_remotion_theme.py --tokens remotion/src/themes/its-probably-nothing.ts` (once the theme exists).

**Audio** (`bible/10` §1, §3, §5 — mixing only; music direction replaced by §7 above)
- Golden mixing rules, Breathe & Swell ducking, speech EQ pocket, dead-silence drop, VO processing chain.

**Thumbnails & titles** (`bible/03`, `bible/11` Phases 1–2)
- Anchor Rule, Legibility Rule (168px), Instant-Recognition Object Rule, subject-bridge check, Benchmark Cross-Check, two-pass generation, 4–5 title options with a recommendation.

**Scripts & gates** (`bible/05`, `bible/06`, `bible/08`, `gate_check.py`)
- Two-Pass Rule, CP-0 bands, Retell test, CITES gate, phonetic decimals ("point"), open loops and micro-hooks at every transition.

**Captions & assembly** (memory rules)
- Captions ship as a separate SRT for YouTube; never written into the CapCut draft. Programmatic CapCut drafts need one manual folder import; every referenced file must live in that one folder, and that folder is inside the episode's own folder (Asset Containment, `bible/11` CP-11; check with `scripts/check_capcut_assets.py`).

**Not inherited:** FinanceCraft's cel-shaded register and palette, caricatures of real people, SEC/evidence inserts, T1–T7, M1–M5, its narrator persona, research methodology, the HYPOTHETICAL SCENARIO watermark. Raahim's mid-century look, Host, and its ban on white backgrounds do not apply to this channel.

---

## 11. Medical accuracy and safety — channel-specific rules

Medicine is the one place this engine cannot rely on "invented and proud of it".

**Claims ledger.** Every medical claim, number, timeline or mechanism in the script has an entry: the claim, its source, the source's tier, and whether it is a simplification.
- **Acceptable sources:** peer-reviewed literature and systematic reviews, WHO, NIH/NCI/CDC, national health services, professional-society clinical guidelines.
- **Not acceptable as the sole source:** single small studies, animal or cell-culture findings presented as human outcomes, news articles, wellness sites, forums.
- **Pre-clinical or early findings** may be mentioned only if labelled as such, in plain words ("early lab research, not proven in people"). The reference channel's cancer/fasting segment is the failure this rule exists to prevent: early research framed as near-actionable, with a "they don't want you to know" flavour. **No conspiracy framing, ever.**
- **The timeline is illustrative.** Stage-by-stage timelines vary widely between patients; the script says so once, plainly.

**Never give the viewer a reason to skip the doctor.** No diet, supplement, fasting or home-treatment claims. Every episode's button points toward a clinician.

**Safety screen at the Idea Gate:** self-harm and method subjects are rejected outright; reproductive, paediatric-death and mass-casualty subjects are flagged for the user at HARD STOP 0 rather than quietly reshaped.

**Disclaimer.** A short "educational, not medical advice" line in the description and, where the platform needs it, on screen once. Simplifications are labelled inside the video too.

**Sensitivity.** Non-graphic imagery; no corpses or morgue shots; the moment of death is never dramatised for effect; real named people are not used as examples of suffering.

**Monetisation.** Graphic medical content risks limited ads or age restriction. Keep visuals and language within platform guidance for medical educational content.

---

## 12. Still to decide (record decisions here)

- [x] Channel name — It's Probably Nothing (owner decision)
- [x] Protagonist — Dennis Fine, the patient (owner decision)
- [x] Visual approach — realistic story scenes + white/minimal explainer; no paper (owner decision)
- [x] Reference study — two reference transcripts are enough (owner decision)
- [x] Voice-direction format — same chunk JSON as the other channel (owner decision)
- [ ] One voice or two (narrator + Dennis) and narrator voice/gender/pace choice
- [ ] Dennis turnaround sheet, palette hex values, type tokens (style bible)
- [ ] Test set: home + clinic scenes, and a two-frame colour-drain test
- [ ] `remotion/src/themes/its-probably-nothing.ts` (theme tokens) and matching `check_remotion_theme.py` hook
- [x] A13 Clinical Timeline added to `SKELETON_LIBRARY.md`; band calibrated in `gate_check.py -a 13` (14 benchmarks, all pass)
- [x] Claims gate built: `gate_claims.py`
- [x] Episode template with claims ledger: `videos/its-probably-nothing/_template/`
- [ ] First topic through the Idea Gate
- [ ] Channel handle, banner and description
- [ ] Thumbnail formats and titles (deferred by owner)
- [ ] Music beds (audio pass)
