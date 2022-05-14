import { COLORS } from '../utils/colors';
import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardSharedStyle = styled.div`
  display: flex;
  border-radius: 1.25rem;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.secondary};
  box-shadow: 0px 2rem 4rem rgba(0, 0, 0, 0.05);
`;
