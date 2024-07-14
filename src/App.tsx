import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ApiResponse } from './interfaces/interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [isLoading, setLoadingStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(page || '1', 10),
  );
  const [maxPage, setMaxPage] = useState<number | null>(null);

  useEffect(() => {
    if (!page) {
      navigate('/search/1');
    } else {
      const pageNumber = parseInt(page, 10);
      if (
        isNaN(pageNumber) ||
        pageNumber <= 0 ||
        (maxPage && pageNumber > maxPage)
      ) {
        navigate('/not-found');
      } else {
        setCurrentPage(pageNumber);
      }
    }
  }, [page, navigate, maxPage]);

  const updateSearchResults = useCallback((results: ApiResponse | null) => {
    setSearchResults(results);
    if (results) {
      setMaxPage(results.page.totalPages);
    }
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setLoadingStatus(isLoading);
  }, []);

  const changePage = useCallback(
    (newPage: number) => {
      setCurrentPage(newPage);
      navigate(`/search/${newPage}`);
    },
    [navigate],
  );

  return (
    <div className="wrapper">
      <ErrorBoundary>
        <Header
          updateResults={updateSearchResults}
          setLoading={setLoading}
          currentPage={currentPage}
          setCurrentPage={changePage}
        />
      </ErrorBoundary>
      <Main
        searchResults={searchResults}
        isLoading={isLoading}
        currentPage={currentPage}
        setCurrentPage={changePage}
      />
    </div>
  );
}
