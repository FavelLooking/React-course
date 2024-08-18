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
                ? 'React Hook Form'
                : 'Uncontrolled Elements'}
            </h3>
            {Object.entries(item).map(([key, value]) => {
              switch (key) {
                case 'file':
                  return (
                    <img
                      className={styles.picture}
                      key={key}
                      src={value as string}
                      alt="Uploaded content"
                    />
                  );

                case 'confirmPassword':
                case 'isReactHookForm':
                  return null;

                case 'isChecked':
                  return (
                    <p key={key}>
                      <span className={styles['tile-label']}>
                        terms and conditions:
                      </span>{' '}
                      ✅
                    </p>
                  );

                case 'userName':
                  return (
                    <p key={key}>
                      <span className={styles['tile-label']}>user name</span>:{' '}
                      {String(value)}
                    </p>
                  );

                default:
                  return (
                    <p key={key}>
                      <span className={styles['tile-label']}>{key}</span>:{' '}
                      {String(value)}
                    </p>
                  );
              }
            })}
          </div>
        ))}
    </div>
  );
}
