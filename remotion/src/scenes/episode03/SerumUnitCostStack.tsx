import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import serumBgImg from '../../assets/episode03/046_serum_bottle_workbench_bg.jpg';
import { TOKENS } from '../../tokens';

export const SerumUnitCostStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D push-in)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.055]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 14], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [6, 18], [0, 1], { extrapolateRight: 'clamp' });
  const cardSlide = interpolate(frame, [6, 18], [24, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. STAGED UNIT COST BLOCKS (Physical building blocks)
  // -------------------------------------------------------------
  // Block 1: Glass Bottle ($1.10) - arrives frames 12-28
  const p1 = interpolate(frame, [12, 28], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Block 2: Serum Formula ($0.40) - arrives frames 38-54
  const p2 = interpolate(frame, [38, 54], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Block 3: Ocean Shipping ($0.85) - arrives frames 64-80
  const p3 = interpolate(frame, [64, 80], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Running total counter calculation
  const totalCost = (1.10 * p1) + (0.40 * p2) + (0.85 * p3);

  // Total callout highlight pulse after all 3 lock in (frame 82+)
  const allLocked = frame >= 82;
  const lockedPulse = allLocked
    ? (Math.sin((frame - 82) * 0.25) + 1) / 2
    : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Workbench Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={serumBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette to preserve maximum text legibility */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.58) 0%, rgba(15, 20, 28, 0.92) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: CLEAN KINETIC UNIT COST STACK (Strict 4-Label Max)
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
              color: TOKENS.colors.emerald,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Cosmetic Unit Economics
          </div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Physical Product Cost
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: Cosmetic Manufacturing Bill of Materials (Shenzhen to Long Beach)
          </div>
        </div>

        {/* LABEL 3: Hero Metric Stack Card (Numbers arrive alone, Single Semantic Accent) */}
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
              border: `2px solid ${allLocked ? TOKENS.colors.emerald : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '36px 54px',
              boxShadow: allLocked
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${12 + lockedPulse * 14}px ${TOKENS.colors.emerald}40`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            {/* 3 Step Building Blocks Horizontal Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 20,
              }}
            >
              {/* Step 1: Glass Bottle */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: `1.5px solid ${p1 > 0.9 ? TOKENS.colors.emerald : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: 12,
                  padding: '20px 24px',
                  opacity: p1,
                  transform: `translateY(${(1 - p1) * 16}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  1. Glass Bottle
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 40,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  $1.10
                </div>
              </div>

              {/* Step 2: Serum Formula */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: `1.5px solid ${p2 > 0.9 ? TOKENS.colors.emerald : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: 12,
                  padding: '20px 24px',
                  opacity: p2,
                  transform: `translateY(${(1 - p2) * 16}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  2. Serum Formula
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 40,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  $0.40
                </div>
              </div>

              {/* Step 3: Ocean Shipping */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: `1.5px solid ${p3 > 0.9 ? TOKENS.colors.emerald : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: 12,
                  padding: '20px 24px',
                  opacity: p3,
                  transform: `translateY(${(1 - p3) * 16}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  3. Ocean Shipping
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 40,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  $0.85
                </div>
              </div>
            </div>

            {/* Total Summary Banner inside Card */}
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: `1.5px solid ${TOKENS.colors.emerald}50`,
                borderRadius: 12,
                padding: '18px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: TOKENS.colors.emerald,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Total Landed Physical Cost
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: TOKENS.colors.textMuted,
                    marginTop: 3,
                  }}
                >
                  Glass bottle + active serum + ocean container freight
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 54,
                  fontWeight: 900,
                  color: TOKENS.colors.emerald,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                ${totalCost.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid rgba(255, 255, 255, 0.12)`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            “The bottle cost $1.10. The serum cost $0.40. The ocean freight was $0.85.”
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.emerald,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            PHYSICAL SUM: $2.35
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
