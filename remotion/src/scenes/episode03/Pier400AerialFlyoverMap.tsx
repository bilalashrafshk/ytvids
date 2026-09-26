import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import pier400SatelliteImg from '../../assets/episode03/007_pier_400_aerial_satellite.jpg';
import { TOKENS } from '../../tokens';

export const Pier400AerialFlyoverMap: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic High-Altitude Drone Flyover)
  // -------------------------------------------------------------
  // Smooth continuous push-in and diagonal drift over 210 frames (7.0s)
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(cameraProgress, [0, 1], [1.02, 1.28]);
  const panX = interpolate(cameraProgress, [0, 1], [0, -90]);
  const panY = interpolate(cameraProgress, [0, 1], [0, -60]);

  // Subtle drone vibration / altitude breath
  const droneRoll = Math.sin((frame / 30) * Math.PI * 0.8) * 0.4; // 0.4 deg gentle bank
  const dronePitch = Math.cos((frame / 30) * Math.PI * 0.8) * 2.0; // 2px vertical drift

  // -------------------------------------------------------------
  // 2. GEOSPATIAL TARGET ANIMATION (Berth 406 Target Lock)
  // -------------------------------------------------------------
  // Target reticle draws in between frame 20 and 55
  const targetEntrance = interpolate(frame, [20, 50], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulsing beacon on Berth 406
  const pulse = 0.6 + 0.4 * Math.sin((frame / 12) * Math.PI * 2);

  // Radar sweep / highlight ping across Berth 406 (fires at frame 35)
  const pingProgress = interpolate(frame, [35, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const pingOpacity = interpolate(pingProgress, [0, 0.2, 0.8, 1], [0, 0.8, 0.3, 0]);
  const pingScale = interpolate(pingProgress, [0, 1], [0.8, 2.2]);

  // Telemetry HUD card entrance
  const hudCardEntrance = interpolate(frame, [15, 40], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Capacity metric count-up from 0 to 42,000
  const countProgress = interpolate(frame, [40, 90], [0, 1], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const capacityCount = Math.round(countProgress * 42000);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        overflow: 'hidden',
        fontFamily: TOKENS.typography.fontFamilySans,
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1: CINEMATIC AERIAL SATELLITE BASE PLATE                */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: -120,
          transform: `scale(${scale}) translate3d(${panX}px, ${panY + dronePitch}px, 0) rotate(${droneRoll}deg)`,
          transformOrigin: '55% 50%',
        }}
      >
        <Img
          src={pier400SatelliteImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.06) saturate(1.04) brightness(0.96)',
          }}
        />

        {/* ----------------------------------------------------------- */}
        {/* LAYER 2: GEOSPATIAL TARGET OVERLAYS (Moving with Plate)     */}
        {/* ----------------------------------------------------------- */}
        {/* Tactical Target Box over Berth 406 Container Staging Grid */}
        <div
          style={{
            position: 'absolute',
            top: '46%',
            left: '34%',
            width: 320,
            height: 200,
            opacity: targetEntrance,
            transform: `scale(${interpolate(targetEntrance, [0, 1], [1.3, 1])})`,
            pointerEvents: 'none',
          }}
        >
          {/* Pulsing radar wave expanding from target */}
          {frame >= 35 && frame <= 75 && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 240,
                height: 140,
                marginLeft: -120,
                marginTop: -70,
                borderRadius: 8,
                border: `2px solid ${TOKENS.colors.crimson}`,
                transform: `scale(${pingScale})`,
                opacity: pingOpacity,
              }}
            />
          )}

          {/* Tactical Bounding Box with Corner Reticles */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(220, 38, 38, 0.12)',
              border: '1px solid rgba(220, 38, 38, 0.45)',
              boxShadow: '0 0 25px rgba(220, 38, 38, 0.25)',
            }}
          >
            {/* Top-Left Corner Reticle */}
            <div
              style={{
                position: 'absolute',
                top: -2,
                left: -2,
                width: 14,
                height: 14,
                borderTop: `3px solid ${TOKENS.colors.crimson}`,
                borderLeft: `3px solid ${TOKENS.colors.crimson}`,
              }}
            />
            {/* Top-Right Corner Reticle */}
            <div
              style={{
                position: 'absolute',
                top: -2,
                right: -2,
                width: 14,
                height: 14,
                borderTop: `3px solid ${TOKENS.colors.crimson}`,
                borderRight: `3px solid ${TOKENS.colors.crimson}`,
              }}
            />
            {/* Bottom-Left Corner Reticle */}
            <div
              style={{
                position: 'absolute',
                bottom: -2,
                left: -2,
                width: 14,
                height: 14,
                borderBottom: `3px solid ${TOKENS.colors.crimson}`,
                borderLeft: `3px solid ${TOKENS.colors.crimson}`,
              }}
            />
            {/* Bottom-Right Corner Reticle */}
            <div
              style={{
                position: 'absolute',
                bottom: -2,
                right: -2,
                width: 14,
                height: 14,
                borderBottom: `3px solid ${TOKENS.colors.crimson}`,
                borderRight: `3px solid ${TOKENS.colors.crimson}`,
              }}
            />

            {/* Target Label Pin */}
            <div
              style={{
                position: 'absolute',
                top: -34,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: TOKENS.colors.backgroundDark,
                border: `1px solid ${TOKENS.colors.crimson}`,
                padding: '4px 10px',
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: TOKENS.colors.crimson,
                  boxShadow: `0 0 8px ${TOKENS.colors.crimson}`,
                  opacity: pulse,
                }}
              />
              <span
                style={{
                  color: '#ffffff',
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                }}
              >
                BERTH 406 • STRANDED REEFER CORRIDOR
              </span>
            </div>

            {/* Center Crosshair */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 16,
                height: 16,
                marginLeft: -8,
                marginTop: -8,
              }}
            >
              <div style={{ position: 'absolute', top: 7, left: 0, right: 0, height: 2, backgroundColor: 'rgba(255,255,255,0.7)' }} />
              <div style={{ position: 'absolute', left: 7, top: 0, bottom: 0, width: 2, backgroundColor: 'rgba(255,255,255,0.7)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 3: EDITORIAL NEWSROOM HUD & SOURCING (Fixed Screen View) */}
      {/* ------------------------------------------------------------- */}
      {/* Top-Left Geographic Telemetry Badge */}
      <div
        style={{
          position: 'absolute',
          top: 75,
          left: 64,
          opacity: hudCardEntrance,
          transform: `translateY(${interpolate(hudCardEntrance, [0, 1], [-15, 0])}px)`,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(12, 14, 18, 0.90)',
            backdropFilter: 'blur(16px)',
            border: `1px solid rgba(220, 38, 38, 0.65)`,
            padding: '10px 18px',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.55)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: TOKENS.colors.crimson,
              boxShadow: `0 0 10px ${TOKENS.colors.crimson}`,
              opacity: pulse,
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '0.06em',
            }}
          >
            PORT OF LOS ANGELES • PIER 400
          </span>
        </div>
        <div
          style={{
            color: TOKENS.colors.amber,
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.05em',
            paddingLeft: 8,
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          COORDINATES: 33.7292° N, 118.2571° W • TERMINAL ISLAND
        </div>
      </div>

      {/* Top-Right Stacking Capacity Metric Card */}
      <div
        style={{
          position: 'absolute',
          top: 75,
          right: 64,
          opacity: hudCardEntrance,
          transform: `translateY(${interpolate(hudCardEntrance, [0, 1], [-15, 0])}px)`,
          backgroundColor: 'rgba(12, 14, 18, 0.90)',
          backdropFilter: 'blur(16px)',
          padding: '14px 24px',
          borderRadius: 8,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.55)',
          minWidth: 260,
        }}
      >
        <div
          style={{
            color: TOKENS.colors.textMuted,
            fontSize: 11,
            fontWeight: 700,
            fontFamily: TOKENS.typography.fontFamilyMono,
            letterSpacing: '0.08em',
            marginBottom: 4,
          }}
        >
          FACILITY SCALE / HOLDING VOLUME
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 28,
            fontWeight: 900,
            fontFamily: TOKENS.typography.fontFamilyMono,
            letterSpacing: '0.02em',
          }}
        >
          {capacityCount.toLocaleString()} TEU
        </div>
        <div
          style={{
            color: TOKENS.colors.crimson,
            fontSize: 12,
            fontWeight: 800,
            fontFamily: TOKENS.typography.fontFamilyMono,
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>CRITICAL CAPACITY: 100% BLOCKED</span>
        </div>
      </div>

      {/* Bottom Sourcing Citation (Newsroom Evidence Standard) */}
      <div
        style={{
          position: 'absolute',
          bottom: 70,
          left: 64,
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: TOKENS.typography.fontFamilyMono,
          fontSize: 11,
          letterSpacing: '0.06em',
          textShadow: '0 2px 6px rgba(0,0,0,0.9)',
        }}
      >
        SOURCE: PORT OF LOS ANGELES MASTER PLAN • MARINE EXCHANGE OF SOUTHERN CALIFORNIA
      </div>

      {/* Cinematic Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.35) 80%, rgba(0, 0, 0, 0.75) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 2.39:1 Anamorphic Letterbox Bars */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
        }}
      />
    </AbsoluteFill>
  );
};
