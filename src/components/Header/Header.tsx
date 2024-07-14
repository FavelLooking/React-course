import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';
import { ApiResponse } from '../../interfaces/interfaces';
import useSearchQuery from '../CustomHooks/useSearch';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
  setLoading: (isLoading: boolean) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export default function Header({
  updateResults,
  setLoading,
  setCurrentPage,
  currentPage,
}: HeaderProps) {
  const [errorOccured, setErrorOccured] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchQuery('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValue);
    setCurrentPage(1);
  };

  const getSearchResult = useCallback(
    async (searchItem: string, page: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=${page}`,
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
      getSearchResult(searchQuery, currentPage);
    } else getSearchResult('', currentPage);
  }, [searchQuery, currentPage, getSearchResult]);

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
