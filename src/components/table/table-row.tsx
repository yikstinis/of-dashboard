import classes from './table-row.module.css';
import type { TableRowComponent } from './table-row.types';

export const TableRow: TableRowComponent = ({ children, testId }) => {
  return (
    <div className={classes.TableRow} data-testid={testId}>
      {children}
    </div>
  );
};
