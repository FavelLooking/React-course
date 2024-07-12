import { useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ApiResponse } from './interfaces/interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [isLoading, setLoadingStatus] = useState(false);

  const updateSearchResults = useCallback((results: ApiResponse | null) => {
    setSearchResults(results);
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setLoadingStatus(isLoading);
  }, []);

  return (
    <>
      <div className="wrapper">
        <ErrorBoundary>
          <Header updateResults={updateSearchResults} setLoading={setLoading} />
        </ErrorBoundary>
        <Main searchResults={searchResults} isLoading={isLoading} />
      </div>
    </>
  );
}
