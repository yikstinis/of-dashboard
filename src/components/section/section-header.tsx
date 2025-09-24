import classes from './section-header.module.css';
import type { SectionHeaderComponent } from './section-header.types';

export const SectionHeader: SectionHeaderComponent = ({ title, children }) => {
  return (
    <div className={classes.SectionHeader}>
      <h2 className={classes.SectionHeaderTitle}>{title}</h2>

      <div className={classes.SectionHeaderChildren}>{children}</div>
    </div>
  );
};
