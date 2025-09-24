import { SectionHeader } from './section-header';
import { SectionRow } from './section-row';
import classes from './section.module.css';
import type { SectionComponent } from './section.types';

export const Section: SectionComponent = ({ testId, children }) => {
  return (
    <section data-testid={testId} className={classes.Section}>
      {children}
    </section>
  );
};
Section.Header = SectionHeader;
Section.Row = SectionRow;
