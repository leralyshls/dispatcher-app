import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import filterSlice from './slices/filterSlice';

const store = configureStore({
  reducer: { filter: filterSlice, data: newsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
