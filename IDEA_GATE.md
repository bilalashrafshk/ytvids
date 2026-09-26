# FinanceCraft — IDEA GATE (STEP 1.5, runs before track classification)

*An idea that can't pass these ten questions will produce a competent script nobody finishes. No amount of scripting fixes it. This gate is where most of the retention is actually decided.*

---

## The rule that makes this gate real

**Every answer is an artifact, not a yes.** The engine never writes "PASS — the idea has a clear prior." It writes the prior. A question passes only if the artifact on the page would convince a sceptical reader. `gate_idea.py` rejects bare yeses, missing artifacts, and verdicts that don't match the answers.

This follows the lesson already written into CP-VERIFY: the model's self-report is unreliable, and the artifact is the check.

---

## Inputs (from the user, STEP 1)

- **Working title**
- **Thesis:** one sentence, 30 words max. If the user gives only a topic, the engine drafts a thesis *and says so*; the user confirms it at HARD STOP 0.
- **Demand evidence:** outlier videos on this concept (or an adjacent one) in the last 12 months, from 1of10 / vidIQ / OutlierKit — the count, the tool, and the best ratio. **The engine never supplies or estimates this.** If it's missing, write `DEMAND: NOT SUPPLIED`.
  - **2+** videos at ≥3× → proven demand
  - **1** → thin; fine for a Swing idea
  - **0** → unproven; the gate can still pass, but the handoff says so plainly

---

## The ten questions

Derived from what all ten idea-bank outliers share. Reference answers in brackets show what "pass" looks like.

| # | Name | Artifact required | Fails when |
|---|---|---|---|
| **Q1** | **PRIOR** | `Viewer believes:` one sentence the average viewer currently believes, or the thing they don't know exists. [Desert: when hot, take clothes off. Rent vs Buy: rent is throwing money away.] | No real prior, or the "prior" is a strawman nobody holds |
| **Q2** | **UNGUESSABLE** | `Viewer guess:` what someone expects the *answer* to be from the title alone (the title may state the claim; the why or how is what must surprise). `Actual:` what the video concludes. **Not counted for shapes e and j**, which sell execution rather than surprise. | The two lines say the same thing |
| **Q3** | **EVERYDAY ENTRY** | `Opens on:` the lived experience the viewer can picture **within the first 80 words**. The very first line may be a claim. [Heat. Splitting a bill. The fuel in your car.] | Nothing everyday within 80 words, needs prior knowledge (what a bond is), or contains a CP-0 jargon term |
| **Q4** | **MECHANISM** | Two sentences max, 50 words max: what a viewer could repeat to a friend the next day. | Needs a third sentence, uses jargon, or is a moral rather than a mechanism |
| **Q5** | **ESCALATION** | 3+ beats as a list, each bigger than the last: layered reveals, checkpoints, categories, bets, distances. | Fewer than 3, or the beats are parallel rather than rising |
| **Q6** | **MOVING NUMBER** *(advisory)* | `Number:` the figure or unit the viewer tracks, and how it moves. [Money left in the $1T account. Net worth at years 3 / 10 / 20. Travel time to Oort.] | Recorded as `[weak]`; **never counts toward the verdict** (two outliers have none) |
| **Q7** | **CAMERA TEST** | 5+ photographable objects or scenes as a list. [Leather bill folio. Faded pink Ford. Wet reed screen.] | Fewer than 5, or abstractions ("market pressure") |
| **Q8** | **COMPLICATION** | `Counterpoint:` the strongest objection. `Enters at:` where it goes in the video. [The renter is still ahead at year 20. Only nobles had wind catchers.] | None, or a token objection raised only to be knocked down. **House standard:** the one question not derived from the outliers; Hidden Yield lacks it and would get REWORK, on purpose |
| **Q9** | **CLOSING LINE** | The ending, written now. Any of: a reframe ("it isn't X, it's Y"), a question turned on the viewer, a sourced quote that carries the thesis, or a humility turn. | A summary or restatement of the thesis (`gate_idea.py` flags >50% shared content words). Whether it *lands* is human judgement |
| **Q10** | **LANE FIT** | `Track:` 1, 2 or 3, plus one line: **T1** — what the common version likely gets wrong and which filing type would prove it · **T2** — the real mechanic taught · **T3** — the everyday decision it changes. | Doesn't fit a FinanceCraft lane, or T1 with nothing beyond Wikipedia |

Plus one routing line (not a question): **`SHAPE:`** the thesis shape (a–k) from `SKELETON_LIBRARY.md`. This is the handoff to STEP 2.

---

## Verdict

| Result | Condition | Next |
|---|---|---|
| **PASS** | All counted questions pass | HARD STOP 0 → STEP 2 |
| **REWORK** | 1–2 fail, neither is Q1 or Q5 | Name the fix for each failed question; the user reworks or overrides |
| **REJECT** | Q1 or Q5 fails, or 3+ fail | Pivot protocol (below) |

