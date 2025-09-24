import classes from './main.module.css';
import type { MainComponent } from './main.types';

export const Main: MainComponent = ({ testId, children }) => {
  return (
    <main data-testid={testId} className={classes.Main}>
      {children}
    </main>
  );
};
