import { Component, ChangeEvent } from 'react';
import './Header.css';

export default class Header extends Component {
  state = {
    lastSearch: '',
  };

  componentDidMount() {
    const savedSearch = localStorage.getItem('lastSearch');
    if (savedSearch) {
      this.setState({ lastSearch: savedSearch });
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({ lastSearch: event.target.value.trim() });
      console.log(this.state);
    }
  };

  handleSearch = () => {
    const { lastSearch } = this.state;
    localStorage.setItem('lastSearch', lastSearch);
  };

  getSearchResult = () => {
    this.handleSearch();
    fetch('https://stapi.co/api/v1/rest/comics/search?pageNumber=1&pageSize=10')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  render() {
    return (
      <>
        <div className="header">
          <input
            className="header__search"
            type="text"
            placeholder="search"
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.getSearchResult}>
            Search
          </button>
        </div>
      </>
    );
  }
}
