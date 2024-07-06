import { Component } from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';
import { MainProps } from '../../interfaces/interfaces';

export default class Main extends Component<MainProps> {
  render() {
    const { searchResults } = this.props;

    if (!searchResults) {
      return <p>Loading...</p>;
    }

    const { astronomicalObjects } = searchResults;
    console.log(astronomicalObjects);

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
          <p>No search results found</p>
        )}
      </div>
    );
  }
}
