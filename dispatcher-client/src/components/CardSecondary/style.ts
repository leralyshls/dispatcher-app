import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';
import { CardProps } from './CardSecondary';

export const CardSecondaryStyled = styled(CardSharedStyle)`
  width: 100%;
  height: 21.46vw;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.56rem 0 1rem;
`;

export const TitleContainer = styled(FlexColumn)`
  width: 100%;
  height: 15%;
  justify-content: space-evenly;
  margin-left: 1.56rem;
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
  height: 100%;
  justify-content: center;
  align-items: ${(props: CardProps) =>
    props.children.props.type === 'area' ? 'flex-end' : 'center'};
`;
