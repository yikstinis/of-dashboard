import cn from 'classnames';
import { LabelType } from './constants';
import classes from './label.module.css';
import type { LabelComponent } from './label.types';

export const Label: LabelComponent = ({ testId, type, text }) => {
  return (
    <span
      data-testid={testId}
      className={cn(classes.Label, {
        [classes.LabelSuccess]: type === LabelType.SUCCESS,
        [classes.LabelFailure]: type === LabelType.FAILURE,
      })}
    >
      {text}
    </span>
  );
};
Label.Type = LabelType;
