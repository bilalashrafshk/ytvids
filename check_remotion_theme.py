#!/usr/bin/env python3
"""
FinanceCraft — CP-6 Theme Lock / Semantic Accent Lock external verifier.

Self-audit of Remotion source is unreliable: components have been rewritten
after a Theme-Lock or Semantic-Accent rule landed and still violated it
(verified directly against file mtimes vs. Channel Bible commit timestamps).
This is a static check of the .tsx source itself — colors are a compile-time
property, not a rendered one, so this can be checked mechanically instead of
depending on the build agent remembering the current rule.

    python3 check_remotion_theme.py remotion/src/scenes/episode03
    python3 check_remotion_theme.py remotion/src/scenes/episode03/SomeFile.tsx

Exit code 0 = all files pass, 1 = one or more fail.

NOT covered (needs a rendered frame, not source — see CP-14):
  - text-on-text or text-on-chart overlap
  - legibility / font size
  - whether a hex used IS actually the color it looks like it should be
"""

import colorsys
import glob
import os
import re
import sys

TOKENS_PATH = "remotion/src/tokens.ts"

# Colors that are structurally neutral regardless of hue — these never count
# toward the "how many saturated accents does this file use" tally.
NEUTRAL_HUE_MAX_SATURATION = 0.18  # HSL saturation below this reads as gray, not a color
ALWAYS_NEUTRAL_HEX = {"#ffffff", "#000000"}

# Token roles that are backgrounds/text/structure, not semantic accents.
NEUTRAL_TOKEN_KEYS = {
    "background", "backgroundDark", "surfaceCard", "textPrimary",
    "textSecondary", "textMuted", "gridLine", "borderCard", "navy",
}
# Token roles that ARE semantic accents — at most one hue-family of these
# should be live in a single component per the Single Semantic Accent rule.
ACCENT_TOKEN_KEYS = {"crimson", "crimsonMuted", "emerald", "emeraldMuted", "amber", "accentLine"}

HEX_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b")
BG_COLOR_RE = re.compile(r"backgroundColor:\s*['\"](#[0-9a-fA-F]{3,8})['\"]")
TOKENS_IMPORT_RE = re.compile(r"import\s*\{[^}]*\bTOKENS\b[^}]*\}\s*from\s*['\"].*tokens['\"]")


def load_tokens(path):
    if not os.path.exists(path):
        print(f"[warn] tokens file not found at {path} — proceeding with empty token set")
        return {}
    src = open(path, encoding="utf-8").read()
    out = {}
    for key, hexval in re.findall(r"(\w+):\s*['\"](#[0-9a-fA-F]{3,8})['\"]", src):
        out[key] = hexval.lower()
    return out


def hex_to_hsl(hexval):
    h = hexval.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    h = h[:6]
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    hue, light, sat = colorsys.rgb_to_hls(r, g, b)
    return hue, sat, light


def hue_family(hue):
    # hue in [0,1); bucket into named families roughly matching the token palette
    deg = hue * 360
    if deg < 15 or deg >= 345:
        return "red/crimson"
    if deg < 45:
        return "orange/amber"
    if deg < 70:
        return "yellow"
    if deg < 160:
        return "green/emerald"
    if deg < 200:
        return "cyan"
    if deg < 255:
        return "blue/navy"
    if deg < 290:
        return "purple"
    return "pink/magenta"


def check_file(path, token_hex, token_hex_to_key):
    src = open(path, encoding="utf-8").read()
    fails = []
    notes = []

    has_tokens_import = bool(TOKENS_IMPORT_RE.search(src))

    # --- Theme Lock: base canvas backgroundColor must resolve to a token hex ---
    bg_matches = BG_COLOR_RE.findall(src)
    bad_bg = [m for m in bg_matches if m.lower() not in token_hex and m.lower() not in ALWAYS_NEUTRAL_HEX]
    if bad_bg:
        fails.append(
            f"Theme Lock: hardcoded backgroundColor not in tokens.ts: {sorted(set(bad_bg))}"
        )
    elif bg_matches:
        notes.append(f"backgroundColor hex(es) all resolve to tokens: {sorted(set(bg_matches))}")

    if bg_matches and not has_tokens_import:
        fails.append("Theme Lock: uses hardcoded backgroundColor hex but never imports TOKENS at all")

    # --- Semantic Accent Lock: count distinct saturated hue-families in play ---
    all_hex = {m.lower() for m in HEX_RE.findall(src)}
    accent_families = set()
    non_token_saturated = set()
    for hexval in all_hex:
        if hexval in ALWAYS_NEUTRAL_HEX:
            continue
        try:
            hue, sat, light = hex_to_hsl(hexval)
        except ValueError:
            continue
        if sat < NEUTRAL_HUE_MAX_SATURATION:
            continue  # gray/near-gray, not a color
        key = token_hex_to_key.get(hexval)
        if key in NEUTRAL_TOKEN_KEYS:
            continue  # e.g. accentLine-adjacent navy etc. already classified neutral
        family = hue_family(hue)
        accent_families.add(family)
        if key is None:
            non_token_saturated.add(hexval)

    if non_token_saturated:
        fails.append(
            f"Theme Lock: saturated color(s) not sourced from TOKENS.colors.*: {sorted(non_token_saturated)}"
        )

    if len(accent_families) > 1:
        fails.append(
            f"Semantic Accent Lock: {len(accent_families)} competing saturated hue-families in one "
            f"component: {sorted(accent_families)} — reserve ONE accent, everything else neutral"
        )

    return fails, notes


def main():
    if len(sys.argv) != 2:
        print(f"usage: {sys.argv[0]} <file.tsx | directory>")
        return 1
    target = sys.argv[1]

    tokens = load_tokens(TOKENS_PATH)
    token_hex = set(tokens.values())
    token_hex_to_key = {}
    for key, hexval in tokens.items():
        token_hex_to_key.setdefault(hexval, key)

    if os.path.isdir(target):
        files = sorted(glob.glob(os.path.join(target, "*.tsx")))
    else:
        files = [target]

    if not files:
        print(f"No .tsx files found at {target}")
        return 1

    total_fail = 0
    for path in files:
        fails, notes = check_file(path, token_hex, token_hex_to_key)
        verdict = "FAIL" if fails else "PASS"
        print(f"[{verdict}] {os.path.basename(path)}")
        for f in fails:
            print(f"    - {f}")
        for n in notes:
            print(f"    note: {n}")
        if fails:
            total_fail += 1

    print(f"\n{len(files)} file(s) checked — {len(files) - total_fail} pass, {total_fail} fail")
    return 1 if total_fail else 0


if __name__ == "__main__":
    sys.exit(main())
