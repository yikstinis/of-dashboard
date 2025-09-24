import type { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Children property presence indicates that this link is a container for dropdown.
 * This will also affect the link appearance and behavior (adding dropdown icon, disabling active state, etc).
 */
export interface NavigationLinkProperties extends PropsWithChildren {
  testId?: string;
  href?: string;
  label: string;
}
export type NavigationLinkComponent =
  FunctionComponent<NavigationLinkProperties>;
