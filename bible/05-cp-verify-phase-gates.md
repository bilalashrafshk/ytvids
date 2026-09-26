<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — CP-VERIFY: The Phase Gate & Regeneration Loop**

*Runs at the close of every phase. No phase output is handed forward until its gate returns PASS. This section defines how the engine checks itself and what it does when it fails.*

---

## **The problem this solves**

The engine has been producing self-audits that assert compliance without performing the check. A real example: a delivered script's own audit block claimed 5 `[DATA]` tags when the script contained 7, claimed 4 `[COMPOSITE]` archetypes when only 3 were tagged, and reported per-act word counts that were off by up to 90 words — while every line of the audit read as confident and verified.

That is the failure mode to design against. **An audit that produces a number without counting is worse than no audit**, because it converts an unchecked draft into an apparently-validated one, and everything downstream inherits the false confidence.

So the rule underneath this entire section: **verification means producing the evidence, not producing the verdict.**

---

## **The loop**

Every phase runs the same four steps:

**1. PRODUCE** — generate the phase output as a **creative pass** (see the Two-Pass Rule below): no gate numbers, bands, word lists or checklists in view.
**2. VERIFY** — run that phase's checklist below, in full, in writing.
**3. BRANCH** — all PASS → hand forward. Any FAIL → regenerate.
**4. REGENERATE** — rewrite only the failing unit, re-verify, repeat. Maximum **two** regeneration attempts per phase.

### The Two-Pass Rule — create first, check after (applies to every creative phase)

Rules and gates narrow ideas before the ideas exist. A model drafting with 3,000 lines of constraints in view writes toward the average of the benchmarks, spends its attention on compliance instead of story, and produces work that passes every gate and still feels flat. So every creative phase — idea pivots, titles, hooks, thumbnails, scripts, beat-sheet visual ideas, character concepts — runs in two separate passes:

**Pass 1 — Create.** Work from only: the inputs that define the job (thesis/premise, the brief's facts or invented world, the confirmed skeleton's beat map, target runtime) and the **hard constraints** — the few rules whose violation can't be fixed by editing:
- Track 1: no invented facts, no invented dialogue for real people, real people illustrated never photoreal.
- Track 2: invented names only, the underlying mechanic stays accurate, the episode must read as fiction.
- Everything: the audience is a stranger with zero context.

Do **not** load or consult during Pass 1: CP-0 bands, the jargon list, reframe counts, device ledgers, word-count targets, legibility limits, callout counts, asset caps, tag quotas. Go wide — generate more options than needed, take the strange idea seriously, follow what is interesting.

**Pass 2 — Check.** Only once the Pass 1 output exists, run the phase's full checklist (below) and `gate_check.py` / `gate_alpha.py` / `gate_idea.py` where they apply. Fix failures with the **smallest** edit that clears them — never by sanding down the idea that made the draft worth checking. If a gate and the draft's best idea truly conflict, keep the idea, fix around it, and flag the conflict to the user rather than silently flattening it.

**Where possible, run Pass 2 as a fresh pass** that sees only the output and the rules, not the creative reasoning — it checks the work instead of defending it. The thumbnail phase (`bible/11`, Phase 2) is the reference implementation.

This does not weaken any gate: nothing is handed forward until Pass 2 returns PASS. It only changes *when* the rules enter.

### How to verify so the check is real

For every checklist item, the engine outputs **three things**: the requirement, the observed value, and the evidence.

```
REQUIREMENT: Sentences ≤6 words must be ≥38% (Track 2)
OBSERVED:    47 of 171 sentences = 27.5%
EVIDENCE:    counted; longest offending run at Act II ¶4 —
             three consecutive sentences of 22, 26 and 19 words
VERDICT:     FAIL
```

**Forbidden verification language**, in any phase: "PASS", "compliant", "verified", "confirmed", "all guidelines followed" — appearing without an observed value and its evidence beside it. A bare verdict is treated as a FAIL regardless of what it claims.

**For any countable item, the count must be produced by scanning the delivered artifact, not recalled from the intention while writing it.** If the engine cannot actually count something reliably, it must say so — *"cannot verify by inspection"* — rather than emit a plausible number. An admitted gap is recoverable; a confident wrong number is not.

### What "regenerate" means

Regeneration is targeted, not total. Rewrite the smallest unit that contains the failure:

