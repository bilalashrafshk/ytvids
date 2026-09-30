#!/usr/bin/env python3
import os
import re
import subprocess
import sys
import time
import shutil

WORKSPACE_ROOT = '/Users/bilalashraf/YT Videos'
REMOTION_DIR = os.path.join(WORKSPACE_ROOT, 'remotion')
SPECS_FILE = os.path.join(WORKSPACE_ROOT, 'videos/04-what-if-humans-live-to-150/10_REMOTION_SPECS.md')
ASSETS_DIR = os.path.join(WORKSPACE_ROOT, 'videos/04-what-if-humans-live-to-150/assets/remotion')

os.makedirs(ASSETS_DIR, exist_ok=True)
os.makedirs(os.path.join(REMOTION_DIR, 'out/ep04'), exist_ok=True)

with open(SPECS_FILE, 'r') as f:
    text = f.read()

cmds = re.findall(r'npx remotion render [^\n]+', text)
total = len(cmds)
print(f"Loaded {total} Remotion render commands from {SPECS_FILE}")

success_count = 0
failed = []

start_total_time = time.time()

for idx, cmd in enumerate(cmds, 1):
    parts = cmd.split()
    comp = parts[4]
    out_rel = parts[5]
    out_file = os.path.join(REMOTION_DIR, out_rel)
    
    # Check if already rendered and valid
    if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
        print(f"[{idx:02d}/{total:02d}] ALREADY EXISTS: {out_rel} ({os.path.getsize(out_file):,} bytes)")
        # Copy to assets dir
        dest = os.path.join(ASSETS_DIR, os.path.basename(out_file))
        shutil.copy2(out_file, dest)
        success_count += 1
        continue

    print(f"\n[{idx:02d}/{total:02d}] RENDERING: {comp} -> {out_rel}")
    t0 = time.time()
    
    # Execute in REMOTION_DIR with arm64 native arch
    full_cmd = f"arch -arm64 {cmd}"
    res = subprocess.run(full_cmd, shell=True, cwd=REMOTION_DIR, capture_output=True, text=True)
    dt = time.time() - t0
    
    if res.returncode == 0 and os.path.exists(out_file) and os.path.getsize(out_file) > 0:
        sz = os.path.getsize(out_file)
        print(f"[{idx:02d}/{total:02d}] PASS ({dt:.1f}s, {sz:,} bytes): {out_rel}")
        # Copy to assets dir
        dest = os.path.join(ASSETS_DIR, os.path.basename(out_file))
        shutil.copy2(out_file, dest)
        success_count += 1
    else:
        print(f"[{idx:02d}/{total:02d}] FAIL ({dt:.1f}s): {cmd}")
        print("STDERR:\n", res.stderr)
        print("STDOUT:\n", res.stdout)
        failed.append((idx, comp, cmd, res.stderr))

total_dt = time.time() - start_total_time
print("\n" + "="*60)
print(f"RENDER COMPLETE: {success_count}/{total} successful in {total_dt:.1f}s")
if failed:
    print(f"FAILED ({len(failed)}):")
    for idx, comp, cmd, err in failed:
        print(f"  #{idx} {comp}: {err[:200]}")
    sys.exit(1)
else:
    print("ALL REMOTION COMPOSITIONS RENDERED SUCCESSFULLY!")
print("="*60)
