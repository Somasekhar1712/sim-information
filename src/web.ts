import { WebPlugin } from '@capacitor/core';

import type { SiminfoPlugin } from './definitions';

export class SiminfoWeb extends WebPlugin implements SiminfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
