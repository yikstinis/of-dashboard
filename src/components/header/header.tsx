import classes from './header.module.css';
import type { HeaderComponent } from './header.types';

export const Header: HeaderComponent = ({ children, testId }) => {
  return (
    <header data-testid={testId} className={classes.Header}>
      {children}
    </header>
  );
};
