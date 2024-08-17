import { useSelector } from 'react-redux';
import style from './FormTile.module.scss';
import { RootState } from '../../store/store';

export function FormTile() {
  const formData = useSelector((state: RootState) => state.dataSlice.formData);
  //console.log(formData);

  return (
    <div className={style['tile-container']}>
      {formData
        .filter((_, index) => index !== 0)
        .map((item, index) => (
          <div key={index} className={style['tile-item']}>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key}: {String(value)}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
}
