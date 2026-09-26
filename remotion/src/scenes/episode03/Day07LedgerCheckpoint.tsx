import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import ledgerBgImg from '../../assets/episode03/051_day07_warehouse_ledger_bg.jpg';
import { TOKENS } from '../../tokens';

export const Day07LedgerCheckpoint: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Subtle Slow Push-in across 165 frames)
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
  // 2. RUNNING METRIC COUNTERS
  // -------------------------------------------------------------
  // Burn countup ($0 down to -$12,600) from frame 20 to 60
  const burnProgress = interpolate(frame, [20, 60], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const currentBurn = Math.round(12600 * burnProgress);

  // Dispatch collapse (-0% to -91%)
  const dispatchDrop = Math.round(91 * interpolate(frame, [15, 50], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));

  // Trapped pallets countup (0 to 4,200)
  const palletsCount = Math.round(4200 * interpolate(frame, [25, 65], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));

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
          LAYER 1: PHYSICAL SCENE FOUNDATION (Warehouse Office Desk Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={ledgerBgImg}
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
          LAYER 2: KINETIC DEFICIT LEDGER (Strict 4-Label Max, Single Semantic Accent)
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
            Day 7 Checkpoint • 168 Hours Elapsed
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
            Warehouse Operating Deficit
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: Facility Dispatch & Storage Balance Sheet Records
          </div>
        </div>

        {/* LABEL 3: Hero Metric Ledger Card (Numbers arrive alone, Single Semantic Accent) */}
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
              padding: '36px 54px',
              boxShadow: `0 24px 60px rgba(0,0,0,0.85), 0 0 ${14 + pulse * 14}px ${TOKENS.colors.crimson}40`,
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            {/* Primary Hero Metric: Daily Cash Burn */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: 22,
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
                  Daily Operating Loss
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: TOKENS.colors.textMuted,
                    marginTop: 4,
                  }}
                >
                  Fixed rent, utility overhead, and scheduled warehouse labor
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 68,
                  fontWeight: 900,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                -${currentBurn.toLocaleString()}
                <span style={{ fontSize: 22, fontWeight: 700, color: TOKENS.colors.textMuted }}> / DAY</span>
              </div>
            </div>

            {/* 3 Secondary Supporting Metrics in Clean Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 20,
              }}
            >
              {/* Stat 1: Outbound Dispatches */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 12,
                  padding: '20px 24px',
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
                  Warehouse Dispatches
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 38,
                    fontWeight: 900,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '-0.02em',
                  }}
                >
                  -{dispatchDrop}%
                </div>
              </div>

              {/* Stat 2: Trapped Inventory */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 12,
                  padding: '20px 24px',
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
                  Trapped Stock
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 38,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {palletsCount.toLocaleString()}
                  <span style={{ fontSize: 16, fontWeight: 700, color: TOKENS.colors.textMuted }}> PALLETS</span>
                </div>
              </div>

              {/* Stat 3: Storage Billing */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 12,
                  padding: '20px 24px',
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
                  Storage Billing
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 38,
                    fontWeight: 900,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '-0.02em',
                  }}
                >
                  $0 FROZEN
                </div>
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
            “Day 7 ledger: Dispatches down 91%. Daily cash burn: $12,600.”
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
            168 HOURS ELAPSED
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
