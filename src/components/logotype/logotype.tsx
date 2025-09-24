import { Link } from 'react-router-dom';
import LogotypeIcon from '@/icons/logotype.svg?react';
import classes from './logotype.module.css';
import type { LogotypeComponent } from './logotype.types';

export const Logotype: LogotypeComponent = ({ testId, href }) => {
  return (
    <Link data-testid={testId} to={href} className={classes.Logotype}>
      <LogotypeIcon className={classes.LogotypeIcon} />
    </Link>
  );
};
