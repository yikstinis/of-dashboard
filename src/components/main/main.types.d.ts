import type { FunctionComponent, PropsWithChildren } from 'react';

export interface MainProperties extends PropsWithChildren {
  testId?: string;
}
export type MainComponent = FunctionComponent<MainProperties>;
