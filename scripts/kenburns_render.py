#!/usr/bin/env python3
"""
Smooth Ken Burns renderer (all channels). Replaces ffmpeg zoompan, which snaps every frame's crop window to whole pixels
and centres it with the PREVIOUS frame's zoom, so slow zooms wobble by a pixel from frame to frame.

Here each frame's crop rectangle is computed in floating point and resampled straight from the still with an affine warp
(sub-pixel exact), with a gentle ease at both ends. Frames are piped to ffmpeg for the H.264 encode.

    ~/opt/anaconda3/bin/python scripts/kenburns_render.py STILL OUT.mp4 SECONDS MOTION [--fps 30]

MOTION is 0..4: 0 push in, 1 pull out, 2 pan left to right, 3 pan right to left, 4 push in with a low framing.
"""
import subprocess, sys
import cv2
import numpy as np

W, H = 1920, 1080


def smooth(t):
    return t * t * (3 - 2 * t)          # smoothstep: no velocity jump at the start or end of the move


def motion(v, t):
    """Return (zoom, cx, cy) with cx/cy as 0..1 fractions of the free travel, for progress t in 0..1."""
    e = smooth(t)
    if v == 0:
        return 1 + 0.08 * e, 0.5, 0.5
    if v == 1:
        return 1.08 - 0.08 * e, 0.5, 0.5
    if v == 2:
        return 1.06, e, 0.5
    if v == 3:
        return 1.06, 1 - e, 0.5
    return 1 + 0.07 * e, 0.5, 0.6


def render(still, out, seconds, v, fps=30, crf=16):
    img = cv2.imread(still, cv2.IMREAD_COLOR)
    if img is None:
        raise SystemExit("cannot read " + still)
    h, w = img.shape[:2]
    cw = min(w, int(h * 16 / 9))          # centre-crop to 16:9 first, as the old filter did
    x0 = (w - cw) // 2
    img = img[:, x0:x0 + cw]
    h, w = img.shape[:2]
    n = max(1, round(seconds * fps))
    ff = subprocess.Popen(
        ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}", "-r", str(fps),
         "-i", "-", "-vf", "format=yuv420p", "-c:v", "libx264", "-crf", str(crf), "-preset", "medium", "-g", "15", out],
        stdin=subprocess.PIPE)
    for i in range(n):
        t = i / max(1, n - 1)
        z, fx, fy = motion(v, t)
        vw, vh = w / z, h / z                       # visible window, float
        cx = vw / 2 + (w - vw) * fx if v in (2, 3) else w / 2
        cy = vh / 2 + (h - vh) * fy if v == 4 else h / 2
        s = W / vw                                   # output pixels per source pixel
        M = np.array([[s, 0, -(cx - vw / 2) * s], [0, s, -(cy - vh / 2) * s]], dtype=np.float64)
        # INTER_AREA is not available in warpAffine; the source is >= 1.4x the output width, so Lanczos is safe here
        frame = cv2.warpAffine(img, M, (W, H), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_REPLICATE)
        ff.stdin.write(frame.tobytes())
    ff.stdin.close()
    if ff.wait() != 0:
        raise SystemExit("ffmpeg failed")


if __name__ == "__main__":
    a = sys.argv[1:]
    fps = 30
    if "--fps" in a:
        i = a.index("--fps"); fps = int(a[i + 1]); del a[i:i + 2]
    render(a[0], a[1], float(a[2]), int(a[3]), fps)
