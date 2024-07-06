import { Component } from 'react';
import './CardItem.css';
import ItemProps from '../../interfaces/interfaces';

export default class CardItem extends Component<ItemProps> {
  render() {
    return (
      <div className="card-item">
        <span className="name-title">
          Name: <span className="title">{this.props.title}</span>
        </span>
        {this.props.location ? (
          <span className="location-title">
            Location: <span className="location">{this.props.location}</span>
          </span>
        ) : (
          <span className="location"></span>
        )}
      </div>
    );
  }
}
