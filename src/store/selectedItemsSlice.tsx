import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  title: string;
  location: string;
  object: string;
}

export interface SelectedItemsState {
  items: Item[];
}

const initialState: SelectedItemsState = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    uncheck: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter(
        (item) => item.title !== action.payload.title,
      );
    },
    unselect: (state) => {
      state.items = [];
    },
  },
});

export const { check, uncheck, unselect } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
