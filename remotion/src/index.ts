if (typeof window !== 'undefined') {
  (window as any).CESIUM_BASE_URL = 'https://unpkg.com/cesium@1.129.0/Build/Cesium/';
}

import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