Q6 never counts; Q2 doesn't count for shapes e and j. Q1 and Q5 are hard because they're the two traits no reference outlier lacks — confirmed by the calibration run below. Without a prior there's no hook. Without escalation there's no reason to keep watching after the answer.

Always end with `BIGGEST RISK:` one sentence naming the weakest remaining answer, even on a PASS.

---

## Calibration — does the gate approve the ideas that actually worked?

Each in-scope benchmark was filled in retroactively, as if pitched before it was made (files in `calibration/`), and run through `gate_idea.py`. The PsychToons listicles are excluded.

| Benchmark | Ratio | First draft of the gate | After recalibration |
|---|---|---|---|
| inkly Desert | 253.5× | PASS | PASS |
| Hidden Yield | 169.6× | REWORK (Q2, Q8) | REWORK (Q8, house standard) |
| $1T / 7 days | 99.3× | PASS | PASS |
| inkly Egyptians | 90.8× | REWORK (Q6) | PASS (Q6 weak) |
| Rent vs Buy | 66.2× | REWORK (Q9) | PASS |
| Petrodollar | 13.4× | REWORK (Q3, Q6) | PASS (Q6 weak) |
| NVIDIA | 2.68× | REWORK (Q9) | PASS |
| Kurzgesagt | 0.38× | REWORK (Q9) | PASS |
| Low Volume Capital BYD | 31.5× | — (added later) | PASS |

**What changed and why:** Q9 accepted only "it isn't X, it's Y" closes, but outliers also close on viewer questions, sourced quotes and humility turns. Q6 was missing in two outliers. Q3 demanded an everyday first sentence; Petrodollar gets there by word 70. Q2 punished guessable claims when only the answer needs to surprise.

**The honest limit of this test.** The gate was recalibrated on the same eight videos it's tested on, so "7 of 8 pass" shows it doesn't *reject* good ideas. It doesn't show it *filters out* bad ones. That needs a set of flops: 5–10 small-channel videos in these formats that landed at ≤0.2×. If most of them pass too, the gate is only a shape check and its questions need to get sharper. Until then, the Idea Gate is a necessary-not-sufficient filter; the demand number remains the strongest predictor you have.

---

## Pivot protocol (REJECT only)

Produce **exactly three pivots**, one per method, each aimed at the failed questions:

1. **Sharpen:** same topic, a new thesis with a real prior to break.
2. **Restructure:** same topic, a different skeleton that supplies what was missing. A flat topic with no escalation often becomes an A5 or A6, where the structure itself creates the escalation.
3. **Adjacent:** a neighbouring topic, found with one of the invention prompt's five angles (constraint twist, wrong protagonist, inversion, absurd literalisation, compressed clock).

