import { Component, ChangeEvent } from 'react';
import './Header.css';
import { ApiResponse } from '../../interfaces/interfaces';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
}

interface HeaderState {
  lastSearch: string;
}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      lastSearch: '',
    };
  }

  componentDidMount() {
    const savedSearch = localStorage.getItem('lastSearch');
    if (savedSearch) {
      this.setState({ lastSearch: savedSearch });
      this.getSearchResult(savedSearch);
    } else {
      this.getSearchResult('');
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ lastSearch: event.target.value.trim() });
  };

  handleSearch = () => {
    const { lastSearch } = this.state;
    if (!lastSearch) {
      this.getSearchResult('');
    } else {
      localStorage.setItem('lastSearch', lastSearch);
      this.getSearchResult(lastSearch);
    }
  };

  getSearchResult = (searchItem: string) => {
    fetch('https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=4', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: searchItem,
      }),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        console.log(data);
        this.props.updateResults(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    return (
      <div className="header">
        <input
          className="header__search"
          type="text"
          placeholder="Search"
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}
