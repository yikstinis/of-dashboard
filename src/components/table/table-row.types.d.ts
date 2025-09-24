import type { PropsWithChildren, FunctionComponent } from 'react';

export interface TableRowProperties extends PropsWithChildren {
  testId?: string;
}
export type TableRowComponent = FunctionComponent<TableRowProperties>;
