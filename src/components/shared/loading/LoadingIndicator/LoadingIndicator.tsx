import React, {CSSProperties} from 'react';
import {FaSpinner} from 'react-icons/fa';
import styles from './LoadingIndicator.module.css';
import cx from 'classnames';

interface LoadingIndicatorProps {
  className?: string;
  size?: number;
  style?: CSSProperties;
}

/**
 Our animated loading spinner
 */
const LoadingIndicator = ({className, size = 15, style}: LoadingIndicatorProps) => (
  <FaSpinner className={cx(styles.loading, className)} size={size} style={style} />
);

export default LoadingIndicator;
