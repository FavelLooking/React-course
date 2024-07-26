import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentDetailsState {
  details: {
    name: string;
    location: string;
    type: string;
  };
}

const initialState: CurrentDetailsState = {
  details: {
    name: '',
    location: '',
    type: '',
  },
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
  },
});

export const { changeDetails } = currentDetailsSlice.actions;
