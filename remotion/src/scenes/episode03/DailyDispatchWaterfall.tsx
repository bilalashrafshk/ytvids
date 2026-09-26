import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import warehouseBgImg from '../../assets/episode03/038_warehouse_dispatch_desk_bg.jpg';
import { TOKENS } from '../../tokens';

export const DailyDispatchWaterfall: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Slow Push Across 129 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -12]);

  // Entrance animations (Establish frames 0-20)
  const headerOpacity = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 16], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const chartOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateRight: 'clamp' });
  const chartSlide = interpolate(frame, [8, 22], [25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  // -------------------------------------------------------------
  // 2. KINETIC WATERFALL PROGRESSION (Cascade Reveals Frames 18 to 90)
  // -------------------------------------------------------------
  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const p1 = reveal(16, 34);
  const p2 = reveal(34, 52);
  const p3 = reveal(52, 70);
  const p4 = reveal(70, 88);

  const bars = [
    {
      label: 'MON 08:00 AM',
      sublabel: 'PRE-OUTAGE BASELINE',
      val: 10400,
      displayVal: '10,400',
      maxHeight: 180,
      color: TOKENS.colors.emerald,
      progress: p1,
      isZero: false,
    },
    {
      label: 'MON 02:00 PM',
      sublabel: 'AD CACHE RUNOFF',
      val: 4100,
      displayVal: '4,100',
      maxHeight: 75,
      color: TOKENS.colors.amber,
      progress: p2,
      isZero: false,
    },
    {
      label: 'TUE 09:00 AM',
      sublabel: 'FUNNEL EXHAUSTION',
      val: 84,
      displayVal: '84',
      maxHeight: 16,
      color: TOKENS.colors.crimson,
      progress: p3,
      isZero: false,
    },
    {
      label: 'TUE 12:00 PM',
      sublabel: 'COMPLETE BLACKOUT',
      val: 0,
      displayVal: '0',
      maxHeight: 6,
      color: TOKENS.colors.crimson,
      progress: p4,
      isZero: true,
    },
  ];

  const pulse = (Math.sin(frame * 0.35) + 1) / 2;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Warehouse Dispatch Desk Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={warehouseBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette and contrast grading */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.50) 0%, rgba(15, 20, 28, 0.92) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: EVIDENCE-BEARING NEWSROOM WATERFALL CHART
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 90,
          right: 90,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* Header Block: Title -> Unit -> Visible Source */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(211, 47, 47, 0.15)',
                border: `1px solid ${TOKENS.colors.crimson}60`,
                borderRadius: 4,
                padding: '4px 12px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.crimson,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              <span>WAREHOUSE FULFILLMENT TELEMETRY</span>
              <span>•</span>
              <span>HOURLY ORDER DISPATCH VELOCITY</span>
            </div>
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Daily Order Dispatch Collapse
            </h1>
            <div
              style={{
                fontSize: 14,
                color: TOKENS.colors.textMuted,
                marginTop: 6,
              }}
            >
              Source: Warehouse Management System (WMS) Dispatch Log • Long Beach E-Commerce Fulfillment Hub
            </div>
          </div>

          {/* Right Status Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `1.5px solid ${p4 > 0.5 ? TOKENS.colors.crimson : TOKENS.colors.amber}`,
              borderRadius: 8,
              padding: '10px 20px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: p4 > 0.5 ? TOKENS.colors.crimson : TOKENS.colors.amber,
                boxShadow: `0 0 10px ${p4 > 0.5 ? TOKENS.colors.crimson : TOKENS.colors.amber}`,
              }}
            />
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.1em',
              }}
            >
              {p4 > 0.5 ? 'PACKING LINES: HALTED AT TUE 12:00' : 'MONITORING HOURLY DROP'}
            </span>
          </div>
        </div>

        {/* Centerpiece: Waterfall Chart + KPI Sidebar */}
        <div
          style={{
            display: 'flex',
            gap: 36,
            justifyContent: 'center',
            alignItems: 'stretch',
            transform: `translateY(${chartSlide}px)`,
            opacity: chartOpacity,
            margin: '10px 0',
          }}
        >
          {/* Main Chart Canvas Card */}
          <div
            style={{
              flex: 2,
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 12,
              padding: '30px 40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.75)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: 10,
                fontSize: 12,
                fontFamily: TOKENS.typography.fontFamilyMono,
                color: TOKENS.colors.amber,
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              <span>HOURLY DISPATCH ORDERS (WMS CONVEYOR SENSORS)</span>
              <span>SCALE: 0 TO 12,000 ORDERS</span>
            </div>

            {/* Bars Field */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                height: 280,
                borderBottom: `2px solid ${TOKENS.colors.borderCard}50`,
                paddingBottom: 8,
                position: 'relative',
              }}
            >
              {/* Zero Guideline */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 8,
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }}
              />

              {bars.map((bar, idx) => {
                const currentHeight = bar.maxHeight * bar.progress;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      opacity: bar.progress,
                      width: 140,
                    }}
                  >
                    {/* Value Badge */}
                    <div
                      style={{
                        fontFamily: TOKENS.typography.fontFamilyMono,
                        fontSize: bar.isZero ? 24 : 18,
                        fontWeight: 900,
                        color: bar.isZero ? TOKENS.colors.crimson : '#FFFFFF',
                        letterSpacing: '-0.02em',
                        transform: bar.isZero ? `scale(${1 + pulse * 0.1})` : 'none',
                      }}
                    >
                      {bar.isZero ? '0' : bar.displayVal}
                    </div>

                    {/* Bar Rectangle */}
                    <div
                      style={{
                        width: 90,
                        height: Math.max(4, currentHeight),
                        backgroundColor: bar.color,
                        borderRadius: '4px 4px 0 0',
                        boxShadow: bar.isZero
                          ? `0 0 ${12 + pulse * 14}px ${TOKENS.colors.crimson}`
                          : `0 4px 14px ${bar.color}40`,
                        border: bar.isZero ? `1.5px solid #FFFFFF` : 'none',
                      }}
                    />

                    {/* X-Axis Label */}
                    <div style={{ textAlign: 'center', marginTop: 4 }}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: '#E2E8F0',
                          fontFamily: TOKENS.typography.fontFamilyMono,
                        }}
                      >
                        {bar.label}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: TOKENS.colors.textMuted,
                          fontFamily: TOKENS.typography.fontFamilyMono,
                          marginTop: 2,
                        }}
                      >
                        {bar.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Metrics Sidebar */}
          <div
            style={{
              flex: 1,
              maxWidth: 420,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Metric Card 1: Velocity Drop */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: `1.5px solid ${TOKENS.colors.crimson}`,
                borderRadius: 10,
                padding: '22px 26px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 11,
                  fontWeight: 800,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '0.12em',
                  marginBottom: 6,
                }}
              >
                DISPATCH CONTRACTION
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 44,
                  fontWeight: 900,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                -100.0%
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TOKENS.colors.textMuted,
                  marginTop: 8,
                }}
              >
                From 10,400 orders/hr down to dead flatline in 28 hours.
              </div>
            </div>

            {/* Metric Card 2: Client Brands Affected */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: `5px solid ${TOKENS.colors.amber}`,
                borderRadius: 10,
                padding: '22px 26px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 11,
                  fontWeight: 700,
                  color: TOKENS.colors.amber,
                  letterSpacing: '0.12em',
                  marginBottom: 6,
                }}
              >
                PORTFOLIO EXPOSURE
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
              >
                80 D2C BRANDS
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TOKENS.colors.textMuted,
                  marginTop: 6,
                }}
              >
                Skincare, apparel, consumer electronics zero-out simultaneously.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Quote & Evidence Sourcing */}
        <div
          style={{
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderLeft: `5px solid ${TOKENS.colors.crimson}`,
            borderRadius: 8,
            padding: '14px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.crimson,
                letterSpacing: '0.12em',
              }}
            >
              DISPATCH AUDIT:
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              “You check the dispatch screen. Zero orders. Not twenty. Zero.”
            </span>
          </div>
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 12,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
            }}
          >
            ORDER INFLOW: 0.00 / HOUR
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
          FINANCECRAFT DISPATCH // WAREHOUSE FULFILLMENT DESK
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.crimson,
            letterSpacing: '0.1em',
          }}
        >
          WMS STATUS: DISPATCH INACTIVE (ZERO ORDERS)
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
          LONG BEACH DISTRIBUTION HUB // 60,000 SQ FT FACILITY
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          CONVEYOR LINE MOTOR POWER: AUTO-SHUTOFF
        </div>
      </div>
    </AbsoluteFill>
  );
};
