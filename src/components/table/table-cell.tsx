import { useMemo } from 'react';
import { TableCellSpacing } from './constants';
import classes from './table-cell.module.css';
import type { TableCellComponent } from './table-cell.types';

export const TableCell: TableCellComponent = ({
  testId,
  spacing = TableCellSpacing.BASE,
  children,
}) => {
  const className = useMemo(() => {
    const result = [classes.TableCell];
    if (spacing === TableCellSpacing.COMPACT) {
      result.push(classes.TableCellCompact);
    }
    return result.join(' ');
  }, [spacing]);

  return (
    <div data-testid={testId} className={className}>
      {children}
    </div>
  );
};
TableCell.Spacing = TableCellSpacing;
