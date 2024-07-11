import { Component } from 'react';
import './Main.css';
import planet from './../../assets/planet.gif';
import CardItem from '../CardItem/CardItem';
import { MainProps } from '../../interfaces/interfaces';

export default class Main extends Component<MainProps> {
  render() {
    const { searchResults, isLoading } = this.props;

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
          astronomicalObjects.map((item) => (
            <CardItem
              key={item.uid}
              title={item.name}
              location={item?.location?.name || ''}
            />
          ))
        ) : (
          <p className="no-results">No search results found</p>
        )}
      </div>
    );
  }
}
