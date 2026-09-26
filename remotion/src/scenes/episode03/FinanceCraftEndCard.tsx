import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../../tokens';

export const FinanceCraftEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: TOKENS.colors.backgroundDark, fontFamily: TOKENS.typography.fontFamilySans, padding: '70px 90px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', opacity: reveal }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 24, height: 24, backgroundColor: TOKENS.colors.emerald, borderRadius: 4 }} />
          <span style={{ color: '#FFF', fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em' }}>FINANCECRAFT</span>
        </div>
        <div style={{ color: TOKENS.colors.textMuted, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 14 }}>
          DOCUMENTARY SERIES • EPISODE 03
        </div>
      </div>

      <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 440, height: 240, border: '2px dashed rgba(255,255,255,0.2)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', color: TOKENS.colors.textMuted, fontSize: 14 }}>
          [RECOMMENDED VIDEO PLACEHOLDER]
        </div>
        <div style={{ width: 440, height: 240, border: '2px dashed rgba(255,255,255,0.2)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', color: TOKENS.colors.textMuted, fontSize: 14 }}>
          [SUBSCRIBE / CHANNEL PLAYLIST]
        </div>
      </div>

      <div style={{ textAlign: 'center', color: TOKENS.colors.textMuted, fontSize: 14, fontFamily: TOKENS.typography.fontFamilyMono }}>
        SUBSCRIBE FOR EVIDENCE-LED ECONOMIC INVESTIGATIONS
      </div>
    </AbsoluteFill>
  );
};
