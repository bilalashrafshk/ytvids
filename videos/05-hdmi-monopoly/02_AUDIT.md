# 02 — Audit, Comparison and Recommendation (STEP 5–7)

*Channel: FinanceCraft · Track 3 (Mechanism) · Topic: The HDMI Monopoly. Scripts: `02_SCRIPT_A.md`, `02_SCRIPT_B.md`. All counts below were run by `gate_check.py` and by a counting script on the delivered files, not estimated.*

---

## Comparison

| | **Draft A — The Safe Take** | **Draft B — The Swing** |
|---|---|---|
| Skeleton | A3 Causal-Chain Explainer (archetype 3) | A8 Reversal Explainer (archetype 8) |
| Structure | A dated chain of cause and effect; the loop stated once at the midpoint | Three layers, each bigger than the last, plus a nested paradox |
| Point of entry | The back of your TV (everyday friction) | A courtroom on 31 December 2025 |
| Lens | The system, from 2002 forward | The company that said no (Availink) |
| Register | Wry, curious | Tense, consequential |
| Axes that differ | Structure, entry point, lens, register (all four) | |
| Betting on | Cold viewers stay because the opening is something they can touch, and each step forces the next | The paradox "a company fought over four cents, lost, paid, then signed up again" hooks a cold viewer in thirty seconds |
| Signature cinematics | Whip-zoom montage (~100s), orbital flywheel for the loop (~257s), portal tunnel close (~684s) | Whip-zoom montage, split-screen comparison, portal tunnel close |
| What could go wrong (Draft B) | If the viewer doesn't already care about a chip company's lawsuit, the opening reads as legal news and loses them before the plug appears. | |

## Recommendation

Shoot **Draft A**. It opens on something every viewer can touch, it carries the title's four cents in the first thirty seconds, and it has the flywheel beat that A3 exists for. Draft B has the sharper hook, but its payoff depends on a cold viewer caring about a legal case, and demand for this topic is unproven. If you want the outlier swing, the cheap version is to take Draft B's first two paragraphs (the courtroom and "What it fought over was four cents") as a 20-second cold open on top of Draft A. Both drafts share the small-maker vs giant reversal, which came from the research and is the most surprising fact in either.

---

## Draft A — audit block

**2a. Retention physics gates (`gate_check.py -a 3` verbatim):**

```
FinanceCraft gate check — videos/05-hdmi-monopoly/02_SCRIPT_A.md
Archetype 3: Geopolitical Chessboard
1888 words | 212 sentences | ~12.2 min at 155 wpm
Benchmark for this archetype: med 10 | mean 12.7 | short 20.9% | long 5.8% | you 14.7/1k

  [PASS] MED    median sentence <= 13 (benchmark 10)
         observed: 8 words
  [PASS] MEAN   mean sentence <= 15.7 (benchmark 12.7)
         observed: 8.9 words
  [PASS] SHORT  sentences <=6w >= 12.9% (benchmark 20.9%)
         observed: 35.4%
  [PASS] LONG   sentences >=25w <= 9.8% (benchmark 5.8%)
         observed: 0.9%
  [PASS] JARGON zero technical / academic / evidence words  [UNIVERSAL — plain words only]
         observed: 0 distinct (0.0/1k)
         evidence: none found
  [PASS] BIGWD  12+ char words per 1,000 <= 14  [UNIVERSAL — benchmark max 12.8]
         observed: 3.7
  [PASS] REFRAME reframes per 1,000 sentences >= 36  [UNIVERSAL — benchmark range 36-108]
         observed: 52 (11 found)
         evidence: the 'it isn't X, it's Y' turn — what viewers quote back
  [PASS] TURN1   first reframe within opening 12%  [UNIVERSAL — benchmarks 1-11%]
         observed: 5%
  [PASS] OPENER  most-repeated sentence opener <= 24%  [UNIVERSAL — benchmarks 6-20%]
         observed: 'The' 15%
  [PASS] OPENRUN longest same-opener run <= 3  [UNIVERSAL]
         observed: 2 consecutive 'The...'
  [note] decimals: all phonetic, VO-safe
  [note] SIGNATURE CINEMATICS: 3 found — ARCHETYPE_WHIP_ZOOM_MONTAGE@115s, ARCHETYPE_3D_ORBITAL_FLYWHEEL@260s, ARCHETYPE_INFINITE_PORTAL_TUNNEL@724s
  [PASS] CITES  zero narrated-source lines  [UNIVERSAL — research is invisible, bible/01]
         observed: 0
  [PASS] CLOSE  no moral / lesson in the last 150 words  [UNIVERSAL]
         observed: 0 lecture phrase(s)

  NOT MECHANICALLY CHECKED — apply by eye (see CP-VERIFY):
    - concrete-noun runs: no reliable automated test exists; read for
      passages with nothing a camera could photograph
    - R3 explainer-paragraph ban, R5 device repetition
    - PROMISE check first: title promise vs what the runtime is spent on;
      a world premise shrunk onto 1-2 characters or one lesson FAILS
    - RETELL test: each ~60-90s segment has one thing a viewer would repeat
      to a friend; a segment with none gets rewritten (CP-VERIFY GATE gamma)

ALL GATES PASS
```

