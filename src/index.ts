import { registerPlugin } from '@capacitor/core';

import type { SiminfoPlugin } from './definitions';

const Siminfo = registerPlugin<SiminfoPlugin>('Siminfo', {
  web: () => import('./web').then(m => new m.SiminfoWeb()),
});

export * from './definitions';
export { Siminfo };
