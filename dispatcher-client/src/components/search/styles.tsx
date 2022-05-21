import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { FlexRow } from '../../styles/sharedStyles';

export const SearchBox = styled(FlexRow)`
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 0.625rem;
  background: ${COLORS.white};
  padding: 1rem 0 1rem 1.125rem;
  height: 3.125rem;
  width: max(26.45rem, 22%);
`;
