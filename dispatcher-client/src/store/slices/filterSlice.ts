import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface FilterItem {
  name: string;
  id: string;
}

interface IFilter {
  country: string;
  endpoint: FilterItem;
  searchInput: string;
  date: string;
  language: string;
  sortBy: string;
  category: string;
  source: string;
}

const initialState: IFilter = {
  country: 'Israel',
  endpoint: { name: 'Top Headlines', id: 'top-headlines' },
  searchInput: '',
  date: '',
  language: '',
  sortBy: '',
  category: '',
  source: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    setEndpoint(state, action: PayloadAction<FilterItem>) {
      state.endpoint = action.payload;
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSource(state, action: PayloadAction<string>) {
      state.source = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
