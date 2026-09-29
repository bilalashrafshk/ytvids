#!/usr/bin/env python3
"""
Channel isolation verifier.

The engine is shared; each channel is a profile (channels/README.md). The
Clean-Room rule says channels never borrow each other's characters, palette,
thumbnails or episode files. Prose rules get forgotten, so this checks them
mechanically:

  1. REGISTRY   every channels/<name>/CHANNEL.md is listed in channels/README.md
                and in 00-ROUTER.md STEP 0, and names its episode folder.
  2. OWNERSHIP  every folder under videos/ and every Remotion source file has
                exactly one owning channel, decided by its location. Unknown
                locations fail instead of being silently shared.
  3. IDENTITY   a channel's own files (episodes, Remotion code, theme) do not
                contain another channel's identity terms (names, characters).
  4. IMPORTS    Remotion code only imports its own channel's theme/components
                (or the shared, channel-neutral ones), never another channel's.
  5. THEMES     each theme file only defines its own channel's palette
                (no theme imports another theme) and no two channels share an
                accent hex.

    python3 check_channel_isolation.py            # whole repo
    python3 check_channel_isolation.py -v         # also list what was checked

Exit code 0 = clean, 1 = one or more violations.

Add a channel by adding one entry to CHANNELS below (and its profile).
NOT covered: visual similarity of generated images (needs eyes, not source).
"""

import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))

# Ownership is decided by location. `identity` terms are what must NOT appear
# in any *other* channel's files. Keep them specific: names and characters,
# not generic words.
CHANNELS = {
    "financecraft": {
        "episode_dirs": r"^videos/(\d\d-[^/]+|_template)$",
        "remotion": [r"^remotion/src/scenes/", r"^remotion/src/tokens\.ts$"],
        "theme": "remotion/src/tokens.ts",
        "identity": [r"FinanceCraft", r"HYPOTHETICAL SCENARIO"],
    },
    "raahim": {
        "episode_dirs": r"^videos/raahim(/[^/]+)?$",
        "remotion": [r"^remotion/src/channels/raahim/", r"^remotion/src/themes/raahim\.ts$"],
        "theme": "remotion/src/themes/raahim.ts",
        "identity": [r"\bRaahim\b", r"Mid-Century Deadpan", r"filmstrip"],
    },
    "its-probably-nothing": {
        "episode_dirs": r"^videos/its-probably-nothing(/[^/]+)?$",
        "remotion": [r"^remotion/src/channels/its-probably-nothing/",
                     r"^remotion/src/themes/its-probably-nothing\.ts$"],
        "theme": "remotion/src/themes/its-probably-nothing.ts",
        "identity": [r"Dennis Fine", r"It'?s Probably Nothing"],
    },
}

# Files that may legitimately name several channels (the shared engine itself).
SHARED_OK = re.compile(
    r"^(00-ROUTER\.md|README\.md|IDEA_GATE\.md|SKELETON_LIBRARY\.md|check_.*\.py|gate_.*\.py|"
    r"channels/README\.md|channels/[^/]+/(CHANNEL|CONCEPT|STANDING_ASSETS)\.md|"
    r"channels/[^/]+/reference/.*|bible/.*|references/.*|calibration/.*|scripts/.*)$"
)
TEXT_EXT = {".md", ".json", ".txt", ".ts", ".tsx", ".py", ".mjs", ".js", ".srt"}
SKIP_DIRS = {"node_modules", ".git", "__pycache__", "out", "build", "assets", "voiceover",
             "Final Video", "final video", "public"}


def rel(p):
    return os.path.relpath(p, ROOT).replace(os.sep, "/")


def owner_of_path(r):
    """Return channel name owning repo-relative path r, or None if shared/unowned."""
    for name, c in CHANNELS.items():
        for pat in c["remotion"]:
            if re.search(pat, r):
                return name
        parts = r.split("/")
        for depth in (2, 3):
            if len(parts) >= depth and re.match(c["episode_dirs"], "/".join(parts[:depth])):
                return name
    return None


def walk_text_files(top):
    for dirpath, dirnames, filenames in os.walk(top):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for f in filenames:
            if os.path.splitext(f)[1].lower() in TEXT_EXT:
                yield os.path.join(dirpath, f)


def check_registry(fails, notes):
    readme = open(os.path.join(ROOT, "channels/README.md"), encoding="utf-8").read()
    router = open(os.path.join(ROOT, "00-ROUTER.md"), encoding="utf-8").read()
    on_disk = sorted(
        d for d in os.listdir(os.path.join(ROOT, "channels"))
        if os.path.exists(os.path.join(ROOT, "channels", d, "CHANNEL.md"))
    )
    for name in on_disk:
        if name not in CHANNELS:
            fails.append(f"REGISTRY: channels/{name}/ exists but is not in CHANNELS in this script")
        if f"channels/{name}/CHANNEL.md" not in readme:
            fails.append(f"REGISTRY: channels/{name} is missing from the table in channels/README.md")
        prof = open(os.path.join(ROOT, "channels", name, "CHANNEL.md"), encoding="utf-8").read()
        if not re.search(r"Episode folder", prof):
            fails.append(f"REGISTRY: channels/{name}/CHANNEL.md never names its episode folder")
        if not re.search(r"Not inherited|never inherited", prof, re.I) and name != "financecraft":
            fails.append(f"REGISTRY: channels/{name}/CHANNEL.md has no 'Not inherited' list")
    for name in CHANNELS:
        if name not in on_disk:
            fails.append(f"REGISTRY: {name} is in CHANNELS but has no channels/{name}/CHANNEL.md")
    block = router.split("Which channel is this for?")[1].split("```")[0]
    count = len(re.findall(r"^\s+\d\.\s", block, re.M))
    if count != len(on_disk):
        fails.append(f"REGISTRY: 00-ROUTER.md STEP 0 lists {count} channels, channels/ has {len(on_disk)}")
    notes.append(f"registry: {len(on_disk)} channels on disk")


