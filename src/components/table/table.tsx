import { TableHead } from './table-head';
import { TableBody } from './table-body';
import { TableRow } from './table-row';
import { TableCell } from './table-cell';
import classes from './table.module.css';
import type { TableComponent } from './table.types';

export const Table: TableComponent = ({ testId, children }) => {
  return (
    <div data-testid={testId} className={classes.Table}>
      {children}
    </div>
  );
};
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
