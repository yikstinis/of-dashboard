import PlusIcon from '@/icons/plus.svg?react';
import { ButtonIcon } from './constants';
import classes from './button.module.css';
import type { ButtonComponent } from './button.types';

export const Button: ButtonComponent = ({ leftIcon, label, onPress }) => {
  return (
    <button className={classes.Button} onClick={onPress}>
      {leftIcon === ButtonIcon.PLUS && (
        <PlusIcon className={classes.ButtonIcon} />
      )}

      {label}
    </button>
  );
};
Button.Icon = ButtonIcon;
