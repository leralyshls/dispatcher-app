import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';

export const CardPrimaryStyled = styled(CardSharedStyle)<{ isRTL: boolean }>`
  flex-direction: ${({ isRTL }) => (isRTL ? 'row-reverse' : 'row')};
  width: 100%;
  min-height: max(12.6vw, 15.125rem);
  margin-bottom: 1.5rem;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    flex-direction: column;
    min-height: 28.06rem;
  }
`;

export const CardImgContainer = styled.div`
  flex: 3;
  max-width: 18rem;
  min-height: 100%;
  @media only screen and (max-width: ${SCREENS.desktop}px) {
    max-width: 15.125rem;
  }

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    max-width: 100%;
    max-height: 40%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    max-width: 100%;
    max-height: 33.18%;
  }
`;

export const CardButtonContainer = styled(FlexRow)<{ isRTL: boolean }>`
  ${({ isRTL }) => `
    max-height: 2.25rem;
    justify-content: ${isRTL ? 'flex-start' : 'flex-end'};

    .MuiButton-root.MuiButton-contained {
      flex-direction: ${isRTL && 'row-reverse'};

    .MuiButton-endIcon {
      transform: ${isRTL && 'rotate(180deg)'};
      margin-right: ${isRTL && 0.5}rem;
    }
    @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
      width: 100%;
    }
  `}
`;

export const ArticleImg = styled.img<{ isRTL: boolean }>`
  ${({ isRTL }) => `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    border-radius: ${isRTL ? '0 1.25rem 1.25rem 0' : '1.25rem 0 0 1.25rem'}};
    border-right: ${!isRTL && `1px solid ${COLORS.secondary}`};
    border-left: ${isRTL && `1px solid ${COLORS.secondary}`};

    @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
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

export const Article = styled(FlexColumn)<{ isRTL: boolean }>`
  flex: 3;
  min-height: 100%;
  align-items: space-between;
  justify-content: space-between;
  padding: 1rem;
  text-align: ${({ isRTL }) => isRTL && 'right'};

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

export const ArticleTitle = styled.h6<{ isRTL: boolean }>`
  color: ${COLORS.bluishBlack};
  font-size: 1.125rem;
  text-align: ${({ isRTL }) => isRTL && 'right'};
`;

export const ArticleContent = styled.section<{ isRTL: boolean }>`
  color: ${COLORS.purple};
  font-size: 0.875rem;
  text-align: ${({ isRTL }) => isRTL && 'right'};
`;
