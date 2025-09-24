import { PanelHeader } from './panel-header';
import classes from './panel.module.css';
import type { PanelComponent } from './panel.types';

export const Panel: PanelComponent = ({ testId, flexGrow = 1, children }) => {
  return (
    <div data-testid={testId} className={classes.Panel} style={{ flexGrow }}>
      {children}
    </div>
  );
};
Panel.Header = PanelHeader;
