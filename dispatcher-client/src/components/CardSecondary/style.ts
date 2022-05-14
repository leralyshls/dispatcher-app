import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';

export const CardSecondaryStyled = styled(CardSharedStyle)`
  padding: 1.79em;
  max-width: 25.75rem;
  width: 100%;
  max-height: 23.75rem;
  height: 23.75rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled(FlexColumn)`
  width: 100%;
  height: 15%;
  justify-content: space-evenly;
`;

export const SecondaryCardTitle = styled.h5`
  font-size: 1.5rem;
  color: ${COLORS.bluishBlack};
`;

export const Underline = styled.div`
  min-width: 1.25rem;
  width: 1.25rem;
  min-height: 0.19rem;
  height: 0.19rem;
  border-radius: 0.625rem;
  background: ${COLORS.purple};
`;

export const BodyContainer = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;
