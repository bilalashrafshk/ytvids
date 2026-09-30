#!/usr/bin/env python3
"""
Episode 05: build 13_CAPTIONS_EN.srt (script wording, timed to the voice) and 13_FINAL_METADATA.md
(title, description, chapters taken from the alignment, tags). Re-run after any re-alignment.
Captions ship as a separate SRT uploaded in YouTube Studio; they are never written into the CapCut draft.
"""
import json, os, re, textwrap

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
EP = os.path.join(ROOT, "videos/05-hdmi-monopoly")
AL = json.load(open(EP + "/voiceover/alignment.json"))
S, T = AL["sentences"], AL["duration"]

# spoken form -> written form (the script's own wording)
YEARS = {"two thousand two": "2002", "two thousand six": "2006", "two thousand nine": "2009", "twenty ten": "2010",
         "twenty eleven": "2011", "twenty fifteen": "2015", "twenty seventeen": "2017", "twenty twenty-one": "2021",
         "twenty twenty-three": "2023", "twenty twenty-four": "2024", "twenty twenty-five": "2025"}
def written(t):
    t = t.replace("H D M I", "HDMI").replace("H D Fury", "HDFury").replace("D V I", "DVI").replace("A M D", "AMD")
    t = t.replace("Warner Brothers", "Warner Bros.")
    for k in sorted(YEARS, key=len, reverse=True):
        t = re.sub(r"\b" + k + r"\b", YEARS[k], t)
    t = t.replace("two point one", "2.1").replace("two point two", "2.2")
    return t

def split_cue(text, limit=84):
    if len(text) <= limit:
        return [text]
    cands = [m.end() for m in re.finditer(r"(?:[,:;] | and | but | that | which | so )", text)]
    if not cands:
        cands = [m.end() for m in re.finditer(r" ", text)]
    mid = len(text) / 2
    cut = min(cands, key=lambda c: abs(c - mid))
    return split_cue(text[:cut].strip(), limit) + split_cue(text[cut:].strip(), limit)

