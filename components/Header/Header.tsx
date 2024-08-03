import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useSearchQuery } from '../../src/hooks/useSearch';
import { useTheme } from './../../src/context/useTheme';
import { useSearchPlanetQuery } from '../../src/services/planets';
import { RootState } from '../../src/store/store';
import { switchLoading } from '../../src/store/loadingSlice';
import { setTotalPages, switchPage } from '../../src/store/pageSlice';
import { setResults } from '../../src/store/searchResults';
import { useRouter } from 'next/router';

export function Header() {
  const [errorOccured, setErrorOccured] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
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
    router.push('/search/1');
  };

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(data.page.totalPages));
      dispatch(setResults(data));
    }
  }, [data, dispatch]);

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
