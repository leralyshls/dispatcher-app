import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface FilterState {
  country: string;
}

// Define the initial state using that type
const initialState: FilterState = {
  country: 'Israel',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCountry(state, action) {
      state.country = action.payload.country;
    },
  },
});

export const countryActions = filterSlice.actions;

export default filterSlice.reducer;
