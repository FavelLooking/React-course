import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from 'src/interfaces/interfaces';

export interface SearchResults {
  results: ApiResponse | null;
}

const initialState: SearchResults = {
  results: null,
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: initialState,
  reducers: {
    setResults: (state, action: PayloadAction<ApiResponse>) => {
      state.results = action.payload;
    },
  },
});

export const { setResults } = searchResultsSlice.actions;
