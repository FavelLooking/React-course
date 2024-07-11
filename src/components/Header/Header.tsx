import { useState, ChangeEvent, useEffect } from 'react';
import './Header.css';
import { ApiResponse } from '../../interfaces/interfaces';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
  setLoading: (isLoading: boolean) => void;
}

export default function Header(props: HeaderProps) {
  const [lastSearchResults, setLastSearchResults] = useState('');
  const [errorOccured, setErrorSwitcher] = useState(false);

  useEffect(() => {
    const savedSearch = localStorage.getItem('lastSearch') || '';
    setLastSearchResults(savedSearch);
    getSearchResult(savedSearch);
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setLastSearchResults(event.target.value.trim());
  }

  async function handleSearch() {
    try {
      localStorage.setItem('lastSearch', lastSearchResults);
      await getSearchResult(lastSearchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  }

  function getSearchResult(searchItem: string) {
    props.setLoading(true);
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
        props.updateResults(data);
        props.setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        props.setLoading(false);
      });
  }

  function getError() {
    setErrorSwitcher(!errorOccured);
  }

  if (errorOccured) {
    throw new Error('Universe error');
  }
  return (
    <div className="header">
      <input
        className="header__search"
        type="text"
        placeholder="Enter planet or star name"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      <button type="submit" onClick={getError}>
        Get Error
      </button>
    </div>
  );
}
