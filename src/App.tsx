import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { ApiResponse } from './interfaces/interfaces';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

export function App() {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(page || '1', 10),
  );

  const totalPages = useSelector(
    (state: RootState) => state.pageSlice.totalPages,
  );

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  useEffect(() => {
    if (!page) {
      navigate('/search/1');
    } else {
      const pageNumber = parseInt(page, 10);
      if (
        isNaN(pageNumber) ||
        pageNumber <= 0 ||
        (totalPages && pageNumber > totalPages)
      ) {
        navigate('/not-found');
      } else {
        setCurrentPage(pageNumber);
      }
    }
  }, [page, navigate, totalPages]);

  const updateSearchResults = useCallback((results: ApiResponse | null) => {
    setSearchResults(results);
  }, []);

  // const changePage = useCallback(
  //   (newPage: number) => {
  //     setCurrentPage(newPage);
  //     navigate(`/search/${newPage}`);
  //   },
  //   [navigate],
  // );

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
    navigate(`${location.pathname}&details=${itemId}`);
  };

  const handleCloseDetails = () => {
    setSelectedItemId(null);
    navigate(`/search/${currentPage}`);
  };

  return (
    <div className={styles['wrapper']}>
      <ErrorBoundary>
        <Header updateResults={updateSearchResults} />
      </ErrorBoundary>
      <div className={styles['main-content']}>
        <Main
          searchResults={searchResults}
          onItemClick={handleItemClick}
          hideDetails={handleCloseDetails}
        />
        {selectedItemId && (
          <Details itemId={selectedItemId} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
}
