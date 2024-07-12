import './Main.css';
import planet from './../../assets/planet.gif';
import CardItem from '../CardItem/CardItem';
import { MainProps, AstronomicalObject } from '../../interfaces/interfaces';

export default function Main(props: MainProps) {
  const { searchResults, isLoading } = props;

  if (!searchResults || isLoading) {
    return (
      <div className="main">
        <div className="loader">
          <img src={planet} alt="loader" />
        </div>
      </div>
    );
  }

  const { astronomicalObjects } = searchResults;

  return (
    <div className="main">
      {astronomicalObjects.length > 0 ? (
        astronomicalObjects.map((item: AstronomicalObject) => (
          <CardItem
            key={item.uid}
            title={item.name}
            location={item?.location?.name || ''}
            astronomicalObjectType={item.astronomicalObjectType}
          />
        ))
      ) : (
        <p className="no-results">No search results found</p>
      )}
    </div>
  );
}
