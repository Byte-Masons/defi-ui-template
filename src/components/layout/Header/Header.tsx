import React, {CSSProperties, FC} from 'react';
import styles from './Header.module.css';
import cx from 'classnames';

export type HeaderProps = {
  className?: string;
  style?: CSSProperties;
};

/**
 A generic header component that can be used as a container for
 a Nav header or title-bar depending on needs
 - this could also be achieved with css alone, but making a component
   makes for consumers of this repo to recognize what each piece is
 */
const Header: FC<HeaderProps> = ({children, className, style}) => (
  <div className={cx(styles.header, className)} style={style}>
    {children}
  </div>
);

export default Header;
