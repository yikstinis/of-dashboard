import { useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import type { NavLinkRenderProps } from 'react-router-dom';
import ChevronDownIcon from '@/icons/chevron-down.svg?react';
import type { NavigationLinkComponent } from './navigation-link-types';
import classes from './navigation-link.module.css';

export const NavigationLink: NavigationLinkComponent = ({
  testId,
  href = '#',
  label,
  children,
}) => {
  const getClassName = useCallback(({ isActive }: NavLinkRenderProps) => {
    const result = [classes.NavigationLink];
    if (isActive) result.push(classes.NavigationLinkActive);
    return result.join(' ');
  }, []);

  if (children) {
    // We don't have any dropdown design, so just skipping it..
    return (
      <Link data-testid={testId} to={href} className={classes.NavigationLink}>
        {label}

        <ChevronDownIcon className={classes.NavigationLinkDropdownIcon} />
      </Link>
    );
  }

  return (
    <NavLink data-testid={testId} to={href} className={getClassName}>
      {label}
    </NavLink>
  );
};
