import { configureStore } from '@reduxjs/toolkit';
import { dataUncontrolledSlice } from './dataUncontrolledSlice';

export default configureStore({
  reducer: { dataUncontrolledSlice: dataUncontrolledSlice.reducer },
});
