import type { PropsWithChildren, FunctionComponent } from 'react';

export interface TableHeadProperties extends PropsWithChildren {
  testId?: string;
}
export type TableHeadComponent = FunctionComponent<TableHeadProperties>;
