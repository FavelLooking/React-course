import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useTheme } from './../../src/context/useTheme';
import { switchLoading } from '../../src/store/loadingSlice';
import { setTotalPages } from '../../src/store/pageSlice';
import { setResults } from '../../src/store/searchResults';
import { useRouter } from 'next/router';
import { ApiResponse } from '../../src/interfaces/interfaces';

interface HeaderProps {
  serversideData: ApiResponse;
}

export const Header: React.FC<HeaderProps> = ({ serversideData }) => {
  const [errorOccured, setErrorOccured] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isStandartTheme, changeTheme } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await router.push(`/search/1?q=${encodeURIComponent(inputValue)}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (serversideData) {
      dispatch(setTotalPages(serversideData.page.totalPages));
      dispatch(setResults(serversideData));
    }
  }, [serversideData, dispatch]);

  useEffect(() => {
    dispatch(switchLoading(isLoading));
  }, [isLoading, dispatch]);

  const switchTheme = () => {
    changeTheme();
  };

  const getError = () => {
    setErrorOccured(!errorOccured);
  };

  if (errorOccured) {
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
};
