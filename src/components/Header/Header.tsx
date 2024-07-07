import { Component, ChangeEvent } from 'react';
import './Header.css';
import { ApiResponse } from '../../interfaces/interfaces';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
  setLoading: (isLoading: boolean) => void;
}

interface HeaderState {
  lastSearch: string;
  errorOccured: boolean;
}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      lastSearch: '',
      errorOccured: false,
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
    this.props.setLoading(true);
    fetch(
      'https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: searchItem,
        }),
      },
    )
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        this.props.updateResults(data);
        this.props.setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.props.setLoading(false);
      });
  };

  getError = () => {
    this.setState({ errorOccured: !this.state.errorOccured });
  };

  render() {
    if (this.state.errorOccured) {
      throw new Error('Universe error');
    }
    return (
      <div className="header">
        <input
          className="header__search"
          type="text"
          placeholder="Enter planet or star name"
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleSearch}>
          Search
        </button>
        <button type="submit" onClick={this.getError}>
          Get Error
        </button>
      </div>
    );
  }
}
