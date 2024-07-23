import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import { SelectedItemsState } from './selectedItemsSlice';

export const store: EnhancedStore<{
  selectedItems: SelectedItemsState;
}> = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
