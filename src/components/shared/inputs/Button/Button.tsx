import React, {FC} from 'react';
import styles from './Button.module.css';
import cx from 'classnames';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  inverseColors?: boolean;
  title?: string;
};

/**
 Our standard button component
 */
const Button: FC<ButtonProps> = ({children, className, inverseColors, title, ...rest}) => (
  <button {...rest} className={cx(styles.button, {[styles.inverse]: inverseColors}, className)}>
    {title ? title : children}
  </button>
);

export default Button;
