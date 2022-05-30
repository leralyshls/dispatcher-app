import React, { useState } from 'react';
import { IArticle } from '../../../../utils/types/APITypes';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  const getMoreData = () => {
    setPage((page) => page + 1);
    setNews([...news, ...topHeadlinesResponses[page + 1].articles]);
    setHasMore(topHeadlinesResponses[page + 1].articles.length > 0);
  };
  return (
    <CardsContainer id='scrollableDiv'>
      <InfiniteScroll
        dataLength={news.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={null}
        scrollableTarget='scrollableDiv'
      >
        {news.map((article: IArticle) => (
          <CardPrimary
            key={article.title}
            urlToImage={article.urlToImage}
            title={article.title}
            publishedAt={article.publishedAt}
            source={article.source}
            content={article.content}
            author={article.author}
            description={article.description}
            url={article.url}
          />
        ))}
      </InfiniteScroll>
    </CardsContainer>
  );
};
export default NewsWidget;
