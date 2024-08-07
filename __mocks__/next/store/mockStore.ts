import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const mockPageSlice = createSlice({
  name: 'pageSlice',
  initialState: {
    page: 1,
    totalPages: 10,
  },
  reducers: {},
});

const mockCurrentDetails = createSlice({
  name: 'currentDetails',
  initialState: {
    currentId: '',
    details: {
      name: '',
      location: '',
      type: '',
    },
  },
  reducers: {},
});

const mockIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: true,
  },
  reducers: {},
});

const mockSelectedSlice = createSlice({
  name: 'selectedItems',
  initialState: { items: [] },
  reducers: {},
});

export const mockNewStore = configureStore({
  reducer: {
    pageSlice: mockPageSlice.reducer,
    currentDetails: mockCurrentDetails.reducer,
    isLoading: mockIsLoadingSlice.reducer,
    selectedItems: mockSelectedSlice.reducer,
  },
});
