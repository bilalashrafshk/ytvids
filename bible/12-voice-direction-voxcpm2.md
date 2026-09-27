<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Voice Direction Prompt (VoxCPM2)**

*The auditory spine of the pipeline. Feed this a finished narration script from the Script Generator. It turns the script into a chunked, VoxCPM2-ready voiceover generation script (`06_VOICE_DIRECTION.json` / `VOICE_DIRECTION_VOXCPM2.json` and `06_VOICE_DIRECTION.md`). Each chunk gets its own vivid delivery instruction, written for that line — no fixed persona prefix, since the cloned reference voice already carries the narrator's identity. Generating the master VO audio and its timestamped alignment JSON here provides the ground-truth timing for 07_BEAT_SHEET.md, ensuring visual cuts snap to spoken cadence with zero drift.*

---

## **Vocal tags — language-specific, verbatim from VoxCPM2's own documentation**

Several of VoxCPM2's tags mimic Chinese interjection-particle endings (-ah, \-ei, \-en, \-oh, \-wa, \-yo, \-hnn) and underperform in English. Use the form that matches the script's language.

| Category | For English scripts | For Chinese scripts |
| ----- | ----- | ----- |
| Laughs / sighs | `[laughing]`, `[sigh]` | `[laughing]`, `[sigh]` |
| Pauses / thinking | `[Uhm]`, `[Shh]` | `[Uhm]`, `[Shh]` |
| Questions | `[Question]` (plain form) | `[Question-ah]`, `[Question-ei]`, `[Question-en]`, `[Question-oh]` |
| Emotions | `[Surprise]`, `[Dissatisfaction]` (plain forms) | `[Surprise-wa]`, `[Surprise-yo]`, `[Dissatisfaction-hnn]` |

`[laughing]` and `[sigh]` are confirmed via the cookbook's own worked examples and are language-neutral — use with full confidence in either language. The suffixed Question and Emotion tags are documented and tuned for Chinese; their plain-bracket English counterparts are unofficial and should be spot-tested before relying on them in bulk. If even the plain English form doesn't render as intended, isolate the moment as its own micro-chunk and describe the reaction directly in the Control Instruction instead of leaning on an inline tag.

**Retired — do not use, in either language:** `[pause]`, `[chuckle]`, `[whispers]`, `[gasp]`, `[clears throat]` — not on VoxCPM2's own recommended list.

**Absolute ban:** no sound-effect or Foley tags (`[keystrokes clack]`, `[door slams]`) — these get spoken as literal words. No abstract acting-instruction tags (`[flat tone]`, `[slow cadence]`) — that's the Control Instruction's job, not an inline tag.

**Frequency:** restraint over rate — a tag only where it would genuinely make a human voice catch, drop, or hush. Roughly 1 tag per 2-4 minutes of runtime as a ceiling to notice, not a quota. Skip a tag where bare facts should carry the weight alone (a casualty count, a dollar figure) — adding one there reads as manipulative rather than earned.

**No underscores** — replace with plain spaces so the model doesn't mispronounce them or speak the word "underscore" aloud.

**Decimal Normalization Rule ("point", NEVER "dot")** — TTS and neural voice models (VoxCPM2, ElevenLabs, Kokoro, etc.) routinely read raw numeric decimals like `1.2`, `2.5`, or `0.8` literally as **"one dot two"**, **"two dot five"**, or **"zero dot eight"**. This sounds amateur, distracting, and robotic in a financial documentary.
- **MANDATORY ENFORCEMENT FOR SCRIPTS & VO JSON:** In all spoken narration scripts, prompt targets, companion markdown, and specifically within `target_text` chunks of `VOICE_DIRECTION_VOXCPM2.json` (and `05_VOICE_DIRECTION.json`), every decimal number MUST be written out phonetically using the word **"point"**:
  - `1.2` $\rightarrow$ `1 point 2` (e.g. `1 point 2 million square foot`, NOT `1.2-million-square-foot`)
  - `1.5` $\rightarrow$ `1 point 5` (e.g. `1 point 5 million bikes`, NOT `1.5 million`)
  - `2.5 million` $\rightarrow$ `2 point 5 million`
  - `$1.2B` $\rightarrow$ `1 point 2 billion dollars`
  - `0.8%` $\rightarrow$ `zero point eight percent`
- **ABSOLUTE GATE:** Never leave a raw period in a decimal figure (`X.Y`) in the voiceover text or VO JSON. Any occurrence of `1.2` instead of `1 point 2` causes the engine to speak "one dot two" aloud and is a corrupt deliverable.

## **Chunking rules**

Split the script into chunks at paragraph boundaries by default. A chunk is 2-6 sentences sharing one narrative function. If a paragraph spans two functions, split it at that turn.

