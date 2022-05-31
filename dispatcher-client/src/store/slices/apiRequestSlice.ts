import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResponse, IArticle } from '../../utils/types/APITypes';
import axios from 'axios';

const initialState: IResponse = {
  status: '',
  totalResults: -1,
  articles: [],
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setData(state, action: PayloadAction<IResponse>) {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = action.payload.articles;
    },
    addToData(state, action: PayloadAction<IResponse>) {
      state.status = action.payload.status;
      state.articles = [...state.articles, ...action.payload.articles];
      state.totalResults = action.payload.totalResults;
    },
  },
});

export const apiActions = apiSlice.actions;

export const fetchNews = () => async (dispatch: any) => {
  dispatch(apiActions.setStatus('pending'));
  const fetchNewsData = async () => {
    const res = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us'
    );
    if (res.status === 200) return res;
    else throw new Error('Could not fetch news');
  };
  try {
    const response = await fetchNewsData();
    const data = response.data;
    console.log(data);
    dispatch(apiActions.setData(data));
  } catch (err) {
    console.log(err);
    dispatch(apiActions.setStatus('error'));
  }
};

export default apiSlice.reducer;
