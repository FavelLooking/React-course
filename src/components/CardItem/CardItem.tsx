import { Component } from 'react';
import './CardItem.css';
import ItemProps from '../../interfaces/interfaces';

export default class CardItem extends Component<ItemProps> {
  render() {
    const { title, location } = this.props;

    return (
      <div className="card-item">
        <span className="name-title">
          Name: <span className="title">{title}</span>
        </span>

        {location && (
          <span className="location-title">
            Location: <span className="location">{location}</span>
          </span>
        )}

        {!location && (
          <span className="location-title">
            Location: <span className="location">Unknown</span>
          </span>
        )}
      </div>
    );
  }
}
