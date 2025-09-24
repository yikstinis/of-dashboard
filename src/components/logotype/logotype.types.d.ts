import type { FunctionComponent } from 'react';

export interface LogotypeProperties {
  testId?: string;
  href: string;
}
export type LogotypeComponent = FunctionComponent<LogotypeProperties>;
