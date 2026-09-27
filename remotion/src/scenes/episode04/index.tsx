import React from 'react';
import { CalculateMetadataFunction, Composition } from 'remotion';
import { LifeBar } from './LifeBar';
import { ChildrenPictogram, CompareBars, HomesFreedGrid, PassbookRate, PopulationCounter, SavingsGrowth, SeatsGrid, SpreadsheetFlip, TwinStacks } from './charts';
import { AgeingHourglasses, FamilyPhotoStack, HypotheticalBadge, InfiniteQueueTunnel, KeyFlip, LadderToQueue, QueueLoop, WhipZoomSeats } from './scenes';

// Episode 04 compositions. Every render passes `frames` (exact beat length from
// 10_REMOTION_SPECS.md) and `bg` (the neighbouring beat still in public/ep04/).
type WithFrames = { frames?: number };
const byFrames: CalculateMetadataFunction<WithFrames & Record<string, unknown>> = ({ props }) => ({
  durationInFrames: props.frames ?? 150,
});

const list: [string, React.FC<any>, Record<string, unknown>][] = [
  ['LifeBar', LifeBar, { preset: 'man-40', bg: null }],
  ['CompareBars', CompareBars, { preset: 'mortgage-interest', bg: null }],
  ['PopulationCounter', PopulationCounter, { bg: null }],
  ['ChildrenPictogram', ChildrenPictogram, { bg: null }],
  ['SeatsGrid', SeatsGrid, { phase: 'light', bg: null }],
  ['HomesFreedGrid', HomesFreedGrid, { bg: null }],
  ['TwinStacks', TwinStacks, { bg: null }],
  ['SavingsGrowth', SavingsGrowth, { bg: null }],
  ['PassbookRate', PassbookRate, { rates: ['5%', '4%', '3%', '2%'], bg: null }],
  ['SpreadsheetFlip', SpreadsheetFlip, { phase: 'cascade', bg: null }],
  ['AgeingHourglasses', AgeingHourglasses, { bg: null }],
  ['QueueLoop', QueueLoop, { mode: 'steady', bg: null }],
  ['FamilyPhotoStack', FamilyPhotoStack, { phase: 'grow', years: [20, 40, 60], bg: null }],
  ['LadderToQueue', LadderToQueue, { phase: 'tip', bg: null }],
  ['KeyFlip', KeyFlip, { plate: '120_old_hand_gripping_house.png' }],
  ['InfiniteQueueTunnel', InfiniteQueueTunnel, { plate: '901_tunnel_corridor_plate.png' }],
  ['WhipZoomSeats', WhipZoomSeats, { plates: Array.from({ length: 10 }, (_, i) => `91${i}_montage`) }],
  ['HypotheticalBadge', HypotheticalBadge, {}],
];

export const Ep04Compositions: React.FC = () => (
  <>
    {list.map(([id, component, defaults]) => (
      <Composition
        key={id}
        id={`Ep04-${id}`}
        component={component}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ frames: id === 'HypotheticalBadge' ? 120 : 150, ...defaults }}
        calculateMetadata={byFrames}
      />
    ))}
  </>
);
