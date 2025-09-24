import classes from './table-body.module.css';
import type { TableBodyComponent } from './table-body.types';

export const TableBody: TableBodyComponent = ({ testId, children }) => {
  return (
    <div data-testid={testId} className={classes.TableBody}>
      {children}
    </div>
  );
};
