import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { IResponse } from '../../utils/types/APITypes';
import { fetchNewsData } from '../../services/newsService';

const initialState: IResponse = {
  status: 'idle',
  totalResults: -1,
  articles: [],
};

export const fetchNews: AsyncThunk<any, void, {}> = createAsyncThunk(
  'api/fetchNews',
  async () => {
    try {
      const response = await fetchNewsData();
      const data = response.data;
      console.log(data);
      return data;
    } catch (err) {
      throw new Error('Could not fetch news');
    }
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.status = 'loading';
    },
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = [...state.articles, ...action.payload.articles];
    },
    [fetchNews.rejected.type]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice.reducer;
