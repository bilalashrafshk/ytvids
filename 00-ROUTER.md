# 00 ROUTER — the shared engine (read this first, every run)

*This is the entry point. The engine reads this before anything else. It defines what happens between "here's a topic" and "here are two scripts," and where it is required to stop and wait.*

*Serves every channel in `channels/`. Companion files: `channels/<name>/CHANNEL.md` (STEP 0), `IDEA_GATE.md` (STEP 1.5), `SKELETON_LIBRARY.md` (STEP 2 and STEP 5), the Bible (index file + `bible/` sections), `gate_idea.py`, `gate_alpha.py`, `gate_check.py`.*

---

## The run, end to end

```
STEP 0   ENGINE asks which channel (unless the user already named it)
         loads channels/<name>/CHANNEL.md — it overrides everything below where it speaks
STEP 1   User supplies working title + one-sentence thesis + demand evidence
STEP 1.5 ENGINE runs the IDEA GATE (IDEA_GATE.md), checked by gate_idea.py
         REJECT → three pivots; REWORK → named fixes
         ══ HARD STOP 0 ══  wait for user: confirm, fix, or pick a pivot
STEP 2   ENGINE classifies the track AND ranks two skeletons (SKELETON_LIBRARY.md)
         ══ HARD STOP 1 ══  wait for user confirmation
STEP 3   ENGINE returns the prompt file + skeleton addendum + which AI to run it in
         ══ HARD STOP 2 ══  wait for the user to return the output
STEP 4   ENGINE validates the returned brief (GATE α + gate_alpha.py --skeleton)
         incomplete → reject by field name, do not proceed
STEP 5   ENGINE writes Draft A (Rank-1 skeleton, Safe) + Draft B (Rank-2 skeleton, Swing)
         Draft C (Transplant) only when the user asks for it
STEP 6   External: gate_check.py -a <each draft's own skeleton> on every draft
         fail → targeted regeneration, max 2 → then escalate to user
STEP 7   Handoff: scripts, audit blocks, one recommendation
```

**The three HARD STOPs are the load-bearing part of this document.** The engine does not continue past them on its own initiative — not to "save a step," not because the track seems obvious, not because the user asked it to keep going. Every failure this engine has produced traces back to continuing without material it should have waited for.

---

## STEP 0 — Which channel?

If the user hasn't named the channel, the engine's **first output is this question, and nothing else**:

```
Which channel is this for?
  1. FinanceCraft — finance documentaries (case autopsies, hypotheticals, explainers)
  2. Raahim — absurd what-if stories, 1950s deadpan educational-film style
```

Then load `channels/<name>/CHANNEL.md` and state in one line which profile is active. Every later step reads it:

- **Precedence:** channel profile → shared engine files → FinanceCraft-only Bible sections (only for FinanceCraft, or where a profile points to them). See `channels/README.md`.
- **The profile can restrict STEP 2:** e.g. Raahim is Track 2 only. A topic that needs a track the channel doesn't allow is flagged at HARD STOP 0, not quietly reshaped.
- **Episode folder** comes from the profile (`videos/` for FinanceCraft, `videos/raahim/` for Raahim).
- **Never cross channels.** No reusing another channel's characters, palette, thumbnails or episode files. If a topic fits the other channel better, say so at HARD STOP 0.

Every HARD STOP block starts with a `CHANNEL:` line so the active profile is always visible.

---

## STEP 1.5 — Idea Gate

Run `IDEA_GATE.md` on the thesis: ten questions, each answered with an artifact rather than a yes. Then run `gate_idea.py` on the output. If the script rejects it, regenerate the gate output (max 2), then escalate.

**The engine never supplies the demand number.** If the user didn't give one, write `DEMAND: NOT SUPPLIED` and say at HARD STOP 0 that demand is unproven.

## HARD STOP 0 — idea confirmation

The engine shows the gate block, then stops:

```
CHANNEL:       [name]
VERDICT:       PASS / REWORK / REJECT
BIGGEST RISK:  [one sentence]
DEMAND:        [as supplied, or NOT SUPPLIED]
NEXT:          confirm / apply fixes / pick pivot 1–3
```

A picked pivot runs the full gate before STEP 2. The user may override a REWORK. The engine records the override in the audit block and does not argue it.

