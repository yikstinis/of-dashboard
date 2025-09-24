import classes from './panel-header.module.css';
import type { PanelHeaderComponent } from './panel-header.types';

/**
 * This component may also have action controls pulled to the right in future.
 * Seems like nothing special to implement and design is not finished.
 * Skipped this element implementation too.
 */
export const PanelHeader: PanelHeaderComponent = ({ testId, title }) => {
  return (
    <div data-testid={testId} className={classes.PanelHeader}>
      <h3 className={classes.PanelHeaderTitle}>{title}</h3>
    </div>
  );
};
