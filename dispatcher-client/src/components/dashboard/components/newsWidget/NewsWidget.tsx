import React, { useState, useRef, useCallback } from 'react';
import { IArticle } from '../../../../utils/types/APITypes';
import { CardsContainer } from './styles';
import CardPrimary from '../../../cardPrimary/CardPrimary';
import topHeadlinesResponses from '../../../../mockData/topHeadlinesResponses.json';
import everything from '../../../../mockData/everything.json';

const NewsWidget = () => {
  const [page, setPage] = useState<number>(1);
  const [news, setNews] = useState<IArticle[]>(
    topHeadlinesResponses[page].articles
  );
  const [hasMore, setHasMore] = useState<boolean>(
    topHeadlinesResponses[page].articles.length > 0
  );
  const observer = useRef<IntersectionObserver>();
  const lastArticleElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((page) => page + 1);
          setNews([...news, ...topHeadlinesResponses[page + 1].articles]);
          setHasMore(topHeadlinesResponses[page + 1].articles.length > 0);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <CardsContainer>
      {news.map((article: IArticle, index: number) => {
        if (news.length === index + 1) {
          return (
            <CardPrimary
              ref={lastArticleElementRef}
              key={article.title}
              urlToImage={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              source={article.source}
              content={article.description}
            />
          );
        } else {
          return (
            <CardPrimary
              key={article.title}
              urlToImage={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              source={article.source}
              content={article.description}
            />
          );
        }
      })}
    </CardsContainer>
  );
};
export default NewsWidget;
