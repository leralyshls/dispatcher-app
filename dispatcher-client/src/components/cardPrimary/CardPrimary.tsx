import React from 'react';
import {
  CardPrimaryStyled,
  CardImgContainer,
  CardButtonContainer,
  Article,
  ArticleImg,
  ArticleDetailes,
  ArticleTitle,
  ArticleContent,
} from './style';
import Button from '../button/MainButton';
import breakingNews from '../../assets/images/breakingNews.png';

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
}

const CardPrimary = (props: CardProps) => {
  const { urlToImage, title, source, content, publishedAt } = props;

  return (
    <CardPrimaryStyled>
      <CardImgContainer>
        <ArticleImg src={urlToImage ? urlToImage : breakingNews} />
      </CardImgContainer>
      <Article>
        <ArticleDetailes>{publishedAt}</ArticleDetailes>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDetailes>{source.name}</ArticleDetailes>
        <ArticleContent>{content}</ArticleContent>
        <CardButtonContainer>
          <Button icon color={'primary'}>
            Navigate to dispatch
          </Button>
        </CardButtonContainer>
      </Article>
    </CardPrimaryStyled>
  );
};

export default CardPrimary;
