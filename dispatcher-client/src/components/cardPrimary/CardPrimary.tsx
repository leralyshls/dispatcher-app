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

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
}

const CardPrimary = (props: CardProps) => {
  const { urlToImage, title, source, content } = props;
  const isRTL = RTLCheck(title);
  const { width } = useWindowSize();
  const publishedAt = format(new Date(props.publishedAt), 'EEEE LLL d, yyyy');
  return (
    <CardPrimaryStyled isRTL={isRTL}>
      <CardImgContainer>
        <ArticleImg isRTL={isRTL} src={urlToImage ? urlToImage : noImage} />
      </CardImgContainer>
      <Article isRTL={isRTL}>
        <ArticleDetailes>{publishedAt}</ArticleDetailes>
        <ArticleTitle dir={isRTL ? 'rtl' : 'ltr'} isRTL={isRTL}>
          {title}
        </ArticleTitle>
        <ArticleDetailes>{source.name}</ArticleDetailes>
        <ArticleContent dir={isRTL ? 'rtl' : 'ltr'} isRTL={isRTL}>
          {content ? cropCardContent(content, width) : ''}
        </ArticleContent>
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