- Gate 4 jargon failure in one paragraph → rewrite that paragraph
- Act III over-length by 40% → restructure Act III
- Opening contract absent (A5 Stakes Contract by word 80 / A9 Cost Contract by word 150) → rewrite that opening span only
- Structure fundamentally wrong for the material → the whole draft, back to Step 1

Rewriting the entire script to fix one paragraph usually introduces new failures elsewhere and is a common way for the loop to oscillate without converging.

**After every regeneration, re-run the phase's FULL checklist — not only the item that failed.** Fixes propagate: cutting jargon lengthens sentences, tightening sentences drops concrete nouns.

### The escalation rule — this is the important one

**If a phase fails its gate twice, stop. Do not attempt a third pass. Do not ship the best available version.**

Report to the user:
1. Which specific gate is failing and the observed value across both attempts
2. What was changed between attempts and why it didn't resolve it
3. The engine's diagnosis of *why* — usually one of: the brief lacks the material the gate needs, two guidelines are in genuine conflict, or the topic is a poor fit for the chosen archetype
4. A specific recommendation — usually either "the brief needs X" or "this needs a different archetype"

Two failures on the same gate almost never means the engine needs another try. It means something upstream is wrong, and further attempts burn effort producing variations on an unfixable draft. **Silently shipping a near-miss after two failures is the single worst outcome available** — it looks like success and defeats the entire gate system.

---

## **Per-phase checklists**

### GATE alpha-0 -- Idea Intake (before CP-INPUT, before a brief is even requested)
- Run the ten questions in `IDEA_GATE.md` against the working title + one-line thesis. Every answer is an artifact (a written prior, a written mechanism, a written camera-test list) -- a bare "yes" is a FAIL on that question regardless of what it claims.
- Run `gate_idea.py` on the completed sheet. It checks that artifacts exist, checks specific shape requirements per question, and checks that the stated VERDICT matches the answers -- it does not and cannot judge whether the prior is *actually* one real viewers hold, or whether a supplied demand number is real. Those two judgments stay with the human.
- **VERDICT: PASS** -> proceed to HARD STOP 0, then CP-INPUT / brief-building.
- **VERDICT: REWORK** -> name the fix per failed question; the user reworks or explicitly overrides. Do not silently proceed past a REWORK.
- **VERDICT: REJECT** -> produce exactly three pivots (Sharpen / Restructure / Adjacent) per `IDEA_GATE.md`'s protocol, each re-runnable through this same gate.
- FAIL to produce a well-formed gate sheet at all (missing questions, verdict doesn't match answers) -> regenerate the gate sheet itself, same two-attempt-then-escalate rule as every other phase.
- **This gate did not exist before nine benchmark videos were retroactively run through it; two required updates to the question definitions before all nine passed. Treat gate_idea.py as calibrated against those nine, not proven against a wider set -- it has not yet been tested on flops.**

### GATE α — Brief Intake (after CP-INPUT, before anything else)
- Brief type matches the routed track — state which, and why
- Every load-bearing field present and non-empty: Track 1 → Angle Statement, Verified Facts w/ citations, Pivotal Detail, Showable Assets. Track 2 → Mechanic, Invention Premise + 4 rejected variants, Constraint, Adversary, World Kit, Quotable Beat. Track 3 → one authoritative number per claim, Texture Pass yielding ≥10 concrete items (same bar as the other tracks), no Angle Statement or Invention Premise required
- Texture Pass yields ≥10 concrete items — **list them, numbered**
- FAIL → do not regenerate. Return to the user for the missing material. The engine cannot manufacture its way past this gate.

### GATE β — Structure & Divergence (after Step 1, before drafting)
- Structure named for both drafts, with one-sentence rationale each
- Drafts diverge on ≥2 of the 4 axes — name the axes explicitly
- Draft B's risk stated in one sentence: what could go wrong
- Chronological chosen only with a stated reason nothing else fits
- FAIL → re-pick structures. This gate is cheap to fail and enormously expensive to skip; a wrong structural choice cannot be edited out later.

### GATE γ — Narration Draft (after Step 3, per draft, independently)
Run every CP-0 Retention Physics gate with observed values and evidence:
- **Run `gate_check.py -a <archetype>` and paste its output.** Do not restate the numbers from memory — the bands are archetype-relative and the script is the authority.
- Median, mean, short-sentence share, long-sentence share, second-person: against **this archetype's band**, not a universal number
- Jargon per 1,000 ≤ 4.0 (universal) — **list every offending term by name**
- 12+ char words per 1,000 ≤ 14 (universal)
- **By eye, not by script:** passages with nothing a camera could photograph. No reliable automated test exists for this; read for it.
- **Mechanism repetition.** List every distinct failure mode in the script. If the same one recurs — a blocked login, a frozen account — it is one beat told repeatedly, not escalation. The benchmarks never reuse a failure mode; each stage breaks for a new reason. Not mechanically checkable, since the mechanism is topic-specific.
- R3 explainer-paragraph ban — quote any passage of 3+ mechanism sentences with no person, object, consequence or joke
- R5 device ledger — list each rhetorical device and its count; any count >1 is a FAIL
- Opening contract, by skeleton (never by track): **A5** — Stakes Contract complete within 80 words, **quote the 80 words**; **A9** — Cost Contract (contrarian choice, its social cost, the named foil) complete by word 150, **quote the 150 words**; **A10** — no contract, opens on a flat absolute claim, **quote the claim**. Applying the A5 contract to A9 or A10 is itself a FAIL of this gate.
- A5: ledger beats present and identically shaped at every time block -- **do not eyeball this.** List every checkpoint's field names side by side. If the field set changes between checkpoints (e.g. checkpoint 1 tracks "dispatches / storage revenue / trapped pallets", checkpoint 2 tracks "bank clearance / trapped deposits / failed wire fees"), that is a FAIL even if each individual checkpoint reads well -- it is flavor text updating, not one running instrument the viewer can track. This exact failure has shipped before undetected.
- **Ledger arithmetic.** For A5 and A11 specifically: take the rate or figure established in the Stakes Contract / Anomaly beat and recompute at least one later checkpoint from it by hand. State the computed number next to the scripted number. A mismatch is a FAIL regardless of how the surrounding prose reads -- this is exactly the kind of error self-audit misses, since it requires arithmetic, not judgement, and CP-VERIFY's "Honest limitation" section already says self-verification is weakest at mechanical counting. This exact failure (a stated demurrage rate that didn't reconcile with a later checkpoint by roughly 10x) has shipped before undetected.

