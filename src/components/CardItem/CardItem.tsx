import { Component } from 'react';
import './CardItem.css';
import ItemProps from '../../interfaces/interfaces';

export default class CardItem extends Component<ItemProps> {
  render() {
    return (
      <div className="card-item">
        <span className="title">{this.props.title}</span>
        <span className="location">{this.props.location}</span>
      </div>
    );
  }
}
