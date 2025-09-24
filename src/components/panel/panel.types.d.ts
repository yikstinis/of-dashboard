import type { FunctionComponent, PropsWithChildren } from 'react';
import type { PanelHeaderComponent } from './panel-header.types';

export interface PanelProperties extends PropsWithChildren {
  testId?: string;
  flexGrow?: number;
}
export type PanelComponent = FunctionComponent<PanelProperties> & {
  Header: PanelHeaderComponent;
};
