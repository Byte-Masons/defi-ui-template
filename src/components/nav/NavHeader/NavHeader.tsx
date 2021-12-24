import React, {useEffect, useState} from 'react';
import styles from './NavHeader.module.css';
import Header, {HeaderProps} from '../../layout/Header/Header';
import NavLink from './NavLink';
import cx from 'classnames';
import SideMenu from '../SideMenu/SideMenu';

export type NavigationItem = {
  onClick?: () => void;
  route: string;
  title: string;
};

const navigationItems: NavigationItem[] = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/page1',
    title: 'Page 1',
  },
  {
    route: '/page2',
    title: 'Page 2',
  },
  {
    route: '/page3',
    title: 'Page 3',
  },
];

/**
 Our navigation header - route selection via left menu on mobile, and along top of screen on larger viewports
 - swap this our for a standard Header if you don't need navigation, and want something else atop the page
 */
const NavHeader = ({className, ...rest}: HeaderProps) => (
  <Header className={cx(styles.navHeader, className)} {...rest}>
    {navigationItems.map((item) => (
      <NavLink key={item.title} to={item.route} {...item} />
    ))}
    <SideMenu buttonClassName={styles.menuButton} className={styles.navMenu}>
      {(setShowMenu) =>
        navigationItems.map((item) => (
          <NavLink key={item.title} to={item.route} onClick={() => setShowMenu(false)} {...item} />
        ))
      }
    </SideMenu>
  </Header>
);

export default NavHeader;
