import classes from './table-head.module.css';
import type { TableHeadComponent } from './table-head.types';

export const TableHead: TableHeadComponent = ({ testId, children }) => {
  return (
    <div data-testid={testId} className={classes.TableHead}>
      {children}
    </div>
  );
};
