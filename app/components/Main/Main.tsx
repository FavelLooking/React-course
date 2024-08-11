import styles from './Main.module.scss';
import { CardItem } from '../CardItem/CardItem';
import { AstronomicalObject } from '../../src/interfaces/interfaces';
import { Pagination } from '../Pagination/Pagination';
import { useClicked } from '../../src/context/useClicked';
import { Flyout } from '../Flyout/Flyout';
import { useTheme } from './../../src/context/useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/store/store';
import { Loader } from '../Loader/Loader';
import React from 'react';
import { ApiResponse } from '../../src/interfaces/interfaces';

export interface MainProps {
  onItemClick: (itemId: string) => void;
  hideDetails: () => void;
  serversideData: ApiResponse;
}

export function Main(props: MainProps) {
  const { onItemClick, hideDetails, serversideData } = props;
  const { clicked, setClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading,
  );

  if (!serversideData || isLoading) {
    return (
      <div
        className={`${styles.main} ${!isStandartTheme ? styles.alternative : ''} `}
      >
        <Loader />
      </div>
    );
  }

  const handleItemClick = (itemId: string) => {
    setClicked(true);
    onItemClick(itemId);
  };

  const handleCloseDetails = () => {
    if (clicked) {
      setClicked(false);
      hideDetails();
    }
  };

  const { astronomicalObjects } = serversideData;

  return (
    <div
      className={
        clicked
          ? `${styles.main} ${styles['details-active']} ${styles['card-small']} ${!isStandartTheme ? styles['alternative'] : ''}`
          : `${styles.main} ${!isStandartTheme ? styles.alternative : ''} `
      }
      onClick={handleCloseDetails}
    >
      {astronomicalObjects && astronomicalObjects.length > 0 ? (
        <>
          {astronomicalObjects.map((item: AstronomicalObject) => (
            <CardItem
              key={item.uid}
              title={item.name}
              location={item?.location?.name || ''}
              astronomicalObjectType={item.astronomicalObjectType}
              onClick={() => handleItemClick(item.uid)}
            />
          ))}
          <Pagination />
          <Flyout />
        </>
      ) : (
        <p className={styles['no-results']}>No search results found</p>
      )}
    </div>
  );
}
