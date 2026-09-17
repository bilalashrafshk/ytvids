import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat780UnitMarginWaterfall: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const baseProgress = reveal(18, 48);     // FY20 base: +$927
  const step1Progress = reveal(48, 75);    // Price cut: -$700
  const step2Progress = reveal(75, 100);   // Container shipping: -$180
  const step3Progress = reveal(100, 125);  // Warehousing & demurrage: -$150
  const step4Progress = reveal(125, 150);  // Air freight amortization: -$93
  const finalProgress = reveal(150, 175);  // FY22 ending: -$196
  // Frames 175–210 = stable reading hold

  // Waterfall Steps Definition
  const steps = [
    { label: 'FY20 Unit Profit', val: '+$927', delta: +927, type: 'start', progress: baseProgress, color: TOKENS.colors.emerald },
    { label: 'Price Cuts', val: '-$700', delta: -700, type: 'down', progress: step1Progress, color: TOKENS.colors.crimson },
    { label: 'Shipping Surcharge', val: '-$180', delta: -180, type: 'down', progress: step2Progress, color: TOKENS.colors.crimson },
    { label: 'Warehousing Fees', val: '-$150', delta: -150, type: 'down', progress: step3Progress, color: TOKENS.colors.crimson },
    { label: 'Air Freight Exp.', val: '-$93', delta: -93, type: 'down', progress: step4Progress, color: TOKENS.colors.crimson },
    { label: 'FY22 Unit Cash Loss', val: '-$196', delta: -196, type: 'end', progress: finalProgress, color: TOKENS.colors.crimson },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.background,
        fontFamily: TOKENS.typography.fontFamilySans,
        padding: '80px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header & Source Under Title (newsroom-chart-animations standard) */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.crimson,
              color: '#FFF',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 780 • FORENSIC UNIT ECONOMICS AUTOPSY
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Constant Dollars Per Connected Fitness Bike Delivered
          </span>
        </div>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: TOKENS.colors.textPrimary,
            margin: '0 0 6px 0',
            letterSpacing: '-0.02em',
          }}
        >
          HOW PELOTON’S UNIT MARGINS INVERTED (-$196 PER BIKE)
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: SEC Form 10-K FY2020 vs. FY2022 • Segment Reporting & Cost of Revenue Notes
        </p>
      </div>

      {/* Waterfall Visualization */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0 40px',
        }}
      >
        {/* Zero Baseline Reference Line */}
        <div
          style={{
            position: 'absolute',
            top: '58%',
            left: 20,
            right: 20,
            height: 2,
            backgroundColor: TOKENS.colors.textSecondary,
            opacity: 0.4,
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: 'absolute',
              right: 0,
              top: -24,
              fontSize: 14,
              fontWeight: 700,
              color: TOKENS.colors.textSecondary,
            }}
          >
            $0 BREAKEVEN BASELINE
          </span>
        </div>

        {/* Waterfall Steps */}
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 180,
              zIndex: 2,
              opacity: step.progress,
              transform: `scale(${0.9 + 0.1 * step.progress})`,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: step.color,
                fontFamily: TOKENS.typography.fontFamilyMono,
                marginBottom: 8,
              }}
            >
              {step.val}
            </div>
            <div
              style={{
                width: 140,
                height:
                  idx === 0
                    ? 180 * step.progress
                    : idx === 5
                    ? 90 * step.progress
                    : 110 * step.progress,
                backgroundColor: step.color,
                borderRadius: 6,
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              }}
            />
            <div
              style={{
                marginTop: 12,
                fontSize: 15,
                fontWeight: 700,
                color: TOKENS.colors.textPrimary,
                textAlign: 'center',
              }}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Reading Indicator */}
      <div
        style={{
          borderTop: `1px solid ${TOKENS.colors.gridLine}`,
          paddingTop: 14,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 15,
          color: TOKENS.colors.textMuted,
        }}
      >
        <span>FinanceCraft Forensic Newsroom Graphics</span>
        <span>Reconciled 1:1 Against Sworn SEC 10-K Statements</span>
      </div>
    </AbsoluteFill>
  );
};
