import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';

export const StyledNav = styled(FlexRow)`
  background: ${COLORS.darkPurple};
  height: max(4.625rem, 5%);
  align-items: center;
  padding: 0 1.25rem;
  position: fixed;
  z-index: 10;
`;

export const LogoBox = styled(FlexRow)`
  width: 11.69%;
  align-items: center;
`;