### GATE δ — Tagging & Assets (after Step 4)
- Every `[COMPOSITE]` / `[CARICATURE]` beat described in prose carries an actual bracket tag — scan the prose for untagged archetype beats, don't assume
- Every Showable Asset and the Pivotal Detail from the brief is tagged somewhere
- `[WATERMARK]` spacing ≤3 minutes throughout (Track 2) — compute the gaps from act word counts, don't eyeball
- Delivery tags present at every genuine energy shift
- Tag counts produced by scanning the delivered script
- Signature cinematics: `gate_check.py` reports every `[REMOTION: ARCHETYPE_...]` tag's approximate timestamp. Zero found needs a stated reason in the audit; two or more landing <90s apart needs one too — don't let either pass silently.

### GATE ε — Audit Integrity (after CP-2, final gate before handoff)
This gate audits the audit.
- Per-act word counts counted from the delivered acts — not asserted
- Cumulative act timestamps derived from those counts — recompute and compare against any stated timestamps
- Total word count with tags stripped
- Every number in the CP-2 block traceable to something actually counted
- **Self-check: does any figure in this audit block differ from what a fresh count of the delivered script would produce?** If unsure of any figure, mark it "unverified" rather than stating it.
- FAIL → the audit block is rewritten. The script itself may be fine; a wrong audit is still a blocking failure because everything downstream trusts it.
- **Promise check:** read the locked title and thumbnail, then the script's opening and ending. Does the video deliver what the packaging promises? If not, change whichever one is wrong before handoff.

---

## **Honest limitation — read this before relying on the loop**

Self-verification is weakest at exactly the thing that has already failed here: mechanical counting. A language model asked to count tags in its own 2,000-word output will often produce a plausible number rather than a correct one, and asking it to "check carefully" does not reliably fix that.

This section reduces the failure rate — mainly by demanding evidence alongside every verdict, which makes fabricated counts harder to produce casually. It does not eliminate it.

**For anything genuinely numeric — word counts, sentence-length distributions, jargon density, tag counts, act allocations — run an external script over the delivered file.** A twenty-line counter is definitive where self-audit is probabilistic. Treat GATE γ and GATE ε self-reports as a first filter that catches obvious failures, and the external count as the thing that actually decides.

The gates that self-verification handles *well* are the judgement calls: is this passage an explainer paragraph, is this device repeating, is Draft B actually a swing, does the Stakes Contract really state a penalty. Those are the ones to lean on.