**Same-register stretch rule:** when 3+ consecutive chunks share the same register family, don't let any single chunk in that stretch run 4+ sentences with no internal tag or split — either add an earned tag or split it further purely to create another Control Instruction application point.

Generate one chunk per API/demo call, never the full script in one call — long text is a known trigger for unstable generation.

---

## **Chunk-to-chunk coherence — don't let intensity jump**

VoxCPM2 has no memory between chunks beyond the cloned reference audio — it doesn't know what the previous chunk sounded like, only what this chunk's own Control Instruction describes. A large jump in stated intensity between two adjacent chunks can render as a different voice entirely, not the same voice shifting mood, because there's nothing carrying continuity except your wording.

**Keep intensity changes incremental unless the narration itself contains a genuine hard tonal break.** Prefer moderate language — "a touch quieter," "a little more measured," "a shade more urgent" — over extreme descriptors — "hushed to almost nothing," "dropping into a whisper," "voice cracking" — when the surrounding chunks sit at a normal register. Save the extreme end of the range for moments the story has actually built toward across several chunks, not as a default flourish on any single one. If in doubt, undersell the shift rather than oversell it — punctuation and word choice in the narration text itself can carry emotional weight the Control Instruction doesn't also need to carry.

---

## **One layer, every chunk — delivery only, written fresh for that line**

Every chunk generates via Controllable Cloning against the channel's saved reference clip. The reference audio already carries who the narrator is — gender, age, texture, accent. So the Control Instruction carries **only delivery**: never restate identity, and **never prepend a persona string** ("Engaging video essay storyteller…"). A fixed persona phrase repeated on every chunk flattens the read into one register for the whole video; that is the failure this rule exists to prevent.

**Write each instruction for the line it sits on.** Read the chunk, ask what a great human narrator would *do* with it — lean in, hold back, smile, let it land, speed up through a list, slow down for the turn — and describe that, vividly and specifically. A menu phrase reused across the script is a failure even if it's accurate.

Compare:
* *Weak (persona stack, generic):* "Engaging video essay storyteller, curious and articulate. Speaks with calm curiosity, unhurried and articulate."
* *Weak (states identity):* "Panic-stricken female voice, rapid breathless delivery, cracking under strain."
* *Right:* "Speaks with a faintly amused arch, as if sharing a joke the subject never got to hear."
* *Right:* "Speaks with grave weight, each word placed like a verdict being read."

**Volume words only are off-limits** — "loud", "shouting", "booming", "raised voice". TTS fakes loudness by crushing dynamics and it clips. Intensity comes from tension, pace and weight, not volume. Everything else — amusement, charm, astonishment, dread, tenderness — is fair game when the line earns it.

---

## **Archetype library**

Compose fresh from these — never copy an example verbatim, and never repeat identical wording across consecutive chunks even within the same archetype. The list isn't exhaustive: invent a sibling archetype whenever a story calls for something none of these cover.

**The Unraveling** — mounting crisis, escalating discovery
* Speaks with a tense, clipped tone, as the first cracks appear.
* Speaks with building urgency, stark and rapid, as the scale becomes clear.
* Speaks with dread returning, heavier now, the pattern impossible to ignore.
* Speaks with tightening restraint, watching it happen in real time, inexorable.

**The Confident Villain** — hubris before the fall
* Speaks with easy, self-assured charm, faintly amused by his own cleverness.
* Speaks with a trace of condescension, certain no one is watching closely enough.
* Speaks with cooling composure, the first flicker of unease beneath it.
* Speaks with flat, controlled calculation, the charm gone.

**The Reckoning** — consequence landing
* Speaks with grave weight, each word placed like a verdict being read.
* Speaks with steady, unhurried resolve, the weight of consequence finally landing.
* Speaks with quiet finality, resolute, offering no comfort.

**The Reveal** — the moment the hidden thing is found
* Speaks with quiet, absorbed curiosity, like something has just come into focus.
* Speaks with sharpening attention, as the significance becomes impossible to miss.
* Speaks with the quiet satisfaction of a puzzle piece finally fitting.

**The Wry Aftermath** — irony, dark comedy, an absurd detail
* Speaks with dry, knowing restraint, the irony doing the work the words don't have to.
* Speaks with a faintly amused arch, as if sharing a joke the subject never got to hear.
* Speaks with rueful understatement, the punchline already obvious.

**The Human Cost** — real ruin, people hurt
* Speaks with gentle care, mindful of the weight of what's being said.
* Speaks with restrained warmth, like someone choosing words that won't do further harm.
* Speaks with soft, unhurried patience, letting the silence after the sentence do some of the work.

