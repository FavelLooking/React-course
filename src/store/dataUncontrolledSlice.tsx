import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataUncontrolledState {
  userName: undefined | string;
  age: undefined | number;
  email: undefined | string;
  password: undefined | string;
  isChecked: undefined | boolean;
  file: string | undefined;
  country: undefined | string;
}

const initialData: DataUncontrolledState = {
  userName: undefined,
  age: undefined,
  email: undefined,
  password: undefined,

  isChecked: undefined,
  file: undefined,
  country: undefined,
};

const initialState = {
  formData: [initialData],
};

export const dataUncontrolledSlice = createSlice({
  name: 'dataUncontrolled',
  initialState: initialState,
  reducers: {
    save: (state, action: PayloadAction<DataUncontrolledState>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { save } = dataUncontrolledSlice.actions;
