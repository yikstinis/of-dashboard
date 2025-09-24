import type { FunctionComponent, PropsWithChildren } from 'react';
import type { TableCellSpacing } from './constants';

export interface TableCellProperties extends PropsWithChildren {
  testId?: string;
  spacing?: TableCellSpacing;
}
export type TableCellComponent = FunctionComponent<TableCellProperties> & {
  Spacing: typeof TableCellSpacing;
};
