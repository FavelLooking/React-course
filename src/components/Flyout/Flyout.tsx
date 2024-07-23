import { useSelector } from 'react-redux';
import styles from './Flyout.module.scss';
import type { RootState } from './../../store/store';

export function Flyout() {
  const selectedElements = useSelector(
    (state: RootState) => state.selectedItems.titles.length > 1,
  );
  const itemNumber = useSelector(
    (state: RootState) => state.selectedItems.titles.length,
  );

  return (
    <div
      className={
        selectedElements
          ? styles['flyout-container']
          : styles['flyout-container--hidden']
      }
    >
      <span>{itemNumber - 1} objects is selected</span>
    </div>
  );
}