- Archetype declared: 3 (Causal-Chain / Geopolitical Chessboard band, from the Petrodollar benchmark).
- Jargon: zero found by the checker. By eye: "copy-protection", "patent", "licence" are used with a plain explanation beside them; "open-source driver" is defined on the spot ("free code that anyone can read").
- Words of 12+ characters per 1,000: 3.2 (limit 14).
- Concrete grounding: read by eye. The longest run without something photographable is the loop paragraph (four numbered steps, ~55 words), which is broken by the flywheel visual and followed by the club-and-bouncer image. Nothing else runs long.
- Rhetorical-device ledger (counted): rhetorical questions 5; corrective "isn't / is not / wasn't" turns 6 (the gate requires at least 36 reframes per 1,000 sentences, so the count is structural, and each is a different point); "Read that again" 1; "But hold on" 1; "Let's be fair" 1; "Now watch" 0 (the key-price beat that used it was cut as a duplicate of the small-maker beat); direct callback to the opening image 1.
- Stakes / opening contract: A3 has none. Opening line quoted: "Tilt your head and look at the back of your TV."

**2b. Structural checks:**

- Exact spoken word count: 1,888. Runtime: 1,888 / 155 × 60 = 731 seconds (12.2 minutes). Window 1,860–2,325: **inside, by 28 words**. (Grew by 26 words when the script was made to name HDMI early and name HDMI Licensing Administrator as the answer to the locked title.)
- Per-act word counts, counted from the delivered acts:

| Act | Words | Share | Starts at | Target |
|---|---|---|---|---|
| I — The plug is a contract; the mess of 2002 | 296 | 16% | 0s | 15–20% |
| II — The studios, the lock and the loop | 369 | 20% | 115s | ~25% |
| III — The price | 380 | 20% | 257s | ~25% |
| IV — The money, the rival and the court | 527 | 28% | 405s | ~20% |
| V — The gate and the close | 316 | 17% | 609s | 10–15% |

  Deviation, stated plainly: Act IV runs eight points over target and Act III five under. The money, the rival and the court sit together because they are one argument (the fee was never the wall). I kept them rather than trim to hit the percentages; Act II and III are the natural place to add if the length needs to grow.
- Inline tag counts: SHOWABLE 8, DATA 6, SCENE 5, REMOTION 3, PIVOTAL 1, MAP 0, CARICATURE/COMPOSITE 0 (Track 3: no characters). Delivery tags: WRY 8, BUILDING 9, STILLNESS 4, TENSE 1.
- Decimal audit: raw decimals in the spoken narration 0 (the "HDMI two point one" quote uses "point"). Numerals such as "2.1" appear only inside a `[SCENE]` tag, which is not read aloud.
- Handoff: B_target = round(731 / 3.5) = 209 beats.

## Draft B — audit block

**2a. Retention physics gates (`gate_check.py -a 8` verbatim):**

```
FinanceCraft gate check — videos/05-hdmi-monopoly/02_SCRIPT_B.md
Archetype 8: Reversal Explainer (inkly 'Desert People', 253.5x)
1887 words | 164 sentences | ~12.2 min at 155 wpm
Benchmark for this archetype: med 16 | mean 17.0 | short 9.0% | long 18.9% | you 36.2/1k

  [PASS] MED    median sentence <= 19 (benchmark 16)
         observed: 10 words
  [PASS] MEAN   mean sentence <= 20.0 (benchmark 17.0)
         observed: 11.5 words
  [PASS] SHORT  sentences <=6w >= 1.0% (benchmark 9.0%)
         observed: 21.3%
  [PASS] LONG   sentences >=25w <= 22.9% (benchmark 18.9%)
         observed: 5.5%
  [PASS] JARGON zero technical / academic / evidence words  [UNIVERSAL — plain words only]
         observed: 0 distinct (0.0/1k)
         evidence: none found
  [PASS] BIGWD  12+ char words per 1,000 <= 14  [UNIVERSAL — benchmark max 12.8]
         observed: 3.2
  [PASS] REFRAME reframes per 1,000 sentences >= 36  [UNIVERSAL — benchmark range 36-108]
         observed: 104 (17 found)
         evidence: the 'it isn't X, it's Y' turn — what viewers quote back
  [PASS] TURN1   first reframe within opening 12%  [UNIVERSAL — benchmarks 1-11%]
         observed: 2%
  [PASS] OPENER  most-repeated sentence opener <= 24%  [UNIVERSAL — benchmarks 6-20%]
         observed: 'The' 13%
  [PASS] OPENRUN longest same-opener run <= 3  [UNIVERSAL]
         observed: 2 consecutive 'The...'
  [note] decimals: all phonetic, VO-safe
  [note] SIGNATURE CINEMATICS: 2 found — ARCHETYPE_WHIP_ZOOM_MONTAGE@113s, ARCHETYPE_INFINITE_PORTAL_TUNNEL@724s
  [PASS] CITES  zero narrated-source lines  [UNIVERSAL — research is invisible, bible/01]
         observed: 0
  [PASS] CLOSE  no moral / lesson in the last 150 words  [UNIVERSAL]
         observed: 0 lecture phrase(s)

  NOT MECHANICALLY CHECKED — apply by eye (see CP-VERIFY):
    - concrete-noun runs: no reliable automated test exists; read for
      passages with nothing a camera could photograph
    - R3 explainer-paragraph ban, R5 device repetition
    - PROMISE check first: title promise vs what the runtime is spent on;
      a world premise shrunk onto 1-2 characters or one lesson FAILS
    - RETELL test: each ~60-90s segment has one thing a viewer would repeat
      to a friend; a segment with none gets rewritten (CP-VERIFY GATE gamma)
    - A8: prior stated and validated before it is broken; nested
      paradox lands after the main mechanism, not before

ALL GATES PASS
```

