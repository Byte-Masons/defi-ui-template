import React, {FC} from 'react';
import Button, {ButtonProps} from '../Button/Button';
import LoadingIndicator from '../../loading/LoadingIndicator/LoadingIndicator';
import cx from 'classnames';
import styles from './LoadingButton.module.css';

type LoadingButtonProps = ButtonProps & {
  loading?: boolean;
};

/**
 Our standard button, but with a loading indicator to display a triggered action is still in-flight
 */
const LoadingButton: FC<LoadingButtonProps> = ({children, loading, title, ...rest}) => (
  <Button disabled={loading || rest.disabled} {...rest}>
    <div className={cx(styles.content, {[styles.loading]: loading})}>
      {title ? title : children}
    </div>
    {loading && <LoadingIndicator className={styles.buttonLoader} />}
  </Button>
);

export default LoadingButton;
