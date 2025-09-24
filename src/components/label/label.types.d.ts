import type { FunctionComponent } from 'react';
import type { LabelType } from './constants';

export interface LabelProperties {
  testId?: string;
  type: LabelType;
  text: string;
}
export type LabelComponent = FunctionComponent<LabelProperties> & {
  Type: typeof LabelType;
};
