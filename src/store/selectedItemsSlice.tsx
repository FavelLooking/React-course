import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedItemsState {
  [title: string]: boolean;
}

const initialState: SelectedItemsState = { '': false };

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    uncheck: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
  },
});

export const { check, uncheck } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
