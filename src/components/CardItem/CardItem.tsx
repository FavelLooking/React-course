import { Component } from 'react';
import './CardItem.css';
import ComicsProps from '../../intefaces/interfaces';

export default class CardItem extends Component<ComicsProps> {
  render() {
    return (
      <div className="card-item">
        <span className="title">{this.props.title}</span>
        <span className="year">{this.props.year}</span>
      </div>
    );
  }
}
