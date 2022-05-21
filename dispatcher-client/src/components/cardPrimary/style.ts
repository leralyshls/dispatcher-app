import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';

export const CardPrimaryStyled = styled(CardSharedStyle)`
  flex-direction: row;
  width: 100%;
  height: 15.125rem;
`;

export const CardImgContainer = styled.div`
  flex: 1;
  max-width: 15.25rem;
  height: 100%;
`;

export const CardButtonContainer = styled(FlexRow)`
  justify-content: flex-end;
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 1.25rem 0 0 1.25rem;
  border-right: 1px solid ${COLORS.secondary};
`;

export const Article = styled(FlexColumn)`
  flex: 3;
  height: 100%;
  align-items: space-between;
  justify-content: space-between;
  padding: 1rem;
`;

export const ArticleDetailes = styled.p`
  color: ${COLORS.purple};
  opacity: 0.5;
`;

export const ArticleTitle = styled.h6`
  color: ${COLORS.bluishBlack};
  font-size: 1.125rem;
`;

export const ArticleContent = styled.section`
  color: ${COLORS.purple};
  font-size: 0.875rem;
`;
