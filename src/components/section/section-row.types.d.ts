import type { FunctionComponent, PropsWithChildren } from 'react';

export interface SectionRowProperties extends PropsWithChildren {
  testId?: string;
}
export type SectionRowComponent = FunctionComponent<SectionRowProperties>;