**The Slow Bleed** — death by a thousand cuts
* Speaks with tired, matter-of-fact resignation, like reciting something long expected.
* Speaks with a further-flattening tone, as decline becomes routine, almost administrative.
* Speaks with the restrained tone of a eulogy for something that stopped being alive long before it ended.

**Historical Grandeur** — scale, wonder
* Speaks with a touch of astonishment, as if the scale is only now sinking in.
* Speaks with gently widening reverence, describing something larger than expected.
* Speaks with unhurried awe, giving the fact room to land.

**The Playful What-If** — hypotheticals, inviting the viewer in
* Speaks with a conspiratorial grin, pulling the listener into the game.
* Speaks with delighted curiosity, like turning over a strange object for the first time.
* Speaks with brisk, sparkling momentum, one ridiculous consequence tumbling into the next.

**The Quiet Turn** — when the fun idea shows its dark side
* Speaks with the smile slowly fading, the joke turning out not to be one.
* Speaks with a gentle drop in pace, as if noticing something nobody wanted to say.

**The Cliffhanger** — unresolved, trailing endings
* Speaks with a trailing, quiet uncertainty, the sentence left deliberately unfinished in tone.
* Speaks with fading composure toward stillness, like a door being left open on purpose.

---

## **Anti-repetition rule**

Track the last 3 chunks' wording before composing the next one — if a specific phrase already appeared, use a different word from the same archetype's spirit rather than reaching for it again. If an archetype's own vocabulary feels exhausted within one script, that's a signal to invent a sibling archetype rather than repeat, not to loosen the rule.

---

## **Voice consistency (production note)**

Every chunk in this script generates via Controllable Cloning against the existing saved reference clip — there's no per-episode Voice Design step, since the voice is already locked from prior work rather than created fresh each time. Confirm the reference clip is clean, at least 5 seconds, before starting a batch. If a genuinely new voice is ever needed — a one-off character distinct from the recurring narrator — that's a separate Voice Design step done ahead of time to produce a new reference clip, not something that happens inline while generating an episode's chunks. If using the API rather than the web demo, fix the seed parameter across calls for additional reproducibility.

---

## **Output format — Strict JSON Array (`VOICE_DIRECTION_VOXCPM2.json`)**

VoxCPM2 automation engines ingest a clean, structured top-level JSON array of chunk objects saved directly to `voiceover/VOICE_DIRECTION_VOXCPM2.json` (and mirrored to `05_VOICE_DIRECTION.json` in the project root).

### JSON Schema & Example Structure:
```json
[
  {
    "chunk_id": 0,
    "control_instruction": "Speaks with quiet, absorbed curiosity, like something has just come into focus.",
    "target_text": "In January 2024, a solar panel manufacturer named First Solar quietly finalized a real estate purchase in Wood County, Ohio. The purchase price was thirty-three million dollars."
  },
  {
    "chunk_id": 1,
    "control_instruction": "Speaks with sharpening attention, as the significance of the physical scale becomes impossible to miss.",
    "target_text": "For that money, they didn't just get two hundred acres of prime industrial farmland. They got a 1 point 2 million square foot unfinished monolith of structural steel, poured concrete, and vacant assembly bays. Thirty-three million sounds like real money. Until you look at the company that poured the concrete."
  }
]
```

### JSON Generation Requirements:
1. **Top-Level Structure:** A pure JSON array `[...]` containing all sequential chunks in chronological order.
2. **`chunk_id`:** 0-indexed integer (`0`, `1`, `2`, ...).
3. **`control_instruction`:** One vivid delivery sentence written fresh for that chunk — delivery only, no persona prefix, no identity, no volume words. No two consecutive chunks share wording. "Speaks with…" is a fine opening but not required.
4. **`target_text`:** Clean spoken narration text containing approved inline vocal tags (`[sigh]`, `[laughing]`, `[Dissatisfaction]`, `[Uhm]`, etc.), written-out numbers where needed for natural vocal cadence, and **zero underscores** to prevent mispronunciation.
5. **Strict Decimal Normalization ("point", NEVER "dot"):** All decimal figures in `target_text` MUST explicitly use the phonetic word "point" (e.g. `1 point 2 million square foot`, `1 point 5 million`, `3 point 5 billion dollars`), never raw period decimals like `1.2` or `3.5`. TTS models will literally speak "one dot two" if given `1.2`. Any raw period decimal in `target_text` is an automatic failure and corrupt deliverable.

*(Optional Companion Markdown: The engine may also output `voiceover/VOICE_DIRECTION_VOXCPM2.md` containing human-readable chunk blocks and copy-paste API strings for manual spot-testing in the web demo).*
