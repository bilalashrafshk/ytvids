---
name: 3d-flyover
description: Create smooth, deterministic Remotion flyover videos of real geography with CesiumJS. Use for cinematic aerial movement through landscapes, mountains, coastlines, cities, or landmarks. Selects MapTiler satellite-draped terrain for landscapes and Google Photorealistic 3D Tiles for cities, then rounds sparse camera routes into continuous swerving flight paths.
---

# 3D flyovers

Use CesiumJS to render the globe or 3D tiles. Use Remotion to control the camera, settle streamed
tiles, capture deterministic frames, and encode the video.

## Choose the mode

| Mode | Data | Use for |
| --- | --- | --- |
| `landscape` | MapTiler `terrain-quantized-mesh-v2` + `satellite-v2` | Mountains, gorges, rivers, coastlines and rural routes |
| `city` | Google Photorealistic 3D Tiles | Cities, architecture and recognizable landmarks |

Do not use footprint extrusions for city flyovers. They produce crude building blocks rather than
textured architecture.

## Credentials

For `landscape`, set:
```text
REMOTION_MAPTILER_KEY=...
```
Create a MapTiler key at https://cloud.maptiler.com/account/keys/.

For `city`, set:
```text
REMOTION_GOOGLE_MAPS_API_KEY=...
```
Create a billing-enabled Google Map Tiles API key.

## Build the flight

1. Supply the camera route as `[longitude, latitude][]`. Use only meaningful control points; do not
   hand-author dozens of tiny corrections.
2. Leave `pathSmoothingPasses={3}` initially. The component applies repeated Chaikin corner cutting,
   turning straight-then-corner input into a continuous swerve.
3. Set absolute camera altitudes for the location. City cameras normally fly lower than landscape cameras.
4. Render a middle-frame still before rendering the full video.

## Camera behavior

Walk the smoothed curve by arc length for constant ground speed. Aim at a real point farther along
the curve rather than its next vertex. Derive roll from the change in look-ahead bearing so the
camera banks into a turn instead of twitching left and right.

## Render

```bash
npx remotion still src/index.ts <Comp> out.png --frame=N --gl=angle --timeout=180000
npx remotion render src/index.ts <Comp> out.mp4 --gl=angle --concurrency=1 --timeout=180000
```

Keep these mechanics:
- Set `viewer.useDefaultRenderLoop = false`.
- Call `viewer.render()`, never `scene.render()`, while settling.
- Use `preserveDrawingBuffer: true`.
- Gate initialization and every frame with `delayRender`.
- Settle landscapes on `globe.tilesLoaded` and cities on `tileset.tilesLoaded`.
- Keep all provider attribution visible.