def check_ownership(fails, notes):
    vid = os.path.join(ROOT, "videos")
    n = 0
    for d in sorted(os.listdir(vid)):
        p = os.path.join(vid, d)
        if not os.path.isdir(p):
            continue
        r = f"videos/{d}"
        # A channel folder (videos/raahim, videos/its-probably-nothing) is owned as a whole.
        if d in CHANNELS:
            n += 1
            continue
        if not any(re.match(c["episode_dirs"], r) for c in CHANNELS.values()):
            fails.append(f"OWNERSHIP: {r}/ matches no channel's episode folder pattern")
        n += 1
    notes.append(f"ownership: {n} top-level videos/ folders classified")

    # Remotion sources under src/channels and src/themes must belong to a known channel.
    for pat in ("remotion/src/channels/*", "remotion/src/themes/*"):
        for p in glob.glob(os.path.join(ROOT, pat)):
            r = rel(p)
            if owner_of_path(r + ("/" if os.path.isdir(p) else "")) is None:
                fails.append(f"OWNERSHIP: {r} matches no channel's Remotion pattern")


def check_identity(fails, notes):
    scanned = 0
    for name, c in CHANNELS.items():
        others = [(o, re.compile("|".join(oc["identity"]), re.I))
                  for o, oc in CHANNELS.items() if o != name]
        roots = set()
        for d in sorted(os.listdir(os.path.join(ROOT, "videos"))):
            r = f"videos/{d}"
            if owner_of_path(r) == name or re.match(c["episode_dirs"], r):
                roots.add(os.path.join(ROOT, r))
        for pat in c["remotion"]:
            base = pat.lstrip("^").split("[")[0].rstrip("\\").replace("\\.", ".")
            base = re.sub(r"\\.*$", "", base)
            for cand in glob.glob(os.path.join(ROOT, base + "*")):
                roots.add(cand)
        for top in sorted(roots):
            files = [top] if os.path.isfile(top) else list(walk_text_files(top))
            for f in files:
                r = rel(f)
                if SHARED_OK.match(r):
                    continue
                # A nested channel folder (videos/raahim/...) belongs to that channel,
                # not to the finance NN-slug pattern it might also superficially match.
                if owner_of_path(r) not in (name, None):
                    continue
                try:
                    text = open(f, encoding="utf-8", errors="ignore").read()
                except OSError:
                    continue
                scanned += 1
                for other, rx in others:
                    m = rx.search(text)
                    if m:
                        line = text[:m.start()].count("\n") + 1
                        fails.append(
                            f"IDENTITY: {r}:{line} ({name}) mentions {other}'s identity term "
                            f"'{m.group(0)}'"
                        )
    notes.append(f"identity: {scanned} channel-owned files scanned")


IMPORT_RE = re.compile(r"""from\s+['"]([^'"]+)['"]""")


def check_imports(fails, notes):
    n = 0
    for f in walk_text_files(os.path.join(ROOT, "remotion/src")):
        if not f.endswith((".ts", ".tsx")):
            continue
        r = rel(f)
        owner = owner_of_path(r)
        if owner is None:
            continue  # shared, channel-neutral component
        text = open(f, encoding="utf-8", errors="ignore").read()
        n += 1
        for spec in IMPORT_RE.findall(text):
            if not spec.startswith("."):
                continue
            target = rel(os.path.normpath(os.path.join(os.path.dirname(f), spec)))
            tgt_owner = owner_of_path(target + "/") or owner_of_path(target + ".ts") \
                or owner_of_path(target + ".tsx")
            if tgt_owner and tgt_owner != owner:
                fails.append(f"IMPORTS: {r} ({owner}) imports {spec} which belongs to {tgt_owner}")
    notes.append(f"imports: {n} owned Remotion files checked")


def theme_hexes(path):
    p = os.path.join(ROOT, path)
    if not os.path.exists(p):
        return None
    src = open(p, encoding="utf-8").read()
    return {h.lower() for h in re.findall(r"#[0-9a-fA-F]{6}\b", src)}


def check_themes(fails, notes):
    neutral = {"#ffffff", "#000000"}
    palettes = {}
    for name, c in CHANNELS.items():
        hx = theme_hexes(c["theme"])
        if hx is None:
            notes.append(f"themes: {name} has no theme file yet ({c['theme']}) — not checked")
            continue
        palettes[name] = hx - neutral
        text = open(os.path.join(ROOT, c["theme"]), encoding="utf-8").read()
        for spec in IMPORT_RE.findall(text):
            if "themes/" in spec or spec.endswith("tokens"):
                fails.append(f"THEMES: {c['theme']} imports {spec} — a theme must be self-contained")
    names = sorted(palettes)
    for i, a in enumerate(names):
        for b in names[i + 1:]:
            shared = palettes[a] & palettes[b]
            if shared:
                fails.append(
                    f"THEMES: {a} and {b} both define {sorted(shared)} — identity colours must be distinct"
                )
    notes.append(f"themes: {len(palettes)} theme file(s) compared")


def main():
    verbose = "-v" in sys.argv[1:]
    fails, notes = [], []
    check_registry(fails, notes)
    check_ownership(fails, notes)
    check_identity(fails, notes)
    check_imports(fails, notes)
    check_themes(fails, notes)
    if verbose or fails:
        for n in notes:
            print(f"[info] {n}")
    for f in fails:
        print(f"[FAIL] {f}")
    if fails:
        print(f"\n{len(fails)} violation(s). Channels are mixing — fix before continuing.")
        return 1
    print("channel isolation: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
