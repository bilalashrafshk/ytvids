import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import blackoutDeskImg from '../../assets/episode03/002_social_blackout_screens_bg.jpg';
import { TOKENS } from '../../tokens';

export const HypotheticalScenarioWatermark: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 84 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.05]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -12]);

  // Entrance animations
  const badgeSlide = interpolate(frame, [0, 18], [-40, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });
  const badgeOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const cardSlide = interpolate(frame, [8, 26], [-30, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cardOpacity = interpolate(frame, [8, 26], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bannerSlide = interpolate(frame, [16, 32], [20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bannerOpacity = interpolate(frame, [16, 32], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Beacon pulse
  const pulse = (Math.sin(frame * 0.25) + 1) / 2;

  // Staggered node status entries
  const row1Opacity = interpolate(frame, [18, 24], [0, 1], { extrapolateRight: 'clamp' });
  const row2Opacity = interpolate(frame, [25, 31], [0, 1], { extrapolateRight: 'clamp' });
  const row3Opacity = interpolate(frame, [32, 38], [0, 1], { extrapolateRight: 'clamp' });
  const row4Opacity = interpolate(frame, [39, 45], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (High-Res Documentary Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={blackoutDeskImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette and contrast grade */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 45%, rgba(15, 20, 28, 0.4) 0%, rgba(15, 20, 28, 0.85) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC HUD & FORENSIC OBSERVATION CARDS
          ------------------------------------------------------------- */}
      {/* Top Right: POV Macro Simulation Pill Badge */}
      <div
        style={{
          position: 'absolute',
          top: 75,
          right: 75,
          transform: `translateY(${badgeSlide}px)`,
          opacity: badgeOpacity,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: `1.5px solid ${TOKENS.colors.amber}`,
            borderRadius: 8,
            padding: '12px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: TOKENS.colors.crimson,
              boxShadow: `0 0 ${10 + pulse * 12}px ${TOKENS.colors.crimson}`,
            }}
          />
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 16,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.12em',
            }}
          >
            HYPOTHETICAL SCENARIO • POV MACRO SIMULATION
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.amber,
            letterSpacing: '0.1em',
            backgroundColor: 'rgba(15, 20, 28, 0.88)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '6px 14px',
            borderRadius: 6,
            backdropFilter: 'blur(12px)',
          }}
        >
          <span>GLOBAL BGP FEEDS: STATUS OFFLINE</span>
          <span style={{ color: TOKENS.colors.textMuted }}>|</span>
          <span style={{ color: TOKENS.colors.crimson, fontWeight: 700 }}>PEER LOSS: 100%</span>
        </div>
      </div>

      {/* Top Left: Outage Observational Matrix Card */}
      <div
        style={{
          position: 'absolute',
          top: 75,
          left: 75,
          transform: `translateX(${cardSlide}px)`,
          opacity: cardOpacity,
          width: 520,
          backgroundColor: 'rgba(15, 20, 28, 0.92)',
          border: `1px solid ${TOKENS.colors.borderCard}40`,
          borderLeft: `4px solid ${TOKENS.colors.crimson}`,
          borderRadius: 8,
          padding: '24px 28px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
          backdropFilter: 'blur(16px)',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            fontWeight: 800,
            color: TOKENS.colors.crimson,
            letterSpacing: '0.15em',
            marginBottom: 4,
          }}
        >
          INCIDENT TELEMETRY • CRITICAL INFRASTRUCTURE
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Global Transit Route Collapse
        </h2>
        <div
          style={{
            fontSize: 12,
            color: TOKENS.colors.textMuted,
            marginTop: 4,
            marginBottom: 16,
          }}
        >
          Source: NetBlocks Global BGP Observatory • Epoch T+00:00:00
        </div>

        {/* Telemetry Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div
            style={{
              opacity: row1Opacity,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              padding: '8px 12px',
              borderRadius: 4,
              borderLeft: `3px solid ${TOKENS.colors.crimson}`,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>
              META AS32934 (IG / FB / WA)
            </span>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
                color: TOKENS.colors.crimson,
              }}
            >
              BGP WITHDRAWN
            </span>
          </div>

          <div
            style={{
              opacity: row2Opacity,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              padding: '8px 12px',
              borderRadius: 4,
              borderLeft: `3px solid ${TOKENS.colors.crimson}`,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>
              BYTEDANCE AS138699 (TIKTOK)
            </span>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
                color: TOKENS.colors.crimson,
              }}
            >
              UNREACHABLE
            </span>
          </div>

          <div
            style={{
              opacity: row3Opacity,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              padding: '8px 12px',
              borderRadius: 4,
              borderLeft: `3px solid ${TOKENS.colors.crimson}`,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>
              ALPHABET AS15169 (YT ADS/FEED)
            </span>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
                color: TOKENS.colors.crimson,
              }}
            >
              AUCTION HALTED
            </span>
          </div>

          <div
            style={{
              opacity: row4Opacity,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              padding: '8px 12px',
              borderRadius: 4,
              borderLeft: `3px solid ${TOKENS.colors.crimson}`,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>
              X CORP AS13414 (REALTIME API)
            </span>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
                color: TOKENS.colors.crimson,
              }}
            >
              CONN REFUSED
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Center: Spoken Voiceover Thought Anchor */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: `translateX(-50%) translateY(${bannerSlide}px)`,
          opacity: bannerOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderBottom: `3px solid ${TOKENS.colors.crimson}`,
            borderRadius: 8,
            padding: '16px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 12,
              fontWeight: 800,
              color: TOKENS.colors.amber,
              letterSpacing: '0.12em',
              paddingRight: 16,
              borderRight: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            SITUATION REPORT
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            “Every major social feed is dead.”
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: EDITORIAL HUD & ANAMORPHIC LETTERBOXING (55px Bars)
          ------------------------------------------------------------- */}
      {/* Top Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.15em',
          }}
        >
          FINANCECRAFT DISPATCH // MACRO ECONOMIC WAR ROOM
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.amber,
            letterSpacing: '0.1em',
          }}
        >
          SIMULATION DAY 00 // T+00:00:00
        </div>
      </div>

      {/* Bottom Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          CONFIDENTIAL OBSERVATIONAL BRIEF // FOR CASE STUDY ANALYSIS ONLY
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          BGP STATUS: ZERO ROUTED TRAFFIC
        </div>
      </div>
    </AbsoluteFill>
  );
};
