#!/usr/bin/env python3
"""
Shared still-upscaling routine (all channels). 2x AI upscale of an episode's generated stills with
Real-ESRGAN x4plus_anime_6B (the illustration model Upscayl uses): runs 4x on tiles, reduces to 2x with Lanczos.
Flat-vector, cel-shaded stills come out with crisp linework and clean small text; photo-real models are not used.

    bash scripts/setup_upscaler.sh                      # once per machine
    python3 scripts/upscale_stills.py videos/<episode>  # per episode, after the stills are generated

Reads   videos/<episode>/assets/regenerated/  first, then  assets/AI Stills + Vids/   (regenerated wins);
        or the folders you give with --src (repeatable, first wins). File names: NNN_slug.png[_timestamp.jpg] or plain NNN_slug.png/.jpg
Writes  videos/<episode>/assets/upscaled/<NNN_slug>.png        (name = the still's beat filename)
Skips   thumbnails (000_thumbnail*), character references (ref_char*), anything matching a line in
        <episode>/assets/upscale_skip.txt (regular expressions, e.g. transparent cutouts), and finished files.
Options --only TEXT   only names containing TEXT      --force   redo finished files
        --dest DIR    write somewhere else (tests)    --scale N  output scale, default 2
A watchdog restarts the worker if the GPU stalls (seen once: ~3 minutes with no output); finished files are skipped,
so restarts lose nothing. The asset builders (scripts/prepare_*_assets.py) prefer assets/upscaled/ when it exists.
"""
import argparse, os, re, subprocess, sys, time

HOME = os.environ.get("FC_UPSCALER_DIR", os.path.expanduser("~/.cache/financecraft/upscaler"))
VENV_PY = os.path.join(HOME, "venv/bin/python")
WEIGHTS = os.path.join(HOME, "RealESRGAN_x4plus_anime_6B.pth")
# 040_shopper_checkout.png_2026....jpg (generator download)  or  040_shopper_checkout.png / .jpg (plain)
NAME = re.compile(r"^(?P<base>\d+_[A-Za-z0-9_\-]+)\.(?:png|jpg|jpeg)(?:_\d+\.(?:jpg|jpeg|png))?$")
DEFAULT_SKIP = [r"^000_thumbnail", r"^ref_char"]
STALL_SECONDS = 150


def collect(ep, only, skip_extra, src_dirs=None):
    skip = [re.compile(p) for p in DEFAULT_SKIP + skip_extra]
    dirs = list(src_dirs) if src_dirs else [os.path.join(ep, "assets/regenerated"), os.path.join(ep, "assets/AI Stills + Vids")]
    found = {}                                            # base -> path; earlier directories win
    for d in dirs:
        if not os.path.isdir(d):
            continue
        for f in sorted(os.listdir(d)):
            m = NAME.match(f)
            if not m:
                continue
            b = m.group("base") + ".png"
            if b in found or any(s.search(b) for s in skip) or (only and only not in b):
                continue
            found[b] = os.path.join(d, f)
    return sorted(found.items(), key=lambda kv: int(kv[0].split("_")[0]))


def worker(args):
    import numpy as np, torch
    from PIL import Image
    from spandrel import ModelLoader
    dev = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
    model = ModelLoader().load_from_file(WEIGHTS).to(dev).eval()
    tile, pad, k = 320, 24, 4

    def up(im):
        w, h = im.size
        x = torch.from_numpy(np.asarray(im).astype(np.float32) / 255.0).permute(2, 0, 1).unsqueeze(0)
        out = torch.zeros(1, 3, h * k, w * k)
        with torch.no_grad():
            for y0 in range(0, h, tile):
                for x0 in range(0, w, tile):
                    ya, yb = max(0, y0 - pad), min(h, y0 + tile + pad)
                    xa, xb = max(0, x0 - pad), min(w, x0 + tile + pad)
                    t = model(x[:, :, ya:yb, xa:xb].to(dev)).clamp(0, 1).cpu()
                    ty, tx = (y0 - ya) * k, (x0 - xa) * k
                    hh, ww = min(tile, h - y0) * k, min(tile, w - x0) * k
                    out[:, :, y0 * k:y0 * k + hh, x0 * k:x0 * k + ww] = t[:, :, ty:ty + hh, tx:tx + ww]
        big = Image.fromarray((out[0].permute(1, 2, 0).numpy() * 255).round().astype(np.uint8))
        return big.resize((w * args.scale, h * args.scale), Image.LANCZOS)

    ep = args.episode
    dest = args.dest or os.path.join(ep, "assets/upscaled")
    os.makedirs(dest, exist_ok=True)
    skip_file = os.path.join(ep, "assets/upscale_skip.txt")
    extra = [l.strip() for l in open(skip_file)] if os.path.exists(skip_file) else []
    items = collect(ep, args.only, [e for e in extra if e and not e.startswith("#")], args.src)
    t0 = time.time()
    for i, (base, src) in enumerate(items, 1):
        out = os.path.join(dest, base)
        if os.path.exists(out) and not args.force:
            continue
        up(Image.open(src).convert("RGB")).save(out)
        print("[%d/%d] %s (%.0fs)" % (i, len(items), base, time.time() - t0), flush=True)
    print("finished", flush=True)


