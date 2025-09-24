import type { FunctionComponent } from 'react';
import type { ButtonIcon } from './constants';

export interface ButtonProperties {
  leftIcon?: ButtonIcon;
  label: string;
  onPress(): void;
}
export type ButtonComponent = FunctionComponent<ButtonProperties> & {
  Icon: typeof ButtonIcon;
};
