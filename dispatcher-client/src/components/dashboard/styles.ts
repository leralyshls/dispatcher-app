import styled from 'styled-components';
import { FlexColumn } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';

export const DashboardContainer = styled(FlexColumn)`
  padding-top: 4.625rem;
  align-items: center;
  width: 100vw;
  background: ${COLORS.lightGrey};
  min-height: 100vh;
`;

export const DashboardContent = styled(FlexColumn)`
  width: 75%;
  height: fit-content;
`;
