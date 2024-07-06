import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ApiResponse } from './interfaces/interfaces';

class App extends Component {
  state = {
    searchResults: null,
  };

  updateSearchResults = (results: ApiResponse) => {
    this.setState({ searchResults: results });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <Header updateResults={this.updateSearchResults}></Header>
          <Main searchResults={this.state.searchResults}></Main>
        </div>
      </>
    );
  }
}

export default App;
