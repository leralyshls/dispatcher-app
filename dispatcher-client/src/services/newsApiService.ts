import axios from '../axios/config';
import { IFilterState } from '../store/slices/filterSlice';

const buildAxiosParams = (
  page: number,
  params: IFilterState,
  pageSize: number = 10
) => {
  const { endpoint, sources, country, category, q, from, sortBy, language } =
    params;
  let paramsObj;

  if (endpoint === 'top-headlines' && sources === '') {
    paramsObj = { country, category, q, pageSize };
  } else if (endpoint === 'top-headlines' && sources !== '') {
    paramsObj = { sources, q, pageSize };
  } else {
    paramsObj = { q, sources, from, sortBy, language, pageSize };
  }
  paramsObj = {
    ...paramsObj,
    pageSize: pageSize.toString(),
    page: page.toString(),
  };
  const searchParams = new URLSearchParams(paramsObj);
  return searchParams;
};

export const fetchNewsData = async (state: IFilterState, page: number = 1) => {
  const { endpoint } = state;
  const params = buildAxiosParams(page, state);
  const res = await axios.get(`/${endpoint}`, { params });
  if (res.status === 200) return res;
  else throw new Error('Could not fetch news');
};

export const fetchSourcesData = async () => {
  const res = await axios.get(`/top-headlines/sources`);
  if (res.status === 200) return res;
  else throw new Error('Could not fetch sources');
};