def wrap2(text):
    if len(text) <= 42:
        return text
    lines = textwrap.wrap(text, width=max(28, (len(text) // 2) + 6))
    return "\n".join(lines)

def stamp(t):
    ms = int(round(t * 1000)); h, ms = divmod(ms, 3600000); m, ms = divmod(ms, 60000); s, ms = divmod(ms, 1000)
    return "%02d:%02d:%02d,%03d" % (h, m, s, ms)

cues = []
for i, s in enumerate(S):
    start = s["start"]
    nxt = S[i + 1]["start"] if i + 1 < len(S) else T
    end = min(max(s["end"] + 0.2, start + 0.6), nxt - 0.03) if i + 1 < len(S) else min(s["end"] + 0.3, T)
    end = max(end, start + 0.4)
    parts = split_cue(written(s["text"]))
    total = sum(len(p) for p in parts)
    t = start
    for p in parts:
        d = (end - start) * len(p) / total
        cues.append([t, t + d, p]); t += d
for k in range(len(cues) - 1):                      # never overlap
    cues[k][1] = min(cues[k][1], cues[k + 1][0] - 0.02)
srt = []
for k, (a, b, txt) in enumerate(cues, 1):
    srt.append(f"{k}\n{stamp(a)} --> {stamp(b)}\n{wrap2(txt)}\n")
open(EP + "/13_CAPTIONS_EN.srt", "w").write("\n".join(srt))
alltxt = " ".join(c[2] for c in cues)
assert "H D M I" not in alltxt and "thousand two" not in alltxt
cps = [len(c[2]) / max(0.2, c[1] - c[0]) for c in cues]
print("captions: %d cues | longest cue %d chars | over 21 chars/s: %d | last ends %.1fs of %.1fs" % (len(cues), max(len(c[2]) for c in cues), sum(1 for x in cps if x > 21), cues[-1][1], T))

# ------------------------------------------------------------ chapters from the alignment
def at(sub):
    for s in S:
        if sub in s["text"]:
            return s["start"]
    raise SystemExit("chapter anchor not found: " + sub)
chap = [(0.0, "Look at the back of your TV"), (at("Start in two thousand two"), "2002: a mess of cables"),
        (at("But a plug needed one more thing"), "The lock and the film studios"), (at("Here is the whole loop"), "The loop that makes every TV pay"),
        (at("Picture a club with one entrance"), "What the contract costs"), (at("So how much does a few cents add up to"), "How much a few cents adds up to"),
        (at("Some tried."), "The rival plug that isn't free"), (at("Which brings us to a chip company"), "The chip maker that fought back"),
        (at("Let's be fair"), "The fair case for all this"), (at("But hold on"), "Who gets to see the plans"), (at("Go back to that TV"), "Back to the plug")]
def mmss(t):
    m, s = divmod(int(t), 60); return "%d:%02d" % (m, s)
chapters = "\n".join(f"{mmss(t)} {name}" for t, name in chap)
assert all(b[0] - a[0] >= 10 for a, b in zip(chap, chap[1:])), "a chapter is shorter than 10 seconds"

tags = ["HDMI", "who owns HDMI", "HDMI licensing", "HDMI licensing fee", "HDMI royalty", "how much does HDMI cost", "HDMI vs DisplayPort",
        "DisplayPort royalty free", "HDMI Licensing Administrator", "HDMI Forum", "HDMI 2.1", "HDMI 2.1 Linux", "AMD HDMI 2.1 Linux",
        "open source driver HDMI", "HDCP", "HDCP explained", "copy protection explained", "why HDMI is not free", "hidden fees in TVs",
        "how HDMI works", "history of HDMI", "HDMI 2002 founders", "Availink HDMI lawsuit", "technology explained", "electronics explained", "FinanceCraft"]
tagline = ", ".join(tags)
assert len(tagline) <= 500, len(tagline)
hook = "Every TV with an HDMI port pays a small fee to have it. Here's who collects it, why nobody can skip it, and what happened when one company tried."
assert len(hook) < 160, len(hook)

md = f"""# Phase 14: Final Verified YouTube Video Description & Accurate Chapter Timestamps — Episode 05

> Built from the final alignment (`voiceover/alignment.json`) by `scripts/build_ep05_captions_and_metadata.py`. Chapter times are the spoken downbeats of the sentences that open each section. **Re-run the script if the audio changes.** If the final video ends up a different length than the voiceover, check the times against the exported video before publishing.

---

## 1. Video Packaging & Title

- **Selected Title:** Who Gets Paid Every Time You Plug In a TV?
- **Thumbnail:** chosen by you from `04_THUMBNAILS.md` (A recommended, C as the swing). Text on the thumbnail never repeats the title.
- **Pinned Comment:** You've pushed that cable in a thousand times and never seen the bill. What else in your living room has an owner you've never thought about?

- **Second pinned or first reply (our own numbers):** The small-maker comparison ($1.55 a TV against about 4 cents) and the "$0.6 to $2 billion" total are our own arithmetic on the widely reported fee schedule. HDMI Licensing Administrator's own price sheet isn't public, so the tiers are as widely reported.

---

## 2. YouTube Video Description

```
{hook}

In 2002, seven electronics rivals built one plug to replace a knot of cables. They added a copy-protection lock to win over the film studios, and a contract to pay for it. Twenty-three years and about fourteen billion devices later, the plug is on almost everything you own. This video follows the chain of cause and effect, from that first agreement to a federal court in 2025 and an AMD driver that Linux users still can't have.

TIMESTAMPS:
{chapters}

SOURCES:
- HDMI Licensing Administrator: founders page https://www.hdmi.org/adopter/founders
- HDMI Licensing Administrator: "Clarification on HDMI Licensed Products" (Aug 13, 2010) https://www.hdmi.org/announce/detail/82
- HDMI Licensing Administrator: statement on the December 2025 ruling https://www.hdmi.org/blog/detail/187
- HDMI Adopted Trademark and Logo Usage Guidelines, section 1.1.1 (May 2022)
- Digital Content Protection LLC: HDCP License Agreement (March 2024) https://www.digital-cp.com/licensing
- HDMI Licensing Administrator v. Availink (N.D. Cal., No. 22-cv-06947): law firm summary https://constantinellp.com/antitrust-group/antitrust-today-blog/constantine-cannon-wins-summary-judgment-then-14-million-settlement-for-hdmi-licensing-administrator-inc-in-license-and-antitrust-dispute/
- The Register, "HDMI Forum blocks AMD open-source HDMI 2.1 driver" (2 March 2024) https://www.theregister.com/2024/03/02/hdmi_blocks_amd_foss/
- HDMI Licensing Administrator, 2017 shipments release https://www.prnewswire.com/news-releases/shipments-of-products-with-hdmi-interface-nears-900-million-devices-in-2017-total-installed-base-approaches-seven-billion-300577982.html
- TFTCentral, "When HDMI 2.1 isn't HDMI 2.1" https://tftcentral.co.uk/articles/when-hdmi-2-1-isnt-hdmi-2-1
- Via Licensing Alliance, DisplayPort patent licence https://www.via-la.com/licensing-programs/displayport/
- Wikipedia: HDMI Licensing; High-bandwidth Digital Content Protection; MPEG LA

NOTES ON THE NUMBERS:
Fee tiers are as widely reported; HDMI Licensing Administrator's price sheet is not public. The small-maker comparison and the total-money range are our own arithmetic on those fees. Court quotes come from HDMI Licensing Administrator and its lawyers.

DISCLAIMER:
Educational explainer about how a licensing system works. Not legal or investment advice.

#HDMI #technology #explained #electronics
```

---

## 3. SEO Tags ({len(tags)} keywords, {len(tagline)} characters)

```
{tagline}
```

---

## 4. Upload checklist

1. Export the video from CapCut with the caption track **off** (captions are not in the draft).
2. YouTube Studio: title, description above, tags above, the chosen thumbnail.
3. Subtitles: upload `13_CAPTIONS_EN.srt` as English subtitles (script wording, timed to the voice).
4. Set the two pinned comments above.
"""
open(EP + "/13_FINAL_METADATA.md", "w").write(md)
print("chapters:", len(chap), "|", chapters.replace("\n", " | "))
print("hook %d chars, tags %d chars" % (len(hook), len(tagline)))
