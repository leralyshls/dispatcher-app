import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';

export const DashboardContainer = styled(FlexColumn)`
  max-width: 100vw;
  min-height: 100vh;
  background: ${COLORS.lightGrey};
`;

export const DashboardContent = styled(FlexColumn)`
  margin-top: 4.625rem;
  width: 100%;
  padding: 0 12.5%;
  align-self: center;
`;

export const MainContent = styled(FlexRow)`
  height: 60vw;
  gap: 0.94rem;
`;
