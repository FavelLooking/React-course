import './Main.css';
import planet from '../../assets/images/Planet.gif';
import { CardItem } from '../CardItem/CardItem';
import { ApiResponse, AstronomicalObject } from '../../interfaces/interfaces';
import { Pagination } from '../Pagination/Pagination';
import { useClicked } from '../../context/useClicked';

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

  if (!searchResults || isLoading) {
    return (
      <div className="main">
        <div className="loader">
          <img src={planet} alt="loader" />
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
      className={clicked ? 'main details-active' : 'main'}
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
        </>
      ) : (
        <p className="no-results">No search results found</p>
      )}
    </div>
  );
}
