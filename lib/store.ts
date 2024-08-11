import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import { SelectedItemsState } from './selectedItemsSlice';
import { planetsApi } from '../src/services/planets';
import { isLoadingSlice, LoadingState } from './loadingSlice';
import { pageSlice, PageState } from './pageSlice';
import { CurrentDetailsState, currentDetailsSlice } from './currentDetails';
import { searchResultsSlice, SearchResultsState } from './searchResults';

export const makeStore = (): EnhancedStore<{
  selectedItems: SelectedItemsState;
  isLoading: LoadingState;
  pageSlice: PageState;
  currentDetails: CurrentDetailsState;
  searchResults: SearchResultsState;
}> => {
  return configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      isLoading: isLoadingSlice.reducer,
      pageSlice: pageSlice.reducer,
      currentDetails: currentDetailsSlice.reducer,
      [planetsApi.reducerPath]: planetsApi.reducer,
      searchResults: searchResultsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(planetsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
