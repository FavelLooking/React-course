import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import { ApiResponse } from './interfaces/interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [isLoading, setLoadingStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(page || '1', 10),
  );
  const [maxPage, setMaxPage] = useState<number | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isDetailsLoading, setDetailsLoadingStatus] = useState(false);

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

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
    navigate(`${location.pathname}&details=${itemId}`);
  };

  const handleCloseDetails = () => {
    setSelectedItemId(null);
    navigate(`/search/${currentPage}`);
  };

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
      <div className="main-content">
        <Main
          searchResults={searchResults}
          isLoading={isLoading}
          currentPage={currentPage}
          setCurrentPage={changePage}
          onItemClick={handleItemClick}
          hideDetails={handleCloseDetails}
        />
        {selectedItemId && (
          <Details
            itemId={selectedItemId}
            onClose={handleCloseDetails}
            setLoading={setDetailsLoadingStatus}
            isLoading={isDetailsLoading}
          />
        )}
      </div>
    </div>
  );
}
