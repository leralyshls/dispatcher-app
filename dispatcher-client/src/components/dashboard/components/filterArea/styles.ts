import styled from 'styled-components';
import { FlexRow } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/colors';

export const FilterDiv = styled(FlexRow)`
  min-height: 5.44rem;
  align-items: center;
  border-bottom: 1px solid ${COLORS.secondary};
  gap: min(1.25rem, 2%);
`;