def skip_list(ep):
    f = os.path.join(ep, "assets/upscale_skip.txt")
    return [l.strip() for l in open(f) if l.strip() and not l.startswith("#")] if os.path.exists(f) else []


def supervise(args):
    if args.list:                                   # dry run: no model, no install
        ep = os.path.realpath(args.episode)
        items = collect(ep, args.only, skip_list(ep), args.src)
        done = set(os.listdir(os.path.join(ep, "assets/upscaled"))) if os.path.isdir(os.path.join(ep, "assets/upscaled")) else set()
        todo = [b for b, _ in items if b not in done or args.force]
        print("%d stills found, %d would be upscaled (%d already done)" % (len(items), len(todo), len(items) - len(todo)))
        for b, p in items[:6]:
            print("   %-44s <- %s" % (b, os.path.relpath(p, ep)))
        return 0
    if not (os.path.exists(VENV_PY) and os.path.exists(WEIGHTS)):
        sys.exit("The upscaler is not set up. Run once:  bash scripts/setup_upscaler.sh")
    ep = os.path.realpath(args.episode)
    items = collect(ep, args.only, skip_list(ep), args.src)
    print("%d stills found for %s" % (len(items), ep), flush=True)
    cmd = [VENV_PY, os.path.abspath(__file__), "--worker", ep, "--scale", str(args.scale)]
    if args.only: cmd += ["--only", args.only]
    for d in args.src or []: cmd += ["--src", os.path.realpath(d)]
    if args.force: cmd += ["--force"]
    if args.dest: cmd += ["--dest", os.path.realpath(args.dest)]
    restarts = 0
    while True:
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
        last = time.time(); done = False
        import selectors
        sel = selectors.DefaultSelector(); sel.register(p.stdout, selectors.EVENT_READ)
        while p.poll() is None:
            if sel.select(timeout=5):
                line = p.stdout.readline()
                if line:
                    last = time.time(); print(line.rstrip(), flush=True)
                    if line.startswith("finished"): done = True
            elif time.time() - last > STALL_SECONDS:
                print("no output for %d s: the GPU stalled, restarting (finished files are skipped)" % STALL_SECONDS, flush=True)
                p.kill(); break
        if done or p.returncode == 0:
            return 0
        if p.returncode not in (None, -9):
            print("worker exited with code", p.returncode, flush=True)
            return p.returncode or 1
        restarts += 1
        if restarts > 6:
            print("too many restarts"); return 1
        args.force = False; cmd = [c for c in cmd if c != "--force"]


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("episode")
    ap.add_argument("--only"); ap.add_argument("--force", action="store_true"); ap.add_argument("--dest")
    ap.add_argument("--scale", type=int, default=2); ap.add_argument("--worker", action="store_true")
    ap.add_argument("--src", action="append", help="folder with the generated stills (repeatable; first wins). Default: assets/regenerated, then assets/AI Stills + Vids")
    ap.add_argument("--list", action="store_true", help="dry run: list what would be upscaled, do nothing else")
    a = ap.parse_args()
    if a.worker:
        worker(a)
    else:
        sys.exit(supervise(a))
