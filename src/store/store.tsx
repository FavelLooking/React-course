import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import { SelectedItemsState } from './selectedItemsSlice';
import { planetsApi } from '../services/planets';
import { isLoadingSlice, LoadingState } from './loadingSlice';
import { pageSlice, PageState } from './pageSlice';

export const store: EnhancedStore<{
  selectedItems: SelectedItemsState;
  isLoading: LoadingState;
  pageSlice: PageState;
}> = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    isLoading: isLoadingSlice.reducer,
    pageSlice: pageSlice.reducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
