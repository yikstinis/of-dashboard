import { PropsWithChildren, FunctionComponent } from 'react';
import type { SectionHeaderComponent } from './section-header.types';
import type { SectionRowComponent } from './section-row.types';

export interface SectionProperties extends PropsWithChildren {
  testId?: string;
}
export type SectionComponent = FunctionComponent<SectionProperties> & {
  Header: SectionHeaderComponent;
  Row: SectionRowComponent;
};
