import React, { useEffect } from 'react';
import styles from '../../styles/App.module.scss';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { Details } from '../../components/Details/Details';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../src/store/store';
import { switchPage } from '../../src/store/pageSlice';
import { changeItemId } from '../../src/store/currentDetails';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

import localFont from 'next/font/local';
import { useRouter } from 'next/router';
const myFont = localFont({ src: '../../public/fonts/D3Euronism.ttf' });

const App = () => {
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();

  const totalPages = useSelector(
    (state: RootState) => state.pageSlice.totalPages,
  );
  const item = useSelector(
    (state: RootState) => state.currentDetails.currentId,
  );
  const currentPage = useSelector((state: RootState) => state.pageSlice.page);

  useEffect(() => {
    if (!page) {
      router.push('/search/1');
      return;
    }

    const pageNumber = parseInt(page as string, 10);

    if (
      isNaN(pageNumber) ||
      pageNumber <= 0 ||
      (totalPages && pageNumber > totalPages)
    ) {
      router.push('/not-found');
    } else {
      dispatch(switchPage(pageNumber));
    }
  }, [page, router, totalPages, dispatch]);

  const handleItemClick = (itemId: string) => {
    dispatch(changeItemId(itemId));
    router.push(`${location.pathname}&details=${itemId}`);
  };

  const handleCloseDetails = () => {
    dispatch(changeItemId(''));
    router.push(`/search/${currentPage}`);
  };

  return (
    <Provider store={store}>
      <div
        className={`${styles.wrapper} ${myFont.className}`}
        data-testid="app-wrapper"
      >
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <div className={styles['main-content']} data-testid="main-content">
          <Main
            onItemClick={handleItemClick}
            hideDetails={handleCloseDetails}
          />
          {item && <Details onClose={handleCloseDetails} />}
        </div>
      </div>
    </Provider>
  );
};

export default App;
