import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import capitalBgImg from '../../assets/episode03/052_capital_freeze_desk_bg.jpg';
import { TOKENS } from '../../tokens';

export const FrozenWorkingCapitalCascade: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push-in)
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

  // -------------------------------------------------------------
  // 2. STAGED CASCADE BREAKDOWN (Cascading ledger rows)
  // -------------------------------------------------------------
  // Row 1: Unpaid Customer Store Balances (frames 15-35)
  const p1 = interpolate(frame, [15, 35], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Row 2: Unpaid Packaging Invoices (frames 42-62)
  const p2 = interpolate(frame, [42, 62], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Row 3: Daily Automated Loan Debits (frames 68-88)
  const p3 = interpolate(frame, [68, 88], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Total counter progression (frames 88-120)
  const totalProgress = interpolate(frame, [88, 120], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const totalTrapped = Math.round(2168400 * totalProgress);

  const isComplete = frame >= 120;
  const pulse = isComplete ? (Math.sin((frame - 120) * 0.25) + 1) / 2 : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Financial Desk Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={capitalBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.62) 0%, rgba(15, 20, 28, 0.94) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC FINANCIAL CASCADE (Strict 4-Label Max, Single Semantic Accent)
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
            Supply Chain Financial Breakdown
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
            Trapped Working Capital
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: Logistics & Merchant Working Capital Audit (Day 7 Checkpoint)
          </div>
        </div>

        {/* LABEL 3: Hero Metric Cascade Card (Numbers arrive alone, Single Semantic Accent) */}
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
              border: `2px solid ${isComplete ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '32px 48px',
              boxShadow: isComplete
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${12 + pulse * 14}px ${TOKENS.colors.crimson}40`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Cascading Row 1: Frozen Merchant Balances */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1.5px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 10,
                padding: '16px 24px',
                opacity: p1,
                transform: `translateY(${(1 - p1) * 14}px)`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Frozen Merchant Balances
                </div>
                <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary, marginTop: 2 }}>
                  Trapped across 80 online consumer brands
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 28,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                $1,840,000
              </div>
            </div>

            {/* Cascading Row 2: Unpaid Packaging Invoices */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1.5px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 10,
                padding: '16px 24px',
                opacity: p2,
                transform: `translateY(${(1 - p2) * 14}px)`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Unpaid Supplier Invoices
                </div>
                <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary, marginTop: 2 }}>
                  Cardboard cartons and glass bottle packaging bills overdue
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 28,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                $320,000
              </div>
            </div>

            {/* Cascading Row 3: Automated Daily Loan Debits */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1.5px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 10,
                padding: '16px 24px',
                opacity: p3,
                transform: `translateY(${(1 - p3) * 14}px)`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontWeight: 700,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Daily Automated Bank Debits
                </div>
                <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary, marginTop: 2 }}>
                  Direct loan sweeps debited automatically from checking
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 28,
                  fontWeight: 900,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '-0.02em',
                }}
              >
                -$8,400 / DAY
              </div>
            </div>

            {/* Summary Total Banner */}
            <div
              style={{
                backgroundColor: 'rgba(211, 47, 47, 0.12)',
                border: `1.5px solid ${TOKENS.colors.crimson}`,
                borderRadius: 12,
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 4,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Total Trapped Capital
                </div>
                <div style={{ fontSize: 14, color: TOKENS.colors.textMuted, marginTop: 2 }}>
                  Immobilized working capital across supply network
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 48,
                  fontWeight: 900,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                ${totalTrapped.toLocaleString()}
              </div>
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
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            “Automated bank debits continue withdrawing cash despite zero incoming customer revenue.”
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
            BUFFER DRAINING
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
