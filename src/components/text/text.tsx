import cn from 'classnames';
import { TextColor, TextFontSize, TextFontWeight } from './constants';
import classes from './text.module.css';
import type { TextComponent } from './text.types';

export const Text: TextComponent = ({
  testId,
  color,
  fontSize,
  fontWeight = TextFontWeight.REGULAR,
  children,
}) => {
  return (
    <span
      data-testid={testId}
      className={cn(classes.Text, {
        [classes.TextColorPrimary]: color === TextColor.PRIMARY,
        [classes.TextColorSecondary]: color === TextColor.SECONDARY,
        [classes.TextFontSizeSm]: fontSize === TextFontSize.SM,
        [classes.TextFontSizeBase]: fontSize === TextFontSize.BASE,
        [classes.TextFontWeightRegular]: fontWeight === TextFontWeight.REGULAR,
        [classes.TextFontWeightMedium]: fontWeight === TextFontWeight.MEDIUM,
        [classes.TextFontWeightSemibold]:
          fontWeight === TextFontWeight.SEMIBOLD,
        [classes.TextFontWeightBold]: fontWeight === TextFontWeight.BOLD,
      })}
    >
      {children}
    </span>
  );
};
Text.Color = TextColor;
Text.FontSize = TextFontSize;
Text.FontWeight = TextFontWeight;
