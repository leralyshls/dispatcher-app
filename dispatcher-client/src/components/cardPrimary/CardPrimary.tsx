import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
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
import RTLCheck from '../../utils/isRTL';
import cropCardContent from '../../utils/cropCardContent';
import { formatArticleDate } from '../../utils/dateFormat';
import { IArticle } from '../../utils/types/APITypes';

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
  author: string | null;
}

const CardPrimary = (props: IArticle) => {
  const { urlToImage, title, source, description, author } = props;
  const { width } = useWindowSize();
  const isRTL = RTLCheck(title);
  const direction = isRTL ? 'rtl' : 'ltr';
  const publishedAt = formatArticleDate(props.publishedAt);
  const sourceString = author ? `${author}, ${source.name}` : `${source.name}`;
  const replacementChar = '�';
  return (
    <CardPrimaryStyled>
      <CardImgContainer>
        <ArticleImg src={urlToImage || noImage} />
      </CardImgContainer>
      <Article isRTL={isRTL}>
        <ArticleDetailes>{publishedAt}</ArticleDetailes>
        <ArticleTitle dir={direction}>{title}</ArticleTitle>
        <ArticleDetailes dir={direction}>{sourceString}</ArticleDetailes>
        <ArticleContent dir={direction}>
          {description && !description.includes(replacementChar)
            ? cropCardContent(description, width)
            : ''}
        </ArticleContent>
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
