<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Retention Physics (MEASURED STYLE GATES — CP-0)**

*This section outranks every stylistic instruction elsewhere in this document. It was derived by measuring the seven benchmark transcripts directly, not by intuition. A script that violates these gates is rejected and rewritten before any other check runs.*

---

## **Why this section exists**

The engine's prose kept drifting into a formal, academic, "written" register despite instructions saying "be fun and witty." Instructions expressed as adjectives do not constrain output. These are expressed as numbers, because numbers constrain output.

**Measured across the seven benchmark videos vs. a failing in-house draft:**

| Metric | Benchmark range | Benchmark median | Failing draft | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| Mean sentence length (words) | 7.6 – 16.9 | 11.7 | 12.7 | borderline |
| **Median sentence length** | **6 – 15** | **11** | **12** | borderline |
| **Short sentences (≤6 words)** | **14% – 52%** | **28%** | **21%** | **too few** |
| Long sentences (≥25 words) | 1% – 21% | 5% | 7% | borderline |
| **Jargon terms per 1,000 words** | **0.0 – 4.1** | **1.8** | **26.8** | **CATASTROPHIC — 6.5× worst benchmark** |
| **Words ≥12 characters per 1,000** | **4.2 – 13.5** | **9.0** | **28.3** | **CATASTROPHIC — 2.1× worst benchmark** |
| Second-person hits per 1,000 (POV formats) | 57 – 76 | 57 | 36 | too low for Track 2 |

