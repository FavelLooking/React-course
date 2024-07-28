import styles from './Loader.module.scss';
import planet from './../../assets/images/Planet-trans.gif';

export function Loader() {
  return (
    <img
      className={styles.loader}
      data-testid="loader"
      src={planet}
      alt="loader"
    />
  );
}
