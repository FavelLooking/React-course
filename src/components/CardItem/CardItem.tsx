import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './../../store/store';
import styles from './CardItem.module.scss';
import { check, uncheck } from './../../store/selectedItemsSlice';

export interface ItemProps {
  title: string;
  location?: string;
  astronomicalObjectType: string;

  onClick: () => void;
}

export function CardItem(props: ItemProps) {
  const { title, location, astronomicalObjectType, onClick } = props;

  const isSelect = useSelector(
    (state: RootState) => state.selectedItems[title] ?? false,
  );
  console.log(isSelect);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (isSelect) {
      dispatch(uncheck(title));
    } else {
      dispatch(check(title));
    }
  };

  return (
    <>
      <div className={styles[`card-item`]} onClick={onClick}>
        <span className={styles[`name-title`]}>
          Name:{' '}
          <span
            className={
              title.length > 30 ? styles[`title-small`] : styles[`title`]
            }
          >
            {title}
          </span>
        </span>

        {location && (
          <span className={styles[`location-title`]}>
            Location:{' '}
            <span
              className={
                location.length > 20
                  ? styles[`location-small`]
                  : styles[`location`]
              }
            >
              {location}
            </span>
          </span>
        )}

        {!location && (
          <span className={styles[`location-title`]}>
            Location: <span className={styles[`location`]}>Unknown</span>
          </span>
        )}
        <span className={styles[`type-title`]}>
          Object Type:{' '}
          <span
            className={
              astronomicalObjectType.length > 20
                ? styles[`type-small`]
                : styles[`type`]
            }
          >
            {astronomicalObjectType}
          </span>
        </span>
      </div>
      <input
        type="checkbox"
        className={styles[`checkbox`]}
        title={title}
        checked={isSelect}
        onChange={handleChange}
      />
    </>
  );
}
