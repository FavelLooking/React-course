import { useDispatch, useSelector } from 'react-redux';
import styles from './Flyout.module.scss';
import stylesButton from '../Button/Button.module.scss';
import type { RootState } from './../../store/store';
import { unselect } from './../../store/selectedItemsSlice';
import { useState, useRef, useEffect } from 'react';

export function Flyout() {
  const dispatch = useDispatch();
  const isElementsSelect = useSelector(
    (state: RootState) => state.selectedItems.items.length > 0,
  );
  const itemNumber = useSelector(
    (state: RootState) => state.selectedItems.items.length,
  );
  const selectedElements = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  const unselectAll = () => {
    dispatch(unselect());
  };

  const [url, setUrl] = useState<string | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (url && linkRef.current) {
      linkRef.current.click();
      URL.revokeObjectURL(url);
      setUrl(null);
    }
  }, [url]);

  const convertObjectToCSV = () => {
    if (selectedElements.length === 0) {
      return '';
    }

    const headers = Object.keys(selectedElements[0]).join(';');

    const rows = selectedElements
      .map((value) => Object.values(value).join(';'))
      .join('\n');

    return `${headers}\n${rows}`;
  };

  const downloadData = () => {
    const data = convertObjectToCSV();
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    setUrl(url);
  };

  return (
    <div
      className={
        isElementsSelect
          ? styles['flyout-container']
          : styles['flyout-container--hidden']
      }
    >
      <span>
        {itemNumber} objects {itemNumber === 1 ? 'is' : 'are'} selected
      </span>
      <div className={styles[`button-container`]}>
        <button
          type="button"
          onClick={unselectAll}
          className={`${styles['flyout__button']} ${stylesButton.button}`}
        >
          Unselect All
        </button>
        <button
          type="button"
          className={`${styles['flyout__button']} ${stylesButton.button}`}
          onClick={downloadData}
        >
          Download
        </button>
        {url && (
          <a
            className={styles.download}
            href={url}
            download={`${itemNumber}-Asctronomical-objects.csv`}
            ref={linkRef}
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
}
