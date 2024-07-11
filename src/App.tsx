import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ApiResponse } from './interfaces/interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export function App() {
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [isLoading, setLoadingStatus] = useState(false);

  function updateSearchResults(results: ApiResponse | null) {
    setSearchResults(results);
  }

  function setLoading(isLoading: boolean) {
    setLoadingStatus(isLoading);
  }

  return (
    <>
      <div className="wrapper">
        <ErrorBoundary>
          <Header
            updateResults={updateSearchResults}
            setLoading={setLoading}
          ></Header>
        </ErrorBoundary>
        <Main searchResults={searchResults} isLoading={isLoading}></Main>
      </div>
    </>
  );
}

export default App;
