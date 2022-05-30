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
import RTLCheck from '../../utils/helperFunctions/isRTL';
import cropCardContent from '../../utils/helperFunctions/cropCardContent';
import useWindowSize from '../../hooks/useWindowSize';
import { format } from 'date-fns';
import dateFormatString from '../../utils/constants/dateFormatString';

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
  author: string | null;
}

const CardPrimary = (props: CardProps) => {
  const { urlToImage, title, source, content, author } = props;
  const { width } = useWindowSize();
  const isRTL = RTLCheck(title);
  const direction = isRTL ? 'rtl' : 'ltr';
  const publishedAt = format(new Date(props.publishedAt), dateFormatString);
  const sourceString = author ? `${author}, ${source.name}` : `${source.name}`;
  const replacementChar = '�';
  return (
    <CardPrimaryStyled>
      <CardImgContainer>
        <ArticleImg src={urlToImage ? urlToImage : noImage} />
      </CardImgContainer>
      <Article isRTL={isRTL}>
        <ArticleDetailes>{publishedAt}</ArticleDetailes>
        <ArticleTitle dir={direction}>{title}</ArticleTitle>
        <ArticleDetailes dir={direction}>{sourceString}</ArticleDetailes>
        <ArticleContent dir={direction}>
          {content && !content.includes(replacementChar)
            ? cropCardContent(content, width)
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
