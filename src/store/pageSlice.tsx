import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  page: number;
  totalPages: number;
}

const initialState: PageState = {
  page: 1,
  totalPages: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    switchPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      state.page -= 1;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { switchPage, nextPage, previousPage, setTotalPages } =
  pageSlice.actions;
