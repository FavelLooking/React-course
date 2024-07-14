import './Main.css';
import planet from './../../assets/planet.gif';
import CardItem from '../CardItem/CardItem';
import { MainProps, AstronomicalObject } from '../../interfaces/interfaces';
import Pagination from '../Pagination/Pagination';

interface MainPropsExtended extends MainProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Main(props: MainPropsExtended) {
  const { searchResults, isLoading, currentPage, setCurrentPage } = props;

  if (!searchResults || isLoading) {
    return (
      <div className="main">
        <div className="loader">
          <img src={planet} alt="loader" />
        </div>
      </div>
    );
  }

  const { astronomicalObjects, page } = searchResults;

  return (
    <div className="main">
      {astronomicalObjects.length > 0 ? (
        <>
          {astronomicalObjects.map((item: AstronomicalObject) => (
            <CardItem
              key={item.uid}
              title={item.name}
              location={item?.location?.name || ''}
              astronomicalObjectType={item.astronomicalObjectType}
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
