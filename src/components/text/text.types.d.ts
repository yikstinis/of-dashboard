import type { PropsWithChildren, FunctionComponent } from 'react';
import type { TextColor, TextFontSize, TextFontWeight } from './constants';

export interface TextProperties extends PropsWithChildren {
  testId?: string;
  color: TextColor;
  fontSize: TextSize;
  fontWeight?: TextFontWeight;
}
export type TextComponent = FunctionComponent<TextProperties> & {
  Color: typeof TextColor;
  FontSize: typeof TextFontSize;
  FontWeight: typeof TextFontWeight;
};
