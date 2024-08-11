import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../interfaces/interfaces';

export interface SearchResultsState {
  results: ApiResponse | null;
}

const initialState: SearchResultsState = {
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