Each pivot carries: `Thesis:` · `Method:` · `Fixes:` (question numbers) · `Artifact:` (the fixed answer, actually written) · `Skeleton:` (A#).

Pivots are not pre-passed. The one the user picks runs the full gate.

---

## Output format (exact — `gate_idea.py` parses it)

```
## IDEA GATE
WORKING TITLE: …
THESIS: …
DEMAND: <n> outliers ≥3× last 12 months | tool: … | best: …×   (or: DEMAND: NOT SUPPLIED)
SHAPE: <a–k> — <name>

### Q1 PRIOR — PASS
Viewer believes: …
### Q2 UNGUESSABLE — PASS
Viewer guess: …
Actual: …
… through Q10 …

VERDICT: PASS | REWORK | REJECT
BIGGEST RISK: …

(REJECT only)
### PIVOT 1 — <working title>
Thesis: …
Method: Sharpen
Fixes: Q1, Q2
Artifact: …
Skeleton: A8
```

Then **HARD STOP 0.** The engine waits for the user to confirm the PASS, accept a REWORK fix, or pick a pivot.

---

## Worked example 1 — PASS (calibration, from a reference video)

```
## IDEA GATE
WORKING TITLE: Why Desert People Wear More Clothes in Extreme Heat
THESIS: Loose layered robes keep desert people cooler than bare skin, because they block radiant heat and build a self-ventilating microclimate.
DEMAND: 2 outliers ≥3× last 12 months | tool: 1of10 | best: 253.5×
SHAPE: a — Reversal

### Q1 PRIOR — PASS
Viewer believes: when you're hot, you take clothes off.
### Q2 UNGUESSABLE — PASS
Viewer guess: they cover up for modesty or religion.
Actual: covering up is physically cooler than bare skin.
### Q3 EVERYDAY ENTRY — PASS
Opens on: the feeling of being too hot and wanting a breeze on bare arms.
### Q4 MECHANISM — PASS
In deep desert the sun and the air both heat you, so bare skin gains heat. Loose robes block the sun and trap a pocket of air that sweat keeps cool.
### Q5 ESCALATION — PASS
1. Loose fabric traps air and blocks the sun
2. Trapped air plus sweat makes a private cool zone
3. Walking pumps the robe like a bellows
4. Black robes, which should be worse, work just as well
### Q6 MOVING NUMBER — PASS
Number: the gap between air temperature and body temperature — 98°F skin against 120°F air.
### Q7 CAMERA TEST — PASS
- A Bedouin in a flowing black robe on a dune
- A Tuareg head wrap covering all but the eyes
- A thermometer reading 120°F in shade
- A robe billowing as its wearer walks
- A sunburned tourist in shorts
### Q8 COMPLICATION — PASS
Counterpoint: black should absorb more heat than white.
Enters at: after the main mechanism, as the nested paradox, resolved by the real robe test.
### Q9 CLOSING LINE — PASS
Your instinct isn't a guide to heat; generations of desert knowledge actually are.
### Q10 LANE FIT — PASS
Track: 3 — the everyday decision it changes: what you wear on a hot day. (Off-niche for FinanceCraft; shown only as a calibration example.)

VERDICT: PASS
BIGGEST RISK: Q6 is the weakest answer — the number barely moves, so escalation relies entirely on the mechanism layers.
```

---

## Worked example 2 — REJECT with pivots (a typical weak finance idea)

```
## IDEA GATE
WORKING TITLE: The History of the Federal Reserve
THESIS: The Federal Reserve was created in 1913 to stabilise the banking system and has evolved into the world's most powerful central bank.
DEMAND: 0 outliers ≥3× last 12 months | tool: 1of10 | best: 0.6×
SHAPE: b — Hidden system

### Q1 PRIOR — FAIL
Viewer believes: nothing specific — the thesis confirms what most people vaguely assume.
### Q2 UNGUESSABLE — FAIL
Viewer guess: a history of the Fed that ends with it being powerful.
Actual: a history of the Fed that ends with it being powerful.
### Q3 EVERYDAY ENTRY — FAIL
Opens on: the Panic of 1907 — needs banking history before the hook works.
### Q4 MECHANISM — PASS
The Fed sets the rate banks pay to borrow overnight. When that rate moves, your mortgage and car loan move with it.
### Q5 ESCALATION — FAIL
1. 1913 founding
2. Great Depression
3. 2008 bailout
(Chronological, not rising — each beat is a date, not a bigger reveal.)
### Q6 MOVING NUMBER — PASS
Number: the federal funds rate, from near zero in 2020 to above 5 in 2023.
### Q7 CAMERA TEST — PASS
- Jekyll Island clubhouse
- A 1907 bank run queue
- The Eccles Building
- A mortgage statement with the rate circled
- A dollar bill's "Federal Reserve Note" line
### Q8 COMPLICATION — PASS
Counterpoint: the Fed is often blamed for things Congress actually controls.
Enters at: midpoint.
### Q9 CLOSING LINE — FAIL
The Federal Reserve remains one of the most important institutions in the world.
### Q10 LANE FIT — PASS
Track: 3 — the everyday decision it changes: when to lock a mortgage rate.

VERDICT: REJECT
BIGGEST RISK: Q1 — with no prior to break, no structure will save it.

### PIVOT 1 — The Fed Doesn't Print Most New Money. Your Bank Does.
Thesis: Most new money is created by ordinary banks when they approve loans, not by the central bank printing it.
Method: Sharpen
Fixes: Q1, Q2, Q9
Artifact: Viewer believes: the government prints new money. Closing line: Money isn't printed and then lent; it's actually lent into existence.
Skeleton: A8

### PIVOT 2 — POV: You Run the Fed for 30 Days
Thesis: Every lever you pull to cut prices costs jobs, and the lag means you only see the damage after it's too late to stop.
Method: Restructure
Fixes: Q1, Q3, Q5
Artifact: Escalation: 1. first rate hike, nothing happens 2. second hike, markets panic 3. layoffs arrive from decisions made weeks ago 4. prices finally fall, with a recession you can no longer stop. Moving number: inflation and unemployment, read at every day's close.
Skeleton: A5

### PIVOT 3 — Why Every Central Bank Wants Exactly 2% Inflation
Thesis: The world's 2% inflation target traces back to a number New Zealand's government settled on in the late 1980s, not to any economic law.
Method: Adjacent
Fixes: Q1, Q2, Q3
Artifact: Viewer believes: 2% was calculated by economists. Opens on: a price tag on a loaf of bread that rose by a few cents.
Skeleton: A3
```

**Pivot 3 needs Track 1-grade sourcing** (the New Zealand origin story, and who actually picked the number, must be verified against primary sources) before it could ship. The gate checks shape, not truth, same as GATE α.