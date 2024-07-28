import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { ApiResponse } from '../../interfaces/interfaces';
import { useSearchQuery } from '../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './../../context/useTheme';
import { useSearchPlanetQuery } from '../../services/planets';
import { RootState } from '../../store/store';
import { switchLoading } from '../../store/loadingSlice';
import { setTotalPages, switchPage } from '../../store/pageSlice';
import { setResults } from '../../store/searchResults';

interface HeaderProps {
  updateResults: (results: ApiResponse) => void;
}

export function Header({ updateResults }: HeaderProps) {
  const [errorOccured, setErrorOccured] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pageSlice.page);

  const [searchQuery, setSearchQuery] = useSearchQuery('');
  const { isStandartTheme, changeTheme } = useTheme();
  const { data, error, isFetching } = useSearchPlanetQuery({
    searchItem: searchQuery ?? '',
    currentPage: page,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValue);
    dispatch(switchPage(1));
    navigate('/search/1');
  };

  useEffect(() => {
    if (data) {
      updateResults(data);
      dispatch(setTotalPages(data.page.totalPages));
      dispatch(setResults(data));
    }
  }, [data, updateResults, dispatch]);

  useEffect(() => {
    dispatch(switchLoading(isFetching));
  }, [isFetching, dispatch]);

  const switchTheme = () => {
    changeTheme();
  };

  const getError = () => {
    setErrorOccured(!errorOccured);
  };

  if (errorOccured || error) {
    return <div>An error occurred. Please try again later.</div>;
  }

  return (
    <form
      className={`${styles.header} ${!isStandartTheme ? styles.alternative : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.header__search}
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
