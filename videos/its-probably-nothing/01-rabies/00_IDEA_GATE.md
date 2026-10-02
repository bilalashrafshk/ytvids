# Idea Gate — It's Probably Nothing — Episode 01: Rabies

**Topic:** Rabies: what happens after an animal bite or scratch you shrugged off, and why the only window to act is before any symptoms.

**Thesis:** Rabies is the one disease where "I feel fine" is the most dangerous state. The virus travels quietly for weeks while treatment still works almost perfectly, and once symptoms start it is almost always fatal. So the moment to act is exactly when it feels like "probably nothing".

**Retell line:** "A bite you ignore feels like nothing for weeks, and that is the problem, because the shots only work before you feel anything."

**Structure override (owner decision, 2026-10-02):** open in the present, at the moment symptoms show, then rewind to the bite. This replaces the A13 "Day 1 cold open" for this episode only. The fork still happens, at the rewound Day 1 decision. See the structure note at the bottom.

Run `IDEA_GATE.md` (ten questions, artifact-based), then `python3 gate_idea.py`. Then the channel's extras:

- **Safety screen:** `python3 gate_claims.py --topic "<topic>"` → **CLEAR** (not on the never-list). Reproductive / paediatric / mass-casualty flags: none. Note for the script: rabies often involves children; keep the story adult and non-graphic.
- **Recognition test:** PASS. A bat in the house, a stray dog's nip, a cat scratch: a stranger has lived through one within ten seconds of hearing it.
- **Day 3 sign:** any bite, scratch or lick on broken skin from a wild or unknown animal. Wash it and see a clinician the same day for post-exposure treatment, before any symptoms. (Claim to be sourced in the ledger.)
- **Demand:** `DEMAND: NOT SUPPLIED`

**Biggest risk:** the reference channel already has a rabies episode (`channels/its-probably-nothing/reference/transcripts/1507nxH2c4E_Dying_from_Rabies.txt`). Differentiation must come from Dennis, the fork, and the colour drain, never from topic, wording, order or visuals (Clean-Room rule).

**Claims to verify before scripting (working understanding, not yet sourced):**
- Symptoms usually appear weeks to months after exposure, with a wide range.
- Once symptoms appear, the disease is almost always fatal.
- Post-exposure treatment works if started before symptoms.

## Structure note: present first, then rewind

| Beat | What happens |
| --- | --- |
| **1. Present** | Dennis, weeks after the bite, notices the first vague symptoms and explains them away ("it's probably nothing", the flu, stress). Hard beat. Colour already partly drained. |
| **2. Rewind** | A clean cut back: "Six weeks earlier." The bite, in the colours of a healthy Dennis. He shrugs it off. |
| **3. Narrator enters** | Names what it actually is, myth quiz (e.g. what really spreads it), plain-words mechanism: the silent journey along the nerves. |
| **4. The fork** | Back at the rewound Day 1 decision: Ignoring-Dennis waits (and the story rejoins the opening scene); Goes-on-Day-3 Dennis gets treated. |
| **5–8** | Dated timeline, what it feels like, reality check, the button. As in A13. |

Why this suits rabies: the gap between bite and symptoms is the whole story, so opening at the symptoms makes the viewer ask "what did he do?" and the rewind pays it off. Check `gate_check.py -a 13` against the script; if the opening reads as out of band, record the reason here rather than rewriting the skeleton.

VERDICT: GO (pending demand supplied) / BIGGEST RISK: overlap with the reference rabies episode / NEXT: research brief and claims ledger (WHO, CDC sources), then HARD STOP 1 skeleton ranking.
