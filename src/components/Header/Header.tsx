import { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <input type="text" placeholder='search' />
          <button type='submit'>Search</button>
        </div>
      </>
    );
  }
}
