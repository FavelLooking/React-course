import { createSlice } from '@reduxjs/toolkit';

interface SelectedItems {
  itemId: string | undefined;
  isSelect: boolean;
}

const initialState: SelectedItems = {
  itemId: undefined,
  isSelect: false,
};

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    check: (state) => {
      state.isSelect = true;
    },
    uncheck: (state) => {
      state.isSelect = false;
    },
  },
});

export const { check, uncheck } = selectedItemsSlice.actions;
