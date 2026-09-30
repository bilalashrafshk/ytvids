#!/usr/bin/env python3
"""
Render the episode 05 Remotion graphics listed in 10_REMOTION_SPECS.md.

    python3 scripts/render_ep05.py            # render everything that is ready
    python3 scripts/render_ep05.py Ep05PriceCard-key-fee   # only compositions whose id contains this text

Skips (and says so) the three signature cinematics until their feeder plates from Batch 1 exist in
remotion/public/ep05/ (140_feeder_01..08.png, 680_feeder_01..04.png, 2070_feeder_01.png).
Copies finished renders straight into videos/05-hdmi-monopoly/assets/capcut_ready/remotion/ (the only copy the draft uses).
"""
import os, re, shutil, subprocess, sys, time

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
REMOTION = os.path.join(ROOT, "remotion")
SPECS = os.path.join(ROOT, "videos/05-hdmi-monopoly/10_REMOTION_SPECS.md")
DEST = os.path.join(ROOT, "videos/05-hdmi-monopoly/assets/capcut_ready/remotion")
os.makedirs(DEST, exist_ok=True)
os.makedirs(os.path.join(REMOTION, "out/ep05"), exist_ok=True)

NEEDS = {
    "Ep05WhipZoom": ["140_feeder_%02d.png" % i for i in range(1, 9)],
    "Ep05Flywheel": ["680_feeder_%02d.png" % i for i in range(1, 5)],
    "Ep05PortalTunnel": ["2070_feeder_01.png"],
}
flt = sys.argv[1] if len(sys.argv) > 1 else None
cmds = re.findall(r"npx remotion render [^\n]+", open(SPECS).read())
ok, skipped, failed = 0, [], []
for i, cmd in enumerate(cmds, 1):
    parts = cmd.split()
    comp, out_rel = parts[4], parts[5]
    if flt and flt not in comp:
        continue
    missing = [f for f in NEEDS.get(comp, []) if not os.path.exists(os.path.join(REMOTION, "public/ep05", f))]
    if missing:
        skipped.append((comp, missing[0] + (" and %d more" % (len(missing) - 1) if len(missing) > 1 else "")))
        print("[%02d/%02d] SKIP %s (feeder plates missing: %s ...)" % (i, len(cmds), comp, missing[0]))
        continue
    out = os.path.join(REMOTION, out_rel)
    t0 = time.time()
    r = subprocess.run("arch -arm64 " + cmd, shell=True, cwd=REMOTION, capture_output=True, text=True)
    if r.returncode == 0 and os.path.exists(out) and os.path.getsize(out) > 1000:
        shutil.copy2(out, os.path.join(DEST, os.path.basename(out)))
        ok += 1
        print("[%02d/%02d] PASS %.0fs %s" % (i, len(cmds), time.time() - t0, out_rel))
    else:
        failed.append(comp)
        print("[%02d/%02d] FAIL %s\n%s" % (i, len(cmds), cmd, r.stderr[-600:]))
print("\nrendered %d, skipped %d, failed %d" % (ok, len(skipped), len(failed)))
sys.exit(1 if failed else 0)
