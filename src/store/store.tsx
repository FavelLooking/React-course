import { configureStore } from '@reduxjs/toolkit';
import { dataUncontrolledSlice } from './dataUncontrolledSlice';

export const store = configureStore({
  reducer: {
    dataUncontrolledSlice: dataUncontrolledSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
