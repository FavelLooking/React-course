import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import { SelectedItemsState } from './selectedItemsSlice';
import { planetsApi } from '../services/planets';

export const store: EnhancedStore<{
  selectedItems: SelectedItemsState;
}> = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
