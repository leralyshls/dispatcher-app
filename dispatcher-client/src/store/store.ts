import { configureStore } from '@reduxjs/toolkit';
import apiRequestSlice from './slices/apiRequestSlice';
import filterSlice from './slices/filterSlice';

const store = configureStore({
  reducer: { filter: filterSlice, data: apiRequestSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
