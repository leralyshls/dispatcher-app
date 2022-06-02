import React from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { newsActions } from '../../../../store/slices/newsSlice';
import { scrollNews } from '../../../../store/slices/newsSlice';
import { IArticle } from '../../../../utils/types/APITypes';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector } from '../../../../store/hooks';
import { CardsContainer } from './styles';
import CardPrimary from '../../../cardPrimary/CardPrimary';
import { MAX_NUM_PAGE } from '../../../../utils/constants/maxValues';
// import topHeadlinesResponses from '../../../../mockData/topHeadlinesResponses.json';

const NewsWidget = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.articles);
  const totalResults = useAppSelector((state) => state.news.totalResults);
  const hasMore = useAppSelector((state) => state.news.hasMore);
  const page = useAppSelector((state) => state.news.page);

  const getMoreData = () => {
    if (hasMore && page < MAX_NUM_PAGE) {
      dispatch(newsActions.incrementPage());
      dispatch(scrollNews());
      const isMore = news.length < totalResults && page < MAX_NUM_PAGE;
      dispatch(newsActions.setHasMore(isMore));
    }
  };
  return (
    <CardsContainer id='scrollableDiv'>
      <InfiniteScroll
        dataLength={news.length}
        next={getMoreData}
        hasMore={news.length < totalResults && page < MAX_NUM_PAGE}
        loader={null}
        scrollableTarget='scrollableDiv'
      >
        {news.map((article: IArticle, index: number) => (
          <CardPrimary
            key={`${index}-${article.title}`}
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
