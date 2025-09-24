import { WidgetsProfile } from './widgets-propfile';
import { WidgetsNotifications } from './widgets-notifications';
import classes from './widgets.module.css';
import type { WidgetsComponent } from './widgets.types';

export const Widgets: WidgetsComponent = ({ testId, children }) => {
  return (
    <div data-testid={testId} className={classes.Widgets}>
      {children}
    </div>
  );
};
Widgets.Profile = WidgetsProfile;
Widgets.Notifications = WidgetsNotifications;