**The finding:** the failing draft was not short on concrete detail (15.1 concrete nouns/1,000 vs benchmark POV's 15.2 — effectively identical). It was burying that detail under six times the abstraction load of any successful video in the niche. "Too technical" is not a vibe. It is a measurable density problem.

---

## **The Gates — archetype-relative, validated against the benchmarks**

**These thresholds were not invented. They are the measured values of the benchmark video for each archetype.** An earlier version of this section used a single universal threshold set; when those were run against the seven benchmark videos, **all seven failed.** A gate that rejects every video you are trying to emulate is not a quality standard, it is a bug. The gates below pass all seven.

Run on spoken narration only — strip `[TAGS]`, act headers and audit blocks before counting. Use `gate_check.py -a <archetype>`.

### Per-archetype bands (from the benchmark for that archetype)

| A# | Archetype | median | mean | ≤6w | ≥25w | you/1k | Overrides |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | First-Principles Explainer | 13 | 14.1 | 15.8% | 13.3% | 23.0 | **Provisional** — benchmark 0.33x |
| 2 | ELI5 Origin Narrative | 8 | 9.0 | 41.8% | 1.7% | — | Weak ratio — benchmark 2.68x |
| 3 | Geopolitical Chessboard | 10 | 12.7 | 20.9% | 5.8% | — | — |
| 4 | P&L Business Breakdown | 15 | 16.9 | 13.7% | 20.9% | — | **Provisional** — benchmark 0.09x |
| 5 | POV Thought Experiment | 7 | 8.7 | 43.1% | 1.5% | 57.4 | — |
| 6 | Dual-Character Simulation | 11 | 11.8 | 27.4% | 4.6% | — | — |
| 7 | Compounded Playbook | 6 | 7.6 | 52.4% | 0.9% | 75.6 | **Provisional** — benchmark 0.54x |
| 8 | Reversal Explainer | 16 | 17.0 | 9.0% | 18.9% | 36.2 | you/1k not gated -- sister video (Egyptians, 90.8x) runs 7.6 |
| 9 | Second-Person Parable | 12 | 13.7 | 24.8% | 13.3% | 69.0 | **TURN1 = 30%** (opens on a scene, not a claim) |
| 10 | Scale Wall | 12 | 14.7 | 22.1% | 16.6% | 15.5 | **Provisional** -- benchmark 0.38x, below the outlier bar |
| 11 | Expose Autopsy | 13 | 14.7 | 12.9% | 12.9% | 4.2 | **TURN1 = 25%, BIGWD <= 16/1k, OPENRUN <= 4** -- all measured from the benchmark |

Archetypes 8-11 and the skeleton-selection logic around all eleven are documented in full in `SKELETON_LIBRARY.md` -- beat maps, brief addenda, and the thesis-shape routing matrix live there, not here. `IDEA_GATE.md` and `gate_idea.py` run before this section, at a new **GATE alpha-0** (see CP-VERIFY in `bible/05-cp-verify-phase-gates.md`).

**Tolerance is asymmetric.** Drifting *toward* the benchmark's register is free. Drifting away fails: median +3 words, mean +3.0, short-sentence share −8pp, long-sentence share +4pp, second-person −12/1k.

**Why per-archetype and not universal:** sentence metrics vary enormously by format and legitimately so. Mr. Finance runs a 16.9-word mean across 23 minutes and it works — a P&L breakdown needs clauses to carry a cost structure. LITTLE BIT BETTER runs 7.6 and that works too. The spread across archetypes is 2.2× on mean length and 23× on long-sentence share. Any single number is wrong for six of the seven.

**Pick the archetype before writing, not after.** The bands only mean something if the archetype is chosen deliberately in Step 1.

### The four universal gates

These are the ones that held across every archetype, and they are the ones the engine actually fails:

**JARGON: zero.** No technical, academic or evidence words at all (the list below plus research talk and paperwork — `gate_check.py` holds the full list). Benchmarks measured a maximum of 2.2 per 1,000 and two contain literally none; zero is the target, not a stretch. The failing in-house draft measured **22.1** — ten times the worst benchmark. This single metric explains most of what "too technical" means.

**12+ character words ≤ 14 per 1,000.** Benchmark range 4.1 – 12.8. Failing draft: **28.5**.

Format does not excuse either. A 23-minute P&L breakdown with 16.9-word sentences still keeps jargon at 1.2.

**REFRAMES >= 36 per 1,000 sentences, first one inside the opening 12% (per-skeleton overrides in the CP-0 table above).** The "it isn't X, it's Y" turn -- "World hunger isn't a shortage of food." **The detector also counts:** "the opposite", "turns out", "not just / not only", "instead of", "rather than", "in fact", and a bare "Not X, Y" sentence opening (e.g. "Not envy, recognition.") -- these are real turns the original word list missed when checked against the wider outlier set. Floor stays at 36/1,000. All seven benchmarks fall between 36 and 108, and every one lands its first turn within the first 11%. These are the lines viewers quote back. A script can pass every register gate and still have nothing in it worth repeating; this is the gate that catches that.

**SENTENCE OPENERS: most-repeated ≤ 24%, longest identical run ≤ 3.** Benchmarks run 6–20% with no run exceeding three. Second-person density is a floor, not a target — overshooting it produces "You stand. You wipe. You look. You check," which reads as a chant. A draft can pass the YOU gate and fail this one.

### Demoted checks — honest about what cannot be automated

**Concrete-noun runs (formerly GATE 7): not mechanically checkable.** The original implementation matched against a hand-written vocabulary list, which measured "contains a word from my list" rather than concreteness. It flagged 132 consecutive sentences in a video full of kitchens and houses. The metric was invalid and has been removed rather than left in to be ignored. Read for it by eye instead: passages with nothing a camera could photograph. The failure it was trying to catch is real; the test was not.

**Raw decimals: advisory, not a gate.** This is a text-to-speech artifact, not a writing-quality signal. The benchmarks are human-voiced and contain raw decimals freely. It still matters for us because our VO is synthetic, so `gate_check.py` reports it as a note before voicing.

### The Jargon List (Gate 4 reference — these words cost you)

Every one of these appeared in the failing draft and in **none** of the seven benchmark videos. Treat each as a fail unless it is the actual subject of the episode and is defined by physical demonstration within one sentence:

`macroeconomic · programmatic · algorithmic · autonomous · protocol · infrastructure · architecture · authentication · consolidate · telecommunications · neurochemistry · down-regulate · up-regulate · hedonic set-point · variable-ratio · reinforcement schedule · empirical · randomized evaluation · standard deviations · sigma · hysteresis · liquidity · velocity · contraction · exposure · leveraged · restructuring · circulatory · conversion · impressions · sovereignty · mandates · reclassifying · decentralized · multi-carrier · substitution · cognitive · equilibrium · subjective indices · systemic*`

*\*`systemic` is the one permitted exception, and only in the way My Chaotic Stories used it: isolated as a one-word sentence after the plain-language version has already landed. Never as a modifier inside a longer clause.*

**The substitution discipline:** every one of these has a spoken-register replacement.
- "liquidity freeze" → "the money stopped moving"
- "customer acquisition costs explode" → "it now costs four times as much to find one buyer"
- "down-regulated D2 dopamine receptors" → "your brain turned down the volume on pleasure, and it hasn't turned it back up"
- "informal commerce velocity contracts 65 percent" → "two out of every three street sales just stop"
- "hysteresis" → "it never goes back"
- "0 point 19 standard deviations" → cut the number entirely, or say "people simply knew less about the news, and the gap was real but small"

---

## **The Register Rules (qualitative, enforced by the gates above)**

**R1 — One idea per sentence.** If a sentence contains a comma followed by a clause that introduces a second concept, split it.

**R2 — Never define, always demonstrate.** The failing pattern is: *name the thing → define the thing → give the consequence.* The benchmark pattern is: *show the consequence → name the thing afterwards, briefly, almost as an aside.* Martik Finance explains supply and demand for two full sentences before ever using the phrase. Logical Money teaches illiquidity without ever saying the word — "Ryan cannot sell 8% of the kitchen."

**R3 — The explainer-paragraph ban.** No paragraph may run three or more sentences of pure mechanism with no person, object, consequence, or joke in it. If the draft contains a passage that reads like an encyclopedia entry with "you" inserted, it is a fail regardless of accuracy.

**R4 — Numbers arrive alone or not at all.** Never stack three statistics in consecutive sentences. One number, isolated in a short sentence, framed by what it means physically. If three numbers are genuinely needed, they must be spread across three different beats with story between them.

**R5 — One device, one use.** A rhetorical device (myth-vs-reality reversal, "conventional wisdom says X, the math says otherwise", the corrective restatement) may be used **once per script**. The second use is a pattern; the third is a tic and the viewer disengages. Track device usage explicitly in the audit block.

**R6 — Bare noun-phrase section markers are permitted and encouraged in Track 2.** "Luxury goods." "Gold." "Art." A two-word fragment that announces a new category is a legitimate sentence in this format.

**R7 — The technical label goes last, and gets deflated.** Lock Stock Finance: "Economists sometimes call this dynamic a currency war. Nobody's shooting, but everyone's trying to make their exports cheaper." Name it, then puncture it.

---

## **A5 -- The Stakes Contract (POV / Hypothetical, ticking-clock skeleton only)**

*This is a skeleton rule, not a Track 2 rule. It governs A5 specifically. Two other Track 2 skeletons replace it: **A9** (Second-Person Parable) uses a **Cost Contract** instead -- by word 150 the viewer knows the contrarian choice, its social cost, and the named foil, with no clock or adversary. **A10** (Scale Wall) has no contract at all; it opens on a flat absolute claim. Applying this section to all of Track 2 incorrectly fails both. See `SKELETON_LIBRARY.md` for each skeleton's own opening kit.*

The benchmark POV video states its **entire premise, deadline, penalty, working rules, and adversary within the first 70 words.** The failing draft took 400 words to establish that the outage was even global, and never stated rules or a penalty at all.

**Mandatory: by word 80, the viewer must know all five of:**
1. What just happened (one sentence, no scene-setting)
2. The clock (how long)
3. The penalty (what is lost if it runs out)
4. The rules (what is and isn't allowed inside the scenario)
5. The adversary (the thing working against you while you act — compounding interest, spreading failure, a closing window)

If the scenario has no natural penalty or adversary, **invent one and state it** — a countdown with no stake is not a ticking clock, it is a calendar.

**Ledger beats are mandatory for countdown formats.** At the end of each major time block, restate position in a fixed, repeated format the viewer learns to expect: *"End of day two. 25 billion dollars spent. 975 billion remaining. Interest accrued while you were buying: 272 million."* Same shape every time. This is the retention spine of the entire archetype.

---

## **Real Named Entities in Track 2 — permitted**

The engine has been over-cautious here. The benchmark POV video names Patek Philippe, Bugatti, Koenigsegg, Christie's, ADM, Bunge, Cargill, Louis Dreyfus, Apple, Microsoft, Nvidia, the SEC, the IMF, the NYSE, Euronext and Argentina — freely, throughout, with dollar figures attached.

**Rule:** in a scenario explicitly framed as hypothetical, real companies, products, places and institutions may be named as *objects the scenario acts upon*. What remains forbidden is exactly what the Style Bible already forbids: inventing quotes, inner monologue, or wrongdoing for a real named person or company. Buying Cargill in a thought experiment is fine. Alleging Cargill did something is not.
