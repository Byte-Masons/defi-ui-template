import React from 'react';
import {NavLink as RRNavLink, NavLinkProps} from 'react-router-dom';
import cx from 'classnames';
import styles from './NavHeader.module.css';

type NavHeaderLinkProps = Omit<NavLinkProps, 'children'> & {
  title: string;
};

/**
 Our own styled implementation of a Nav Link
 */
const NavLink = ({
  title,
  className,
  style = ({isActive}) => (isActive ? {fontWeight: 900} : {}),
  ...rest
}: NavHeaderLinkProps) => (
  <RRNavLink className={cx(styles.navItem, className)} style={style} {...rest}>
    {title}
  </RRNavLink>
);

export default NavLink;
