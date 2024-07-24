import styles from './Main.module.scss';
import planet from '../../assets/images/Planet.gif';
import planetAlt from '../../assets/images/Planet-alternative.gif';
import { CardItem } from '../CardItem/CardItem';
import { ApiResponse, AstronomicalObject } from '../../interfaces/interfaces';
import { Pagination } from '../Pagination/Pagination';
import { useClicked } from '../../context/useClicked';
import { Flyout } from '../Flyout/Flyout';
import { useTheme } from './../../context/useTheme';

export interface MainProps {
  searchResults?: ApiResponse | null;
  isLoading: boolean;
}

export interface MainPropsExtended extends MainProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onItemClick: (itemId: string) => void;
  hideDetails: () => void;
}

export function Main(props: MainPropsExtended) {
  const {
    searchResults,
    isLoading,
    currentPage,
    setCurrentPage,
    onItemClick,
    hideDetails,
  } = props;
  const { clicked, setClicked } = useClicked();
  const { isStandartTheme } = useTheme();

  if (!searchResults || isLoading) {
    return (
      <div
        className={`${styles.main} ${!isStandartTheme ? styles['alternative'] : ''} `}
      >
        <div className={styles.loader}>
          <img src={!isStandartTheme ? planetAlt : planet} alt="loader" />
        </div>
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

  const { astronomicalObjects, page } = searchResults;

  return (
    <div
      className={
        clicked
          ? `${styles.main} ${styles['details-active']} ${styles['card-small']} ${!isStandartTheme ? styles['alternative'] : ''}`
          : `${styles.main} ${!isStandartTheme ? styles['alternative'] : ''} `
      }
      onClick={handleCloseDetails}
    >
      {astronomicalObjects.length > 0 ? (
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
          <Pagination
            currentPage={currentPage}
            totalPages={page.totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <Flyout />
        </>
      ) : (
        <p className={styles['no-results']}>No search results found</p>
      )}
    </div>
  );
}
