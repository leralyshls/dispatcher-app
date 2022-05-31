// import axios from '../axios/config';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchNewsData = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  if (res.status === 200) return res;
  else throw new Error('Could not fetch news');
};
