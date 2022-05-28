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
import cropCardContent from '../../helpers/cropCardContent';
import useWindowSize from '../../hooks/useWindowSize';

export interface CardProps {
  title: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  content: string | null;
}

const CardPrimary = React.forwardRef(
  (props: CardProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { urlToImage, title, source, content, publishedAt } = props;
    const isRTL = RTLCheck(title);
    const { width } = useWindowSize();
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
          <ArticleContent dir={isRTL ? 'rtl' : 'ltr'} isRTL={isRTL} ref={ref}>
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
  }
);

export default CardPrimary;
