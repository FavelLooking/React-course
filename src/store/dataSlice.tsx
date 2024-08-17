import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { countries } from '../utils/countries';

export interface DataState {
  userName: undefined | string;
  age: undefined | number;
  email: undefined | string;
  password: undefined | string;
  isChecked: undefined | boolean;
  gender: undefined | string;
  file: string | undefined;
  country: undefined | string;
  isReactHookForm: undefined | boolean;

  countries?: string[];
}

const initialData: DataState = {
  userName: undefined,
  age: undefined,
  email: undefined,
  password: undefined,
  gender: undefined,
  isChecked: undefined,
  file: undefined,
  country: undefined,
  isReactHookForm: false,
};

const initialState = {
  formData: [initialData],
  countries: countries,
};

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: initialState,
  reducers: {
    save: (state, action: PayloadAction<DataState>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { save } = dataSlice.actions;
