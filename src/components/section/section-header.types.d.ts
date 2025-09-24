import type { PropsWithChildren, FunctionComponent } from 'react';

export interface SectionHeaderProperties extends PropsWithChildren {
  title: string;
}
export type SectionHeaderComponent = FunctionComponent<SectionHeaderProperties>;
