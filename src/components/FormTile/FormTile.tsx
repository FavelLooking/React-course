import { useSelector } from 'react-redux';
import styles from './FormTile.module.scss';
import { RootState } from '../../store/store';

export function FormTile() {
  const formData = useSelector((state: RootState) => state.dataSlice.formData);

  return (
    <div className={styles['tile-container']}>
      {formData
        .filter((_, index) => index !== 0)
        .map((item, index) => (
          <div
            key={index}
            className={`${styles['tile-item']} ${formData.length - 2 === index ? styles[`last-item`] : ''}`}
          >
            <h3>
              {item.isReactHookForm
                ? 'React Hook form data'
                : 'Uncontrolled elements data'}
            </h3>
            {Object.entries(item).map(([key, value]) => {
              if (key === 'file') {
                return (
                  <img className={styles.picture} key={key} src={`${value}`} />
                );
              }
              if (key === 'confirmPassword' || key === 'isReactHookForm') {
                return null;
              }
              if (key === 'isChecked') {
                return (
                  <p key={key}>
                    <span className={styles['tile-label']}>
                      Terms and conditions:
                    </span>{' '}
                    ✅
                  </p>
                );
              }
              return (
                <p key={key}>
                  <span className={styles['tile-label']}>{key}</span>:{' '}
                  {String(value)}
                </p>
              );
            })}
          </div>
        ))}
    </div>
  );
}
