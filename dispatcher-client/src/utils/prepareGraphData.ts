import { IArticle } from './types/APITypes';
import { formatAreaChartDate } from './dateFormat';

export interface IGraphItem {
  name: string;
  value: number;
}

type dataObjType = { [key: string]: number };

const createArrGraphItems = (obj: dataObjType): IGraphItem[] => {
  const dataArr: IGraphItem[] = [];
  Object.entries(obj).forEach((el) => {
    const graphItem: IGraphItem = { name: el[0], value: el[1] };
    dataArr.push(graphItem);
  });
  return dataArr;
};

const addEmptyData = (arrayData: IGraphItem[], value: number): IGraphItem[] => {
  arrayData.push({ name: '', value });
  arrayData.unshift({ name: '\xa0', value });
  return arrayData;
};

export const prepareDoughnutData = (articles: IArticle[]): IGraphItem[] => {
  const sourcesObj: dataObjType = {};
  articles.forEach((article) => {
    sourcesObj[article.source.name]
      ? sourcesObj[article.source.name]++
      : (sourcesObj[article.source.name] = 1);
  });
  return createArrGraphItems(sourcesObj).sort((a, b) => b.value - a.value);
};

export const prepareAreaChartData = (articles: IArticle[]): IGraphItem[] => {
  const datesObj: dataObjType = {};
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf()
  );
  sortedArticles.forEach((article) => {
    const formattedDate = formatAreaChartDate(article.publishedAt);
    datesObj[formattedDate]
      ? datesObj[formattedDate]++
      : (datesObj[formattedDate] = 1);
  });
  const arrGraphItems = createArrGraphItems(datesObj);
  return arrGraphItems.length > 1
    ? arrGraphItems
    : addEmptyData(arrGraphItems, arrGraphItems[0].value);
};