---

## STEP 2 — Track classification

Apply these tests in order. The first one that matches wins.

**Test A — Did this already happen to a named entity?**
Can you name the company/institution *and* the year? → **TRACK 1: Documented Case Autopsy**
*Wirecard, MoviePass, Rivian, the Coldcard hack, Theranos.*

**Test B — Is the subject a system rather than an event?**
No protagonist, no collapse, just a mechanism that operates continuously → **TRACK 3: Mechanism Explainer**
*How currencies work, the economics of movie theatres, how the petrodollar functions.*

**Test C — Does the central event exist only in the future or the conditional?**
Nothing to report because nothing happened → **TRACK 2: The Hypothetical**
*POV: you have $1 trillion. What if social media went dark for 30 days. What if the dollar lost reserve status.*

### The classification trap — read this before every routing call

The most expensive error in this entire pipeline is misrouting at Step 2, because every later stage inherits it and none of them can detect it. **A hypothetical dressed in documentary language is the specific failure to watch for.**

"What if the dollar loses reserve status" *sounds* like Track 1 — real currency, real institutions, real economics. It is Track 2. There is no event. Routing it to Track 1 sends the researcher hunting for filings, which produces a literature review, which produces a script full of studies and standard deviations. That is exactly how the Blackout script happened.

**The decidable test:** can you write the event in the past tense with a date? If not, it is Track 2 regardless of how real the subject matter is.

### Hybrids

Some topics are Track 1 with a hypothetical act ("could MoviePass have worked?"). Route to **Track 1** and note the hypothetical segment separately — a real case with a speculative act is still a documented case. Never the reverse: a hypothetical with real background is still Track 2.

### Skeleton ranking (same step, after the track is set)

Take the SHAPE from the Idea Gate and read the Selection Matrix in `SKELETON_LIBRARY.md`. Rank 1 is Draft A's skeleton; Rank 2 is Draft B's. Skip any rank that is incompatible with the track (A5 and A9 are Track 2 only; A2 and A11 are Track 1 only; A1 and A7 are Track 3). Provisional skeletons (A1, A4, A7, A10) rank normally but are labelled `(provisional)` at HARD STOP 1.

---

## HARD STOP 1 — classification + skeleton confirmation

The engine states, and then stops:

```
CHANNEL:        [name]
TOPIC:          [as supplied]
CLASSIFICATION: TRACK [n] — [name]
TEST MATCHED:   [A / B / C] — [one sentence]
CONSIDERED:     [the track it is NOT, and why not — one sentence]
SHAPE:          [a–k] — [name]
DRAFT A:        A[n] [skeleton] [(provisional)?] — [why it fits this thesis, one sentence]
DRAFT B:        A[n] [skeleton] [(provisional)?] — [what could go wrong with it, one sentence]
PROMPT:         [filename] + [skeleton addendum, if any]
TOOL:           [which AI, and why]

Confirm before I release the prompt.
```

The user may swap either skeleton. Accept it without re-arguing.

**Why a stop for something this small:** misclassification costs an entire research cycle and is invisible until the script reads wrong. One keystroke from the user reduces the highest-cost error in the pipeline to near zero. It is the cheapest insurance available here.

If the user confirms, proceed. If the user corrects the track, accept the correction without re-arguing.

---

## STEP 3 — Prompt + tool assignment

| Track | Prompt file | Tool | Notes |
| ----- | ----- | ----- | ----- |
| 1 — Case Autopsy | `research-prompt-v2.md` | Gemini Deep Research | Depth and source coverage genuinely matter here |
| 2 — Hypothetical | `invention-prompt-v2.md` | Gemini (standard) or Claude | **Never Deep Research** — nothing exists to research; it will hunt for real events to cite and poison the register |
| 3 — Mechanism | `research-prompt-track3-v2.md` | Gemini (standard) | Dedicated Track 3 prompt -- lighter sourcing bar than Track 1 by design, per Research Methodology Phase 0 |

**Skeleton addenda.** If either confirmed skeleton has a brief addendum in `SKELETON_LIBRARY.md`, the engine outputs it with the prompt, to be pasted below it. If A and B both have one, include both. A9 *replaces* invention-prompt Part 2 instead of appending.

