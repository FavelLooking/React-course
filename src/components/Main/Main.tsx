import styles from './Main.module.scss';
import { CardItem } from '../CardItem/CardItem';
import { ApiResponse, AstronomicalObject } from '../../interfaces/interfaces';
import { Pagination } from '../Pagination/Pagination';
import { useClicked } from '../../context/useClicked';
import { Flyout } from '../Flyout/Flyout';
import { useTheme } from './../../context/useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Loader } from '../Loader/Loader';

export interface MainProps {
  searchResults?: ApiResponse | null;
}

export interface MainPropsExtended extends MainProps {
  onItemClick: (itemId: string) => void;
  hideDetails: () => void;
}

export function Main(props: MainPropsExtended) {
  const { searchResults, onItemClick, hideDetails } = props;
  const { clicked, setClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading,
  );

  if (!searchResults || isLoading) {
    return (
      <div
        className={`${styles.main} ${!isStandartTheme ? styles['alternative'] : ''} `}
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

  const { astronomicalObjects } = searchResults;

  return (
    <div
      className={
        clicked
          ? `${styles.main} ${styles['details-active']} ${styles['card-small']} ${!isStandartTheme ? styles['alternative'] : ''}`
          : `${styles.main} ${!isStandartTheme ? styles['alternative'] : ''} `
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
