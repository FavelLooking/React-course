import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentDetailsState {
  details: {
    name: string;
    location: string;
    type: string;
  };
  currentId: string;
}

const initialState: CurrentDetailsState = {
  details: {
    name: '',
    location: '',
    type: '',
  },
  currentId: '',
};

export const currentDetailsSlice = createSlice({
  name: 'currentDetails',
  initialState: initialState,
  reducers: {
    changeDetails: (
      state,
      action: PayloadAction<CurrentDetailsState['details']>,
    ) => {
      state.details = action.payload;
    },
    changeItemId: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    },
  },
});

export const { changeDetails, changeItemId } = currentDetailsSlice.actions;
