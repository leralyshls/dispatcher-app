import { IArticle } from './types/APITypes';

export interface IGraphItem {
  name: string;
  value: number;
}

type dataObjType = { [key: string]: number };

export const prepareDoughnutData = (articles: IArticle[]) => {
  const dataObj: dataObjType = {};
  const dataArr: IGraphItem[] = [];
  articles.forEach((article) => {
    dataObj[article.source.name]
      ? dataObj[article.source.name]++
      : (dataObj[article.source.name] = 1);
  });
  Object.entries(dataObj).map((el) => {
    const graphItem: IGraphItem = {
      name: el[0],
      value: el[1],
    };
    dataArr.push(graphItem);
  });
  return dataArr.sort((a, b) => b.value - a.value);
};

export const prepareAreaChartData = (data: IArticle[]) => {
  // console.log(data);
};
