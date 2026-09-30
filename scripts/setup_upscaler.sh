#!/usr/bin/env bash
# One-time setup for the shared still-upscaling routine (scripts/upscale_stills.py).
# Creates a private Python environment with PyTorch and downloads the Real-ESRGAN illustration model.
# Everything lives in ~/.cache/financecraft/upscaler (about 1.1 GB); delete that folder to remove it.
#
#   bash scripts/setup_upscaler.sh
#   PYTHON=/path/to/python3.10 bash scripts/setup_upscaler.sh     # if the default Python has no PyTorch wheels
set -euo pipefail
DIR="${FC_UPSCALER_DIR:-$HOME/.cache/financecraft/upscaler}"
mkdir -p "$DIR"
PY="${PYTHON:-}"
if [ -z "$PY" ]; then
  for c in python3.12 python3.11 python3.10 python3.9 python3; do
    if command -v "$c" >/dev/null 2>&1; then PY="$(command -v "$c")"; break; fi
  done
fi
echo "using Python: $PY ($("$PY" --version 2>&1))"
[ -x "$DIR/venv/bin/python" ] || "$PY" -m venv "$DIR/venv"
"$DIR/venv/bin/pip" install -q --disable-pip-version-check torch torchvision spandrel pillow "numpy<2" packaging
W="$DIR/RealESRGAN_x4plus_anime_6B.pth"
if [ ! -s "$W" ]; then
  curl -fsSL -o "$W" "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth"
fi
"$DIR/venv/bin/python" - <<PY
import torch, spandrel
print("torch", torch.__version__, "| GPU (mps):", torch.backends.mps.is_available(), "| spandrel", spandrel.__version__)
PY
echo "weights: $(ls -la "$W" | awk '{print $5}') bytes"
echo "ready. Run:  python3 scripts/upscale_stills.py videos/<episode>"
