import React, {CSSProperties, FC} from 'react';
import cx from 'classnames';
import styles from './TileContainer.module.css';

type TileContainerProps = {
  center?: boolean;
  className?: string;
  style?: CSSProperties;
  centerVertical?: string;
  vertical?: boolean;
};

/**
 A Container Component for laying out tiles in a row, overflowing onto new rows as required
 */
const TileContainer: FC<TileContainerProps> = ({
  center,
  centerVertical,
  children,
  className,
  style,
  vertical,
}) => (
  <div
    className={cx(
      styles.tileContainer,
      {
        [styles.centered]: center,
        [styles.vertCentered]: centerVertical,
        [styles.vertical]: vertical,
      },
      className,
    )}
    style={style}>
    {children}
  </div>
);

export default TileContainer;
