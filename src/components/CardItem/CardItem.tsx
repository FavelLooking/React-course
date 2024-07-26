import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './../../store/store';
import styles from './CardItem.module.scss';
import { check, uncheck } from './../../store/selectedItemsSlice';
import { Item } from './../../store/selectedItemsSlice';
import { useTheme } from './../../context/useTheme';

export interface ItemProps {
  title: string;
  location?: string;
  astronomicalObjectType: string;

  onClick: () => void;
}

export function CardItem({
  title,
  location,
  astronomicalObjectType,
  onClick,
}: ItemProps) {
  const dispatch = useDispatch();
  const isSelect = useSelector((state: RootState) =>
    state.selectedItems.items.some((item) => item.title === title),
  );
  const { isStandartTheme } = useTheme();

  const handleChange = () => {
    const itemToUpdate: Item = {
      title,
      location: location ?? '',
      object: astronomicalObjectType,
    };

    if (isSelect) {
      dispatch(uncheck(itemToUpdate));
    } else {
      dispatch(check(itemToUpdate));
    }
  };

  const renderTitle = () => (
    <span className={styles['name-title']}>
      Name:{' '}
      <span
        className={title.length > 30 ? styles['title-small'] : styles['title']}
      >
        {title}
      </span>
    </span>
  );

  const renderLocation = () => (
    <span className={styles['location-title']}>
      Location:{' '}
      <span
        className={
          location
            ? location.length > 20
              ? styles['location-small']
              : styles['location']
            : styles['location']
        }
      >
        {location || 'Unknown'}
      </span>
    </span>
  );

  const renderAstronomicalObjectType = () => (
    <span className={styles['type-title']}>
      Object Type:{' '}
      <span
        className={
          astronomicalObjectType.length > 20
            ? styles['type-small']
            : styles['type']
        }
      >
        {astronomicalObjectType}
      </span>
    </span>
  );

  return (
    <div
      className={`${styles['card-container']} ${!isStandartTheme ? styles['alternative'] : ''}`}
    >
      <div className={styles['card-item']} onClick={onClick}>
        {renderTitle()}
        {renderLocation()}
        {renderAstronomicalObjectType()}
      </div>
      <input
        type="checkbox"
        className={styles['checkbox']}
        title={title}
        checked={isSelect}
        onChange={handleChange}
      />
    </div>
  );
}
