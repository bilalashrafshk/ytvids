import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import dashboardBgImg from '../../assets/episode03/104_system_collapse_ledger_bg.jpg';
import { TOKENS } from '../../tokens';

export const Day24LedgerCheckpoint: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D Push-in across 165 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.055]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 15], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [6, 18], [0, 1], { extrapolateRight: 'clamp' });
  const cardSlide = interpolate(frame, [6, 18], [24, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });
  const pulse = (Math.sin(frame * 0.25) + 1) / 2;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Red Stamp / System Collapse Ledger)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: 'brightness(0.55) saturate(0.55)',
        }}
      >
        <Img
          src={dashboardBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.8) 0%, rgba(15, 20, 28, 0.97) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC CRISIS DASHBOARD (Strict 4-Label Max, Single Crimson Accent)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 100,
          right: 100,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* LABEL 1 & 2: Header Block (Title + Visible Source directly underneath) */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
          }}
        >
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Balance Sheet Checkpoint • 576 Hours Elapsed
          </div>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Day 24 Systemic Trade Seizure Dashboard
          </h1>
          <div style={{ fontSize: 15, color: TOKENS.colors.textMuted, marginTop: 8 }}>
            Source: Port Authority Receivership & Litigation Filings
          </div>
        </div>

        {/* LABEL 3: Hero Metric Card (Numbers arrive alone, Single Crimson Accent) */}
        <div
          style={{
            transform: `translateY(${cardSlide}px)`,
            opacity: cardOpacity,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `2px solid ${TOKENS.colors.crimson}`,
              borderRadius: 16,
              padding: '32px 44px',
              boxShadow: `0 24px 60px rgba(0,0,0,0.85), 0 0 ${14 + pulse * 14}px ${TOKENS.colors.crimson}40`,
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 12, fontWeight: 800, color: TOKENS.colors.crimson, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Abandoned Cargo Claims
              </div>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 40, fontWeight: 900, color: TOKENS.colors.crimson, marginTop: 8 }}>1,840</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 24 }}>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 12, fontWeight: 700, color: TOKENS.colors.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Detained Truck Chassis
              </div>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 40, fontWeight: 900, color: TOKENS.colors.amber, marginTop: 8 }}>14,200</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 24 }}>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 12, fontWeight: 700, color: TOKENS.colors.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Court Injunctions Filed
              </div>
              <div style={{ fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 40, fontWeight: 900, color: '#FFFFFF', marginTop: 8 }}>412</div>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${TOKENS.colors.crimson}60`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 17, fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            "Importers walk away once demurrage exceeds salvage cargo value."
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            576 HOURS ELAPSED
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: 2.39:1 CINEMATIC ANAMORPHIC LETTERBOX BARS (55px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
          zIndex: 100,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
          zIndex: 100,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
    </AbsoluteFill>
  );
};
