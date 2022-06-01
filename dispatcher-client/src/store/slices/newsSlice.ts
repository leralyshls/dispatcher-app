import { RootState } from '../store';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { IResponseNews } from '../../utils/types/APITypes';
import { fetchNewsData } from '../../services/newsApiService';

interface INewsState extends IResponseNews {
  page: number;
}
const initialState: INewsState = {
  status: 'idle',
  totalResults: -1,
  articles: [],
  page: 1,
};

export const fetchNews: AsyncThunk<any, void, { state: RootState }> =
  createAsyncThunk(
    'news/fetchNews',
    async (_, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const filters = state.filters;
      const page = state.news.page;
      try {
        const response = await fetchNewsData(filters, page);
        return response.data;
      } catch (err) {
        return rejectWithValue(JSON.stringify(err));
      }
    }
  );

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // addMoreData(state, action: PayloadAction<INewsState>) {
    //   state.articles = [...state.articles, ...action.payload.articles];
    //   state.totalResults = action.payload.totalResults;
    //   state.status = action.payload.status;
    // },
  },
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.status = 'loading';
    },
    [fetchNews.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseNews>
    ) => {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = action.payload.articles;
    },
    [fetchNews.rejected.type]: (state) => {
      state.status = 'error';
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
