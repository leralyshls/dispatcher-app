import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  [key: string]: string;
  country: string;
  endpoint: string;
  q: string;
  to: string;
  language: string;
  sortBy: string;
  category: string;
  sources: string;
}

interface FilterItemPayload {
  key: string;
  value: string;
}

const initialState: IFilterState = {
  country: 'il',
  endpoint: 'top-headlines',
  q: '',
  to: '',
  language: '',
  sortBy: '',
  category: '',
  sources: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    updateFilter: (state, action: PayloadAction<FilterItemPayload>) => {
      state[action.payload.key] = action.payload.value;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.q = action.payload;
    },
    setEndpoint(state, action: PayloadAction<FilterItemPayload>) {
      state[action.payload.key] = action.payload.value;
      state.country = '';
      state.to = '';
      state.language = '';
      state.sortBy = '';
      state.category = '';
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
