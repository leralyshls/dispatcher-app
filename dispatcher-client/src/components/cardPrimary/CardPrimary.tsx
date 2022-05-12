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

export interface CardProps {
  title: string;
  urlToImage: string;
  dateString: string;
  source: { name: string };
  content: string;
}

const CardPrimary = (props: CardProps) => {
  return (
    <CardPrimaryStyled>
      <CardImgContainer>
        <ArticleImg src={props.urlToImage} />
      </CardImgContainer>
      <Article>
        <ArticleDetailes>{props.dateString}</ArticleDetailes>
        <ArticleTitle>{props.title}</ArticleTitle>
        <ArticleDetailes>{props.source.name}</ArticleDetailes>
        <ArticleContent>{props.content}</ArticleContent>
        <CardButtonContainer>
          <Button icon color='primary'>
            Navigate to dispatch
          </Button>
        </CardButtonContainer>
      </Article>
    </CardPrimaryStyled>
  );
};

export default CardPrimary;
