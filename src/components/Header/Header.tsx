import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';
import { ApiResponse } from '../../interfaces/interfaces';
import useSearchQuery from '../CustomHooks/useSearch';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
  setLoading: (isLoading: boolean) => void;
}

export default function Header({ updateResults, setLoading }: HeaderProps) {
  const [errorOccured, setErrorOccured] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchQuery('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValue);
  };

  const getSearchResult = useCallback(
    async (searchItem: string) => {
      setLoading(true);
      try {
        const response = await fetch(
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
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse = await response.json();
        updateResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    },
    [updateResults, setLoading],
  );

  useEffect(() => {
    if (searchQuery !== '') {
      getSearchResult(searchQuery);
    } else getSearchResult('');
  }, [searchQuery, getSearchResult]);

  const getError = () => {
    setErrorOccured(!errorOccured);
  };

  if (errorOccured) {
    throw new Error('Universe error');
  }

  return (
    <form className="header" onSubmit={handleSubmit}>
      <input
        className="header__search"
        type="text"
        placeholder="Enter planet or star name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={getError}>
        Get Error
      </button>
    </form>
  );
}
