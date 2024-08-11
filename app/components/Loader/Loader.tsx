import styles from './Loader.module.scss';
import React from 'react';

export function Loader() {
  return (
    <img
      className={styles.loader}
      data-testid="loader"
      src="/images/Planet-trans.gif"
      alt="loader"
      width="200"
      height="200"
    />
  );
}
