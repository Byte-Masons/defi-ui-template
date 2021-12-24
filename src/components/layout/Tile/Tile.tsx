import React, {CSSProperties, FC} from 'react';
import styles from './Tile.module.css';
import cx from 'classnames';

export interface TileProps {
  className?: string;
  spacing?: number;
  style?: CSSProperties;
}

/**
 A Basic Tile component - has a border and border-radius set in our CSS config, and allows the parent to set spacing (margin)
 */
const Tile: FC<TileProps> = ({children, className, spacing = 0, style}) => (
  <div className={cx(styles.tile, className)} style={{margin: spacing, ...style}}>
    {children}
  </div>
);

export default Tile;
