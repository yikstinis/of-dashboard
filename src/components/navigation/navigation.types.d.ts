import type { FunctionComponent, PropsWithChildren } from 'react';
import type { NavigationLinkComponent } from './navigation-link-types';

export interface NavigationProperties extends PropsWithChildren {
  testId?: string;
}
export type NavigationComponent = FunctionComponent<NavigationProperties> & {
  Link: NavigationLinkComponent;
};
