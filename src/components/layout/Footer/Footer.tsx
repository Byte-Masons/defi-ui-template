import React, {CSSProperties, FC} from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';

type FooterProps = {
  className?: string;
  style?: CSSProperties;
};

/**
 A generic footer container
 - this could also be achieved with css alone, but making a component
 makes it easy for consumers of this repo to recognize what each piece is
 */
const Footer: FC<FooterProps> = ({children, className, style}) => (
  <div className={cx(styles.footer, className)} style={style}>
    {children}
  </div>
);

export default Footer;
