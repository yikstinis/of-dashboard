import type { FunctionComponent, PropsWithChildren } from 'react';

export interface HeaderProperties extends PropsWithChildren {
  testId?: string;
}
export type HeaderComponent = FunctionComponent<HeaderProperties>;
