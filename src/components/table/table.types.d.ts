import type { PropsWithChildren, FunctionComponent } from 'react';
import type { TableHeadComponent } from './table-head.types';
import type { TableBodyComponent } from './table-body.types';
import type { TableRowComponent } from './table-row.types';
import type { TableCellComponent } from './table-cell.types';

export interface TableProperties extends PropsWithChildren {
  testId?: string;
}
export type TableComponent = FunctionComponent<TableProperties> & {
  Head: TableHeadComponent;
  Body: TableBodyComponent;
  Row: TableRowComponent;
  Cell: TableCellComponent;
};
