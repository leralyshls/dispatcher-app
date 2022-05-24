import React from 'react';
import { CardsContainer } from './styles';
import CardPrimary from '../../../cardPrimary/CardPrimary';
import topHeadlinesPage from '../../../../mockData/topHeadlinesPage1.json';
import everything from '../../../../mockData/everything.json';

const NewsWidget: React.FC = () => {
  return (
    <CardsContainer>
      {topHeadlinesPage.articles.map((article) => (
        <CardPrimary
          key={article.title}
          urlToImage={article.urlToImage}
          title={article.title}
          publishedAt={article.publishedAt}
          source={article.source}
          content={article.description}
        />
      ))}
    </CardsContainer>
  );
};
export default NewsWidget;
