import type { FunctionComponent, PropsWithChildren } from 'react';
import type { WidgetsProfileComponent } from './widgets-profile.types';
import type { WidgetsNotificationsComponent } from './widgets-notifications.types';

export interface WidgetsProperties extends PropsWithChildren {
  testId?: string;
}
export type WidgetsComponent = FunctionComponent<WidgetsProperties> & {
  Profile: WidgetsProfileComponent;
  Notifications: WidgetsNotificationsComponent;
};
