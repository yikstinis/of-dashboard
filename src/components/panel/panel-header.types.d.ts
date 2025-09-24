import type { FunctionComponent } from 'react';

export interface PanelHeaderProperties {
  testId?: string;
  title: string;
}
export type PanelHeaderComponent = FunctionComponent<PanelHeaderProperties>;
