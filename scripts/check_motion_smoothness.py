#!/usr/bin/env python3
"""
Motion smoothness check (all channels). Measures what the eye notices as "choppy" instead of guessing.

    ~/opt/anaconda3/bin/python scripts/check_motion_smoothness.py videos/<episode> [--clips DIR] [--kenburns DIR]

(needs OpenCV + NumPy; Anaconda has them)

AI clips   share of REPEATED frames per clip. A 24 fps clip padded to 30 fps by repeating frames repeats every 5th
           frame (20-26%) and judders on any camera move. Motion interpolation brings it to a few percent (the rest are
           the natural holds at the end of a move). Flags a clip above 12% unless it is a mostly static shot.
Ken Burns  tracks a sample of pan/zoom clips against their first frame and reports the stutter, in pixels at the frame
           edge, left after removing a smooth curve. Under about 1 px is invisible; the estimate itself carries ~0.3 px.
Exit 1 if any AI clip is flagged. Judge by an EXPORT, not by CapCut's preview, which can drop frames on a heavy timeline.
"""
import argparse, glob, os, sys
import cv2, numpy as np


def frames(path, size=None, gray=True):
    cap = cv2.VideoCapture(path); out = []
    while True:
        ok, f = cap.read()
        if not ok:
            break
        if size:
            f = cv2.resize(f, size)
        out.append(cv2.cvtColor(f, cv2.COLOR_BGR2GRAY) if gray else f)
    return out


def repeated_share(path):
    fr = [f.astype(np.float32) for f in frames(path, (480, 270))]
    d = np.array([np.abs(b - a).mean() for a, b in zip(fr, fr[1:])])
    if len(d) < 10:
        return len(fr), 0.0, 0.0
    med = float(np.median(d))
    return len(fr), 100.0 * float(np.sum(d < 0.12 * max(med, 0.05))) / len(d), med


def stutter_px(path):
    fr = frames(path)
    orb = cv2.ORB_create(3000); bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    k0, d0 = orb.detectAndCompute(fr[0], None)
    S, TX, TY = [], [], []
    for f in fr:
        k, d = orb.detectAndCompute(f, None)
        m = sorted(bf.match(d0, d), key=lambda x: x.distance)[:600]
        pa = np.float32([k0[x.queryIdx].pt for x in m]); pb = np.float32([k[x.trainIdx].pt for x in m])
        M, _ = cv2.estimateAffinePartial2D(pa, pb, ransacReprojThreshold=1.5)
        S.append(np.hypot(M[0, 0], M[1, 0])); TX.append(M[0, 2]); TY.append(M[1, 2])
    t = np.arange(len(S))
    res = lambda y: np.array(y) - np.polyval(np.polyfit(t, y, 3), t)   # cubic: the eased (smoothstep) moves are cubic, a quadratic reads the ease as stutter
    edge = res(S) * (fr[0].shape[1] / 2)
    return len(fr), (S[-1] - 1) * 100, float(np.sqrt(np.mean(np.square([edge, res(TX), res(TY)]).max(axis=0))))


ap = argparse.ArgumentParser()
ap.add_argument("episode"); ap.add_argument("--clips"); ap.add_argument("--kenburns"); ap.add_argument("--sample", type=int, default=5)
a = ap.parse_args()
clips = a.clips or os.path.join(a.episode, "assets/capcut_ready/clips")
kb = a.kenburns or os.path.join(a.episode, "assets/capcut_ready/kenburns")
bad = 0
print("AI clips (%s)" % clips)
for f in sorted(glob.glob(clips + "/*.mp4"), key=lambda p: int(os.path.basename(p).split("_")[0])):
    n, share, med = repeated_share(f)
    flag = share > 12 and med > 0.15
    bad += flag
    print("  %-30s %4d frames  %4.0f%% repeated %s" % (os.path.basename(f), n, share, "  <-- judder: rebuild with motion interpolation" if flag else ""))
ks = sorted(glob.glob(kb + "/*.mp4"))
if ks:
    print("Ken Burns (%s): %d sampled of %d" % (kb, min(a.sample, len(ks)), len(ks)))
    for f in ks[:: max(1, len(ks) // a.sample)][: a.sample]:
        n, zoom, px = stutter_px(f)
        print("  %-30s %4d frames  zoom %+5.1f%%  stutter %.2f px %s" % (os.path.basename(f), n, zoom, px, "  <-- above 1 px" if px > 1.0 else ""))
print("RESULT:", "%d AI clip(s) flagged" % bad if bad else "no judder found")
sys.exit(1 if bad else 0)
