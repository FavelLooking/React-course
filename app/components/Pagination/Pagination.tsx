import styles from './Pagination.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../src/context/useClicked';
import { useTheme } from './../../src/context/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../src/store/pageSlice';
import { RootState } from '../../src/store/store';
import React from 'react';
import { useRouter } from 'next/router';
import { switchLoading } from '../../src/store/loadingSlice';

export function Pagination() {
  const { clicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.pageSlice.page);
  const totalPages = useSelector(
    (state: RootState) => state.pageSlice.totalPages,
  );
  const router = useRouter();

  const handleNavigation = async (page: number) => {
    const query = router.query.q
      ? `?q=${encodeURIComponent(router.query.q as string)}`
      : '?q=';
    const newUrl = `/search/${page}${query}`;
    dispatch(switchLoading(true));
    await router.push(newUrl);
    dispatch(switchLoading(false));
  };

  return (
    <div
      className={`${styles.pagination} ${!isStandartTheme ? styles.alternative : ''}`}
    >
      <button
        className={stylesButton.button}
        onClick={() => {
          dispatch(previousPage());
          handleNavigation(currentPage - 1);
        }}
        disabled={clicked || currentPage === 1}
      >
        Previous
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        className={stylesButton.button}
        onClick={() => {
          dispatch(nextPage());
          handleNavigation(currentPage + 1);
        }}
        disabled={clicked || currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
