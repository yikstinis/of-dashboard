import NotificationsIcon from '@/icons/notifications.svg?react';
import classes from './widgets-notifications.module.css';
import type { WidgetsNotificationsComponent } from './widgets-notifications.types';

/**
 * Maybe this element is supposed to be a link?..
 * Or it can be extended with some dropdown element..
 */
export const WidgetsNotifications: WidgetsNotificationsComponent = () => {
  return (
    <div className={classes.WidgetsNotifications}>
      <NotificationsIcon className={classes.WidgetsNotificationsIcon} />
    </div>
  );
};