- Archetype declared: 8 (Reversal Explainer).
- Jargon: zero found by the checker. "Licence", "patent", "open-source driver" are explained in place.
- Words of 12+ characters per 1,000: 3.7 (limit 14).
- Concrete grounding: read by eye. The longest run is the layer-three explanation of the patent licence (~90 words) before the Availink dispute; it is followed immediately by the court scene and a docket visual. Otherwise every paragraph carries a photographable object (docket page, price sheet, workshop bench, badge, laptop, spec sheet).
- Rhetorical-device ledger (counted): rhetorical questions 6; corrective "isn't / is not / wasn't" turns 9 (structural, see above); "Read that again" 1; "Let's be fair" 1; "the physical stake" 1; nested paradox 1 (the "free" rival that isn't free); callback to the opening image 1; "Go back to..." 1 (the second use was reworded, so R5 is met).
- A8 checks by eye: the prior is stated and validated ("you've never been asked to agree to anything... it seems to belong to the world the way a wall socket does") before it is broken; the nested paradox lands after the main mechanism (Act IV, after layers one to three).

**2b. Structural checks:**

- Exact spoken word count: 1,887. Runtime: 1,887 / 155 × 60 = 731 seconds (12.2 minutes). Window 1,860–2,325: **inside, by twenty-seven words**.
- Per-act word counts, counted from the delivered acts:

| Act | Words | Share | Starts at | Target |
|---|---|---|---|---|
| I — The paradox and layer one: the fee | 339 | 18% | 0s | 15–20% |
| II — The giants and the small makers; layer two: the lock | 438 | 23% | 131s | ~25% |
| III — The lock is picked; layer three: the patents | 409 | 22% | 301s | ~25% |
| IV — The nested paradox and the gate | 420 | 22% | 459s | ~20% |
| V — The honest case and the button | 283 | 15% | 622s | 10–15% |

- Inline tag counts: SHOWABLE 8, DATA 3, SCENE 3, REMOTION 3, PIVOTAL 1, MAP 0, CARICATURE/COMPOSITE 0. Delivery tags: TENSE 4, BUILDING 5, STILLNESS 4, WRY 3.
- Decimal audit: raw decimals in the spoken narration 0.
- Handoff: B_target = round(731 / 3.5) = 209 beats.

---

## Fact-check list before recording (both drafts)

Everything in the scripts traces to `01_RESEARCH_BRIEF.md`. These are the lines a viewer could challenge, in order of risk:

1. **The fee tiers** ($0.15 / $0.05 / $0.04, and the yearly fees). Reported consistently by Wikipedia and several distributor explainers; HDMI LA's own price sheet is behind a member login. The scripts say "as widely reported" once. Do not remove that phrase.
2. **The small-maker arithmetic** ("a dollar fifty-five a TV", "nearly forty times"). Our own arithmetic on the reported fees, assuming a maker of 10,000 units pays the $5,000 yearly fee plus $1 a unit plus five cents a unit. The scripts say "our own math". Keep it.
3. **The total money** ("six hundred million to two billion"). Our own estimate. Keep "our own rough math" on screen.
4. **The court result and $14 million.** The quotes and the settlement come from HDMI LA's statement and its law firm; both are parties. The court's own order could not be opened.
5. **The AMD quote.** From The Register (2 March 2024), which was readable. The Forum's own reply was not found and is not used.
6. **"In 2021, the Forum closed the newest version of the rulebook."** From secondary reporting.
7. **DisplayPort's twenty cents.** The patent pool's announced rate (March 2015), now run by Via LA. The scripts say "a group of patent owners asks twenty cents a product".
8. **"HDMI two point one" label.** HDMI LA's reply is reported by TFTCentral; the scripts say "as reported".

## Not done here

- Demand number: still NOT SUPPLIED.
- Titles, thumbnails and the layman check (STEP 6+ of the wider pipeline) are the next stage. Per the layman-appeal feedback in memory, "HDMI Monopoly" and "Tax on Every Screen" both need a cold-viewer read before they ship.
