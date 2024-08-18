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
  isReactHookForm: false,
  userName: undefined,
  email: undefined,
  age: undefined,
  password: undefined,
  gender: undefined,
  isChecked: undefined,
  country: undefined,
  file: undefined,
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
