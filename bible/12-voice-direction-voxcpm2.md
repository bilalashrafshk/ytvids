<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Voice Direction Prompt (VoxCPM2)**

*The auditory spine of the pipeline. Feed this a finished narration script from the Script Generator. It turns the script into a chunked, VoxCPM2-ready voiceover generation script (`06_VOICE_DIRECTION.json` / `VOICE_DIRECTION_VOXCPM2.json` and `06_VOICE_DIRECTION.md`). Enforces the **Two-Part Control Instruction Protocol**: locking one unchanging Persona Anchor across all chunks (mapped from the episode's core archetype) and modulating only delivery registers (cadence, pacing, quiet weight) without shouting. Generating the master VO audio and its timestamped alignment JSON here provides the ground-truth timing for 07_BEAT_SHEET.md, ensuring visual cuts snap to spoken cadence with zero drift.*

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

## **Two-Part Control Instruction: Locked Persona Anchor + Delivery Register Modulation**

Neural voice cloning models (VoxCPM2, ElevenLabs, Kokoro) require an immutable persona anchor across chunks. Because the model is stateless across independent inference calls, varying the prompt's persona vocabulary from chunk to chunk causes the text embedding to overpower the reference audio embedding, fracturing clone fidelity and making the narrator sound like different actors across the video.

To guarantee 100% vocal consistency, **every Control Instruction in a script MUST follow this strict two-part architecture**:

> **Format:** `"<Locked Persona Anchor>. Speaks with <Delivery Register Modulation>."`

---

### **Part 1: The Master Delivery Style Registry (Locked Persona Anchors)**
Select **ONE** persona anchor at the start of script production based on the video's format archetype. **This exact phrase must be prepended to every single chunk across the entire video without variation**:

| Archetype / Format | Benchmark Channel | Locked Persona Anchor String | Acoustic Profile & WPM | Best Suited For |
| :--- | :--- | :--- | :--- | :--- |
| **1. First-Principles Explainer** | *Martik Finance* (`pzInrqRFU5M`) | `"Approachable finance educator, warm, articulate, and conversational."` | Calm, clear, accessible educator. 145–155 WPM. Deliberate downbeats; strips away jargon. | Macroeconomics, currency systems, inflation mechanics, central banks, trade deficits. |
| **2. ELI5 Mythic Hardware** | *Crayon Capital* (`1GowFTjbUnk`) | `"Engaging video essay storyteller, curious and articulate."` | High-energy, punchy, intellectually curious. 155–165 WPM. Crisp staccato, tactile analogies. | Semiconductor hardware wars, AI computing infrastructure, founder turnaround epics. |
| **3. Geopolitical Chessboard** | *Lock Stock Finance* (`1kFV1Td2BQs`) | `"Restrained geopolitical analyst, cold, authoritative, and measured."` | Cold, analytical game-theorist. 140–150 WPM. Deep, resonant chest tone, dignified pauses. | Sovereign debt, petrodollar recycling, sanctions architecture, energy chokepoints. |
| **4. Inside-the-P&L Breakdown** | *Mr. Finance* (`-hBYfmfgBbg`) | `"Conversational business explainer, clear and engaging."` | Pragmatic, intelligent insider. 150–160 WPM. Close-mic studio warmth, relaxed chest register. | Corporate autopsies, unit economics, declining retail models, balance sheet forensics. |
| **5. POV Thought Experiment** | *My Chaotic Stories* (`dwSfdH1K7Zk`) | `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."` | Immersive second-person guide. 160–170 WPM. Ticking-clock momentum, deadpan realism. | "The Hypothetical" sub-series, trillion-dollar thought experiments, economic disasters. |
| **6. Dual-Character Simulation** | *Logical Money* (`nkT_K8l1rEw`) | `"Relatable financial breakdown guide, clear, objective, and conversational."` | Neutral, rigorous financial auditor. 145–155 WPM. Friendly, impartial, dry common sense. | Rent vs. buy, mortgage payoff math, leasing vs buying, index funds vs real estate. |
| **7. Compounded Efficiency** | *LITTLE BIT BETTER* (`Pd3HYjpmks4`) | `"Clear, empowering finance mentor, calm, confident, and direct."` | Quietly confident mentor. 150–160 WPM. Crisp, purposeful, empowering mathematical clarity. | Financial independence (FIRE), savings rate curves, asymmetric wealth accumulation. |

#### Detailed Style Profiles & Chunk Examples

1. **The Inside-the-P&L Business Analyst (*Mr. Finance* Benchmark)**
   * **Exact Anchor:** `"Conversational business explainer, clear and engaging."`
   * **Vocal Persona:** A pragmatic, intelligent insider sitting across a desk explaining how a company really makes its money. Close-mic studio intimacy, relaxed chest register, unhurried downbeats. Walks line-by-line down an income statement with cool authority.
   * **When to Select:** Corporate autopsies, franchise breakdowns, unit economics, retail crashes (e.g. Peloton, movie theaters, McDonald's, Boeing).
   * **Example Chunk:** `"Conversational business explainer, clear and engaging. Speaks with cool, unhurried clarity, walking through the unit economics step by step."`

2. **The First-Principles Macro Educator (*Martik Finance* Benchmark)**
   * **Exact Anchor:** `"Approachable finance educator, warm, articulate, and conversational."`
   * **Vocal Persona:** An empathetic, patient educator who treats the viewer as an intelligent peer. Strips away banking pretension and Wall Street vocabulary with crystal-clear, steady pacing.
   * **When to Select:** Macroeconomics, currency systems, inflation mechanics, interest rates, central banking, global trade deficits.
   * **Example Chunk:** `"Approachable finance educator, warm, articulate, and conversational. Speaks with calm, unhurried curiosity, unpacking the system from first principles."`

3. **The ELI5 Deep-Tech Storyteller (*Crayon Capital* Benchmark)**
   * **Exact Anchor:** `"Engaging video essay storyteller, curious and articulate."`
   * **Vocal Persona:** A dynamic, intellectually curious tech storyteller. Energetic and punchy without shouting; uses vivid tactile metaphors (professors vs kindergarteners) and rapid momentum.
   * **When to Select:** Semiconductor hardware wars, deep-tech infrastructure, AI computing, Silicon Valley founder origin sagas.
   * **Example Chunk:** `"Engaging video essay storyteller, curious and articulate. Speaks with steady narrative momentum, tracing the founder's early gamble."`

4. **The Forensic Geopolitical Analyst (*Lock Stock Finance* Benchmark)**
   * **Exact Anchor:** `"Restrained geopolitical analyst, cold, authoritative, and measured."`
   * **Vocal Persona:** A cold, analytical game-theorist. Deconstructs conspiratorial myths and replaces them with sovereign incentives and national security realism. Weighty, measured downbeats and deep chest resonance.
   * **When to Select:** Sovereign finance, petrodollar recycling, sanctions architecture, central bank reserve freezes, maritime trade chokepoints, currency wars.
   * **Example Chunk:** `"Restrained geopolitical analyst, cold, authoritative, and measured. Speaks with steady, unhurried gravity, tracing the strategic leverage point."`

5. **The POV Absurdist Guide (*My Chaotic Stories* Benchmark)**
   * **Exact Anchor:** `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."`
   * **Vocal Persona:** An immersive second-person ("you") guide. Quick-witted, highly visual, guiding the viewer through high-stakes logistical puzzles with ticking-clock momentum and deadpan reactions.
   * **When to Select:** "The Hypothetical" sub-series, trillion-dollar thought experiments, hyper-inflation simulations, logistical chaos.
   * **Example Chunk:** `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid. Speaks with brisk, ticking-clock momentum, laying out the strict rules of the game."`

6. **The Dual-Character Spreadsheet Auditor (*Logical Money* Benchmark)**
   * **Exact Anchor:** `"Relatable financial breakdown guide, clear, objective, and conversational."`
   * **Vocal Persona:** A neutral, rigorous financial auditor. Friendly, impartial, and completely indifferent to societal cliches. Lets the spreadsheet deliver the verdict with dry, relatable humor.
   * **When to Select:** Personal finance sacred cows, renting vs buying, active trading vs index investing, leasing vs owning, 30-year net worth simulations.
   * **Example Chunk:** `"Relatable financial breakdown guide, clear, objective, and conversational. Speaks with relaxed, friendly clarity, setting up the two parallel paths."`

7. **The Compounded Efficiency Mentor (*LITTLE BIT BETTER* Benchmark)**
   * **Exact Anchor:** `"Clear, empowering finance mentor, calm, confident, and direct."`
   * **Vocal Persona:** A quietly confident mentor. Grounded, empowering, and pragmatic. Delivers mathematical truths with inspiring clarity, crisp declarative sentences, and zero fluff.
   * **When to Select:** Financial independence (FIRE), savings rate mechanics, wealth roadmaps, high-conviction accumulation playbooks.
   * **Example Chunk:** `"Clear, empowering finance mentor, calm, confident, and direct. Speaks with crisp, purposeful clarity, isolating the single mathematical lever."`

Keeping this 70% persona foundation identical across all chunks locks the model's text encoder into a stable, articulate YouTube video essayist register.

---

### **Part 2: The Delivery Register Modulation (Chunk Nuance)**
The second clause always opens with `"Speaks with..."` and modulates **only pacing, cadence, and delivery focus**—never character identity or volume.

* **Strict Ban on Shouting / High Volume:** Never use words like `loud`, `raised voice`, `shouting`, `screaming`, `booming`, or `explosive`. Neural TTS models simulate loudness by heavily compressing dynamic range and distorting high frequencies, producing abrasive digital clipping and tinny audio. Emotional intensity in documentary narration comes from **sub-surface tension, cadence, and restraint**, never volume.
* **Discourage Theatrical Character Acting:** Avoid roleplaying keywords like `charm`, `smirk`, `exasperated`, `panic`, or `suffocating tension`. The narrator is an intelligent insider talking across a desk, not a cartoon actor playing corporate executives or panicked victims.

---

## **Archetype Library (Delivery Register Modulations)**

Compose the second clause (`"Speaks with..."`) from these delivery modulations. Every instruction combines the Locked Persona Anchor with one restrained register shift:

**The Forensic Discovery** — primary-source filings, opening the financial trail
* *"...Speaks with calm curiosity, unhurried and articulate."*
* *"...Speaks with deliberate focus, as the significance of the numbers becomes clear."*
* *"...Speaks with quiet forensic clarity, letting the evidence land."*

**The Mechanical Breakdown** — unit economics, margins, cash flow autopsy
* *"...Speaks with steady, objective precision, explaining the math step by step."*
* *"...Speaks with unhurried analytical clarity, stripping away corporate spin."*
* *"...Speaks with cool, measured certainty, walking through the balance sheet."*

**The Understated Irony** — absurd corporate waste, hubris, reality checks
* *"...Speaks with dry, understated delivery, letting the facts do the work."*
* *"...Speaks with matter-of-fact observation, highlighting the absurdity without melodrama."*
* *"...Speaks with calm, deadpan restraint, the punchline already clear."*

**The Mounting Tension / The Bleed** — cash burn, structural cracks, slow collapse
* *"...Speaks with taut, low-register tension, deliberate and steady."*
* *"...Speaks with measured seriousness, watching the deficit widen in real time."*
* *"...Speaks with tight, unhurried restraint, the pattern now impossible to ignore."*

**The Reckoning & Legacy** — bankruptcy, aftermath, philosophical conclusion
* *"...Speaks with quiet, low-register weight, each word placed with care."*
* *"...Speaks with calm, unhurried perspective, letting the numbers land with matter-of-fact weight."*
* *"...Speaks with resolute, quiet finality, closing the analysis without melodrama."*

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
    "control_instruction": "Conversational business explainer, clear and engaging. Speaks with calm curiosity, unhurried and articulate.",
    "target_text": "In January 2024, a solar panel manufacturer named First Solar quietly finalized a real estate purchase in Wood County, Ohio. The purchase price was thirty-three million dollars."
  },
  {
    "chunk_id": 1,
    "control_instruction": "Conversational business explainer, clear and engaging. Speaks with deliberate focus, as the physical scale becomes clear.",
    "target_text": "For that money, they didn't just get two hundred acres of prime industrial farmland. They got a 1 point 2 million square foot unfinished monolith of structural steel, poured concrete, and vacant assembly bays. Thirty-three million sounds like real money. Until you look at the company that poured the concrete."
  }
]
```

### JSON Generation Requirements:
1. **Top-Level Structure:** A pure JSON array `[...]` containing all sequential chunks in chronological order.
2. **`chunk_id`:** 0-indexed integer (`0`, `1`, `2`, ...).
3. **`control_instruction`:** Strict Two-Part Format: `"<Locked Persona Anchor>. Speaks with <Delivery Register Modulation>."` The Persona Anchor must remain 100% identical across all chunks of that video. Register modulations must focus on pacing, cadence, and quiet weight—never shouting or theatrical roleplay.
4. **`target_text`:** Clean spoken narration text containing approved inline vocal tags (`[sigh]`, `[laughing]`, `[Dissatisfaction]`, `[Uhm]`, etc.), written-out numbers where needed for natural vocal cadence, and **zero underscores** to prevent mispronunciation.
5. **Strict Decimal Normalization ("point", NEVER "dot"):** All decimal figures in `target_text` MUST explicitly use the phonetic word "point" (e.g. `1 point 2 million square foot`, `1 point 5 million`, `3 point 5 billion dollars`), never raw period decimals like `1.2` or `3.5`. TTS models will literally speak "one dot two" if given `1.2`. Any raw period decimal in `target_text` is an automatic failure and corrupt deliverable.

*(Optional Companion Markdown: The engine may also output `voiceover/VOICE_DIRECTION_VOXCPM2.md` containing human-readable chunk blocks and copy-paste API strings for manual spot-testing in the web demo).*
