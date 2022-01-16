import React, {CSSProperties, useEffect, useState} from 'react';
import styles from './SideMenu.module.css';
import cx from 'classnames';
import {GrMenu} from 'react-icons/all';

type SideMenuProps = {
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
  children: (setShowMenu: (show: boolean) => void) => React.ReactElement | React.ReactElement[];
  className?: string;
  style?: CSSProperties;
};

/**
 A Component
 */
const SideMenu = ({buttonClassName, buttonStyle, children, className, style}: SideMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    /*
    we dismiss the menu when the window resizes, as depending on the usage of this component, the button
    to toggle the menu may have disappeared (eg, in the NavMenu when expanding from <690px => >690px).
    If this is undesirable for your use-case either remove this, or keep window width in a ref, and only
    dismiss when the change warrants it
    */
    window.addEventListener('resize', (event) => {
      setShowMenu(false);
    });
  }, []);

  return (
    <>
      <GrMenu
        className={cx(styles.menuButton, buttonClassName)}
        onClick={() => setShowMenu(!showMenu)}
        size={30}
        style={buttonStyle}
      />
      <div
        className={cx(styles.sideMenu, {[styles.sideMenuOpen]: showMenu}, className)}
        style={style}>
        {children(setShowMenu)}
      </div>
    </>
  );
};

export default SideMenu;
