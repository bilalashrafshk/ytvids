import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const OhioFarmlandDroneCinematic: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Normalized time: 0 -> 1
  const t = frame / Math.max(1, durationInFrames - 1);

  // -------------------------------------------------------------------------
  // Drone Flight Dynamics: Start a bit slow, then aggressively fast
  // -------------------------------------------------------------------------
  // Starts with a brief gentle drift (~1.2s), then rapidly picks up momentum
  // and rushes deep into the steel monolith.
  const acceleration = interpolate(t, [0, 0.22, 1], [0, 0.07, 1], {
    easing: Easing.bezier(0.42, 0, 0.58, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scale: 1.00 -> 1.65 (dramatic, high-momentum zoom towards the steel frame)
  const scale = 1.0 + acceleration * 0.65;

  // Forward descent: camera pushes forward and lowers altitude towards the mud reflections
  const panX = -acceleration * 55;
  const panY = -acceleration * 45;

  // Subtle natural gimbal sway and banking into the dive
  const swayX = Math.sin(frame * 0.05) * 2.0;
  const swayY = Math.cos(frame * 0.04) * 1.5;
  const roll = Math.sin(frame * 0.035) * 0.3 + acceleration * 0.8;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0B0F14', overflow: 'hidden' }}>
      {/* ── High-Res Artwork with Smooth Cinematic Drone Motion ───────────── */}
      <div
        style={{
          position: 'absolute',
          inset: -60, // ample bleed for large scale & translation
          transform: `scale(${scale}) translate(${panX + swayX}px, ${panY + swayY}px) rotate(${roll}deg)`,
          transformOrigin: '53% 47%', // focal point directly on the steel factory bays
          willChange: 'transform',
        }}
      >
        <Img
          src={staticFile('ohio_factory_cinematic_2x.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── Clean Cinematic Vignette (Zero Useless Overlays) ───────────────── */}
      <AbsoluteFill
        style={{
          pointerEvents: 'none',
          boxShadow: 'inset 0 0 160px rgba(10, 15, 24, 0.7)',
          background:
            'radial-gradient(ellipse at center, rgba(15,23,42,0) 50%, rgba(10,14,22,0.4) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
