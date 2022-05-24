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
import noImage from '../../assets/images/noImage.png';
import RTLCheck from '../../helpers/isRTL';

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
}

const CardPrimary = (props: CardProps) => {
  const { urlToImage, title, source, content, publishedAt } = props;
  const isRTL = RTLCheck(title);
  const checkLength = (str: string | null) => {
    if (str && str.length > 145) {
      return str.slice(0, 145) + '...';
    } else return str;
  };
  return (
    <CardPrimaryStyled isRTL={isRTL}>
      <CardImgContainer>
        <ArticleImg isRTL={isRTL} src={urlToImage ? urlToImage : noImage} />
      </CardImgContainer>
      <Article isRTL={isRTL}>
        <ArticleDetailes>{publishedAt}</ArticleDetailes>
        <ArticleTitle isRTL={isRTL}>{title}</ArticleTitle>
        <ArticleDetailes>{source.name}</ArticleDetailes>
        <ArticleContent isRTL={isRTL}>{checkLength(content)}</ArticleContent>
        <CardButtonContainer isRTL={isRTL}>
          <Button icon color={'primary'}>
            Navigate to dispatch
          </Button>
        </CardButtonContainer>
      </Article>
    </CardPrimaryStyled>
  );
};

export default CardPrimary;