The engine outputs the prompt file and stops. It does not attempt the research itself, summarise what it expects to find, or draft anything "in the meantime."

**These prompt files are the single source of truth for their content.** The master document describes the methodology; it does not restate the prompts. If the methodology changes, the prompt file is what gets edited.

---

## STEP 4 — Brief validation (GATE α)

Run `gate_alpha.py --skeleton <n>` on the returned brief for the mechanical checks. Run it once per confirmed skeleton if A and B differ in addendum, then apply judgement for the rest.

**Mechanical (the script decides):** required sections present and non-empty, texture item count ≥ 10, citation markers present on factual claims, no section consisting only of a heading.

**Judgement (the engine decides, with evidence quoted):**
- Do the texture items pass the camera test? *"Institutional pressures" is not an object. A Denny's coffee cup is.*
- Does the Gap List contain anything beyond a competent hour on Wikipedia?
- Track 2 only: does Part 1 contain five genuinely distinct premises, or five rewordings of one? Is the adversary expressible as a moving number?
- Track 2 only: is Part 5's mechanic verification actually shown, or asserted?

**On failure:** name the missing or weak fields specifically and stop. Do not proceed on a partial brief. Do not offer to "work with what's here." A brief missing its Angle Statement (Track 1) or its Invention Premise (Track 2) is absent, not partial.

**What this gate cannot do:** confirm that a cited fact is true or that a citation resolves. No part of this engine can. That is a human opening the actual filing, and it stays a human's job. The gate checks that the material is *present and shaped correctly*, which is a different claim from *correct*.

---

## STEP 5-7 — Scripting

Proceed per the master document: CP-0 gates (`bible/06-retention-physics-cp0.md`), CP-3 twin drafts and CP-2 audit (`bible/07-script-generation-prompt.md`), CP-VERIFY checkpoints at each phase (`bible/05-cp-verify-phase-gates.md`), then `gate_check.py` externally on both drafts.

**Create first, check after.** Each draft is written in a creative pass with only the brief, the skeleton's beat map, the runtime and the hard constraints in view. CP-0 bands, the jargon list, device ledgers and `gate_check.py` run only on the finished draft (Two-Pass Rule, `bible/05-cp-verify-phase-gates.md`). Gates decide what ships, not what gets imagined.

**Skeleton rules for drafting:**
- Each draft follows its skeleton's beat map in `SKELETON_LIBRARY.md` and is gated with **its own** archetype: `gate_check.py -a 8` for an A8 draft, `-a 9` for A9, and so on. Never gate both drafts on one band.
- Different skeletons satisfy CP-3's Structure axis. The engine still names one more axis.
- The Stakes Contract applies to A5 only. A9 uses the Cost Contract.
- A2 drafts never contain invented dialogue for real people, even though the benchmark does.
- **Draft C (Transplant)** is written only on request: a compatible skeleton not used by A or B, ideally benchmarked in a different niche. It gets the same gates and a one-sentence risk statement.

Two failures on the same gate → stop and escalate with a diagnosis. Do not ship the best near-miss.

---

## Known limits — do not claim more than this

This pipeline is **deterministic where the work is mechanical, and loud where it isn't.** It is not infallible, and five things can still get through:

1. **Track misclassification** — mitigated by HARD STOP 1, not eliminated. A user confirming on autopilot reintroduces it.
2. **A weak idea with a well-formed gate** — `gate_idea.py` checks that artifacts exist and verdicts are consistent. It cannot tell whether the prior is one real viewers actually hold, or whether a demand number is real. Those stay with the human at HARD STOP 0.
3. **Thin skeleton evidence** — most skeletons rest on one outlier; A1, A4, A7 and A10 rest on sub-1× videos; and Track 1 has no autopsy benchmark yet. Skeleton rankings are informed judgement, not proven prediction.
4. **False material in a well-formed brief** — GATE α validates shape, never truth. A fabricated citation in the correct format passes.
5. **Prompt/methodology drift** — if someone edits the master document's methodology without editing the prompt file, the two silently disagree. The prompt files are canonical; treat any edit to methodology as an edit to them.

Everything else — sentence distribution, jargon density, tag counts, act allocation, decimal normalisation — is genuinely mechanical, because `gate_check.py` decides it rather than the model's self-report.