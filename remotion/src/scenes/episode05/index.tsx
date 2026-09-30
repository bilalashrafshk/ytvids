import React from 'react';
import { CalculateMetadataFunction, Composition } from 'remotion';
import beats from './beats.json';
import bgMap from './bg_map.json';
import { Ep05CounterCard, Ep05FeeWaterfall, Ep05PriceCard, Ep05RangeBar, Ep05ReceiptDots, Ep05SplitCompare, Ep05Staircase } from './cards';
import { Ep05BackerStack, Ep05FeeChain, Ep05FeeFlow, Ep05NameBadges, Ep05Newsprint, Ep05OrgDiagram, Ep05QuoteCard, Ep05WallBricks } from './diagrams';
import { Ep05Flywheel, Ep05Placeholder, Ep05PortalTunnel, Ep05WhipZoom } from './cinematics';

// Episode 05 (HDMI) compositions. One entry per Remotion beat in 10_REMOTION_SPECS.md.
// beats.json is written by scripts/build_ep05_beats.py: it carries each beat's frame count and the frame
// (relative to the beat) at which every spoken sentence starts, so reveals land on the words.
// Renders pass `durationInFrames` and `scene`; everything else comes from these defaults.
const COMPONENTS: Record<string, React.FC<any>> = {
  Ep05CounterCard,
  Ep05FeeWaterfall,
  Ep05PriceCard,
  Ep05RangeBar,
  Ep05ReceiptDots,
  Ep05SplitCompare,
  Ep05Staircase,
  Ep05BackerStack,
  Ep05FeeChain,
  Ep05FeeFlow,
  Ep05NameBadges,
  Ep05Newsprint,
  Ep05OrgDiagram,
  Ep05QuoteCard,
  Ep05WallBricks,
  Ep05Flywheel,
  Ep05PortalTunnel,
  Ep05WhipZoom,
};

const byFrames: CalculateMetadataFunction<any> = ({ props }) => ({
  durationInFrames: props.durationInFrames ?? props.frames ?? 150,
});

export const Ep05Compositions: React.FC = () => (
  <>
    {(beats as { id: string; comp: string; scene: string; frames: number; cues: number[] }[]).map((b) => (
      <Composition
        key={b.id}
        id={b.id}
        component={COMPONENTS[b.comp]}
        durationInFrames={b.frames}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ frames: b.frames, scene: b.scene, cues: b.cues, bg: ((bgMap as Record<string, string>)[b.id] ?? null) as string | null, plateDir: 'ep05' }}
        calculateMetadata={byFrames}
      />
    ))}
    <Composition
      id="Ep05Placeholder"
      component={Ep05Placeholder}
      durationInFrames={1}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ kind: 'plate', i: 1 }}
    />
  </>
);
