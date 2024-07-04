import { Component } from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';
import ComicsProps from '../../intefaces/interfaces';

export default class Main extends Component {
  constructor(props: ComicsProps) {
    super(props);
    this.state = {
      comicsData: [
        { title: `1`, year: `2000` },
        { title: `2`, year: `2000` },
        { title: `3`, year: `2000` },
        { title: `4`, year: `2000` },
        { title: `5`, year: `2000` },
        { title: `6`, year: `2000` },
      ],
    };
  }

  render() {
    return (
      <div className="main">
        {this.state.comicsData.map((item: ComicsProps, index: number) => (
          <CardItem key={index} title={item.title} year={item.year} />
        ))}
      </div>
    );
  }
}
