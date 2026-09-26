import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import boardroomBgImg from '../../assets/episode03/120_empty_boardroom_checkbook_bg.jpg';
import { TOKENS } from '../../tokens';

export const NegativeEquityWaterfall: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const reveal = (s: number, e: number) => interpolate(frame, [s, e], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D Push-in across 180 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
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

  const footerOpacity = interpolate(frame, [95, 110], [0, 1], { extrapolateRight: 'clamp' });
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
          LAYER 1: PHYSICAL SCENE FOUNDATION (Empty Boardroom / Broken Checkbook)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={boardroomBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.6) 0%, rgba(15, 20, 28, 0.94) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC LIQUIDATION WATERFALL (Strict 4-Label Max, Single Crimson Accent)
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
            Liquidation Math
          </div>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Why Stored Goods Rot on Concrete
          </h1>
          <div style={{ fontSize: 15, color: TOKENS.colors.textMuted, marginTop: 8 }}>
            Source: Warehouse Receivership Cost Reconciliation
          </div>
        </div>

        {/* LABEL 3: Hero Waterfall Card (Line items arrive alone, Single Crimson Accent) */}
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
              border: '2px solid rgba(255, 255, 255, 0.14)',
              borderRadius: 16,
              padding: '28px 36px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 8, opacity: reveal(20, 40) }}>
              <span style={{ color: '#FFFFFF', fontSize: 17 }}>Estimated Salvage Auction Recovery</span>
              <span style={{ color: TOKENS.colors.emerald, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 20, fontWeight: 800 }}>+$850,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 8, opacity: reveal(40, 60) }}>
              <span style={{ color: '#FFFFFF', fontSize: 17 }}>Unpaid Port Demurrage & Electric Tariffs</span>
              <span style={{ color: TOKENS.colors.crimson, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 20, fontWeight: 800 }}>-$680,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 8, opacity: reveal(60, 80) }}>
              <span style={{ color: '#FFFFFF', fontSize: 17 }}>Freight Transport & Trucking Invoices</span>
              <span style={{ color: TOKENS.colors.crimson, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 20, fontWeight: 800 }}>-$520,000</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px 20px',
                backgroundColor: `${TOKENS.colors.crimson}22`,
                border: `2px solid ${TOKENS.colors.crimson}`,
                borderRadius: 8,
                opacity: reveal(80, 95),
                boxShadow: `0 0 ${10 + pulse * 12}px ${TOKENS.colors.crimson}40`,
              }}
            >
              <span style={{ color: '#FFFFFF', fontSize: 19, fontWeight: 800 }}>Net Deficit to Release Cargo</span>
              <span style={{ color: TOKENS.colors.crimson, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 24, fontWeight: 900 }}>-$350,000</span>
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
            Cheaper to abandon inventory to receivership than to pay the dock fees.
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
            NEGATIVE EQUITY
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
