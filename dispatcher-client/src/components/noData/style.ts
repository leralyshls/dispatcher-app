import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { FlexColumn } from '../../styles/sharedStyles';

export const NoDataContainer = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  min-height: fit-content;
`;

export const NoDataImageDiv = styled.div`
  height: 8.3rem;
  width: 8.3rem;
`;

export const NoDataImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NoDataText = styled.p`
  font-size: 1.125rem;
  color: ${COLORS.purple};
  margin-top: 1rem;
`;
