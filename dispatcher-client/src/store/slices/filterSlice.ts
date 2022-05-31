import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Dictionary = {
  [key: string]: string;
};

interface IState extends Dictionary {
  country: string;
  query: string;
  date: string;
  language: string;
  sortBy: string;
  category: string;
  sources: string;
}

interface FilterItemPayload {
  key: string;
  value: string;
}

const initialState: IState = {
  country: 'il',
  endpoint: 'top-headlines',
  query: '',
  date: '',
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
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
