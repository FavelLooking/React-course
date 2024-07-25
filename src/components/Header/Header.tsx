import React, { useState, useEffect, useCallback } from 'react';
import styles from './Header.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { ApiResponse } from '../../interfaces/interfaces';
import { useSearchQuery } from '../CustomHooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './../../context/useTheme';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
  setLoading: (isLoading: boolean) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export function Header({
  updateResults,
  setLoading,
  setCurrentPage,
  currentPage,
}: HeaderProps) {
  const [errorOccured, setErrorOccured] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchQuery('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const { isStandartTheme, changeTheme } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValue);
    setCurrentPage(1);
    navigate('/search/1');
  };

  const getSearchResult = useCallback(
    async (searchItem: string, page: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=${page - 1}`,
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

  const switchTheme = () => {
    changeTheme();
  };

  const getError = () => {
    setErrorOccured(!errorOccured);
  };

  if (errorOccured) {
    throw new Error('Universe error');
  }

  return (
    <form
      className={`${styles[`header`]}  ${!isStandartTheme ? styles[`alternative`] : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles[`header__search`]}
        type="text"
        placeholder="Enter planet or star name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={stylesButton.button} type="submit">
        Search
      </button>
      <button className={stylesButton.button} type="button" onClick={getError}>
        Get Error
      </button>
      <button
        className={stylesButton.button}
        type="button"
        onClick={switchTheme}
      >
        Next Theme
      </button>
    </form>
  );
}
