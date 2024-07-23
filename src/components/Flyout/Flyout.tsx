import { useDispatch, useSelector } from 'react-redux';
import styles from './Flyout.module.scss';
import type { RootState } from './../../store/store';
import { unselect } from './../../store/selectedItemsSlice';

export function Flyout() {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state: RootState) => state.selectedItems.items.length > 0,
  );
  const itemNumber = useSelector(
    (state: RootState) => state.selectedItems.items.length,
  );

  const unselectAll = () => {
    dispatch(unselect());
  };

  return (
    <div
      className={
        selectedElements
          ? styles['flyout-container']
          : styles['flyout-container--hidden']
      }
    >
      <span>{itemNumber} objects is selected</span>
      <div className={styles[`button-container`]}>
        <button
          type="button"
          onClick={unselectAll}
          className={styles['flyout__button']}
        >
          Unselect All
        </button>
        <button type="button" className={styles['flyout__button']}>
          Download
        </button>
      </div>
    </div>
  );
}
