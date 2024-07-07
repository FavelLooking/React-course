import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ApiResponse } from './interfaces/interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    searchResults: null,
    isLoading: false,
  };

  updateSearchResults = (results: ApiResponse) => {
    this.setState({ searchResults: results });
  };

  setLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <ErrorBoundary>
            <Header
              updateResults={this.updateSearchResults}
              setLoading={this.setLoading}
            ></Header>
          </ErrorBoundary>
          <Main
            searchResults={this.state.searchResults}
            isLoading={this.state.isLoading}
          ></Main>
        </div>
      </>
    );
  }
}

export default App;
