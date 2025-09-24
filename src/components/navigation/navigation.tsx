import { NavigationLink } from './navigation-link';
import classes from './navigation.module.css';
import type { NavigationComponent } from './navigation.types';

export const Navigation: NavigationComponent = ({ testId, children }) => {
  return (
    <nav data-testid={testId} className={classes.Navigation}>
      {children}
    </nav>
  );
};
Navigation.Link = NavigationLink;
