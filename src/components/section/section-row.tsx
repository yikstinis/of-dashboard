import calsses from './section-row.module.css';
import type { SectionRowComponent } from './section-row.types';

export const SectionRow: SectionRowComponent = ({ testId, children }) => {
  return (
    <div data-testid={testId} className={calsses.SectionRow}>
      {children}
    </div>
  );
};
