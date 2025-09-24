import type { PropsWithChildren, FunctionComponent } from 'react';

export interface TableBodyProperties extends PropsWithChildren {
  testId?: string;
}
export type TableBodyComponent = FunctionComponent<TableBodyProperties>;
