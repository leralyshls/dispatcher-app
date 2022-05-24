import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';
import { SCREENS } from '../../utils/screenSizes';

export interface isRTL {
  isRTL?: boolean;
}

export const CardPrimaryStyled = styled(CardSharedStyle)<isRTL>`
  flex-direction: ${({ isRTL }: isRTL) => (isRTL ? 'row-reverse' : 'row')};
  width: 100%;
  min-height: max(12.6vw, 15.125rem);
  margin-bottom: 1.5rem;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    max-height: 28.06rem;
  }
`;

export const CardImgContainer = styled.div`
  flex: 3;
  max-width: 18rem;
  height: 100%;
  @media only screen and (max-width: ${SCREENS.desktop}px) {
    max-width: 15.125rem;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    max-height: 40%;
  }
  @media only screen and (max-width: 500px) {
    max-width: 100%;
    max-height: 33.18;
  }
`;

export const CardButtonContainer = styled(FlexRow)<isRTL>`
  ${({ isRTL }: isRTL) => `
    max-height: 2.25rem;
    justify-content: ${isRTL ? 'flex-start' : 'flex-end'};

    .MuiButton-root.MuiButton-contained {
      flex-direction: ${isRTL && 'row-reverse'};

    .MuiButton-endIcon {
      transform: ${isRTL && 'rotate(180deg)'};
      margin-right: ${isRTL && 0.5}rem;
    }
    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  `}
`;

export const ArticleImg = styled.img<isRTL>`
  ${({ isRTL }: isRTL) => `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    border-radius: ${isRTL ? '0 1.25rem 1.25rem 0' : '1.25rem 0 0 1.25rem'}};
    border-right: ${!isRTL && `1px solid ${COLORS.secondary}`};
    border-left: ${isRTL && `1px solid ${COLORS.secondary}`};

    @media only screen and (max-width: 700px) {
      border-radius: 1.25rem 1.25rem 0 0;
      object-position: 0% 25%;
    }
    @media only screen and (max-width: ${SCREENS.tabletM - 1}px) {
      border-right: none;
      border-left: none;
      border-bottom: 1px solid ${COLORS.secondary};
    }
  `}
`;

export const Article = styled(FlexColumn)<isRTL>`
  flex: 3;
  height: 100%;
  align-items: space-between;
  justify-content: space-between;
  padding: 1rem;
  text-align: ${({ isRTL }: isRTL) => isRTL && 'right'};

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    padding-block: 0.59rem;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-block: 0.59rem 1rem;
  }
`;

export const ArticleDetailes = styled.p`
  color: ${COLORS.purple};
  opacity: 0.5;
`;

export const ArticleTitle = styled.h6<isRTL>`
  color: ${COLORS.bluishBlack};
  font-size: 1.125rem;
  text-align: ${({ isRTL }: isRTL) => isRTL && 'right'};
`;

export const ArticleContent = styled.section<isRTL>`
  color: ${COLORS.purple};
  font-size: 0.875rem;
  text-align: ${({ isRTL }: isRTL) => isRTL && 'right'};
`;
