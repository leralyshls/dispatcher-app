import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';

export const StyledHeader = styled(FlexRow)`
  width: 100vw;
  position: fixed;
  background: ${COLORS.darkPurple};
  height: 4.625rem;
  align-items: center;
  padding: 0 1.25rem;
`;

export const LogoBox = styled(FlexRow)`
  width: 13.75rem;
  align-items: center;
`;
