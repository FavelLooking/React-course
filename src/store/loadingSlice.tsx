import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: true,
};

export const isLoadingSlice = createSlice({
  name: 'selectedItems',
  initialState: initialState,
  reducers: {
    switchLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { switchLoading } = isLoadingSlice.actions;
