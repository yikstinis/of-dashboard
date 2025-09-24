import classes from './widgets-profile.module.css';
import type { WidgetsProfileComponent } from './widgets-profile.types';

/**
 * Maybe this element is supposed to be a link?..
 * Or it can be extended with some dropdown element..
 */
export const WidgetsProfile: WidgetsProfileComponent = ({ src, alt }) => {
  return (
    <div className={classes.WidgetsProfile}>
      <img className={classes.WidgetsProfileImage} src={src} alt={alt} />
    </div>
  );
};
