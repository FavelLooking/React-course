import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedItemsState {
  titles: string[];
}

const initialState: SelectedItemsState = { titles: [''] };

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<string>) => {
      state.titles.push(action.payload);
    },
    uncheck: (state, action: PayloadAction<string>) => {
      state.titles = state.titles.filter((title) => title !== action.payload);
    },
  },
});

export const { check, uncheck } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
