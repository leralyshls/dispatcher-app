import styled from 'styled-components';
import { FlexRow } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/colors';

export const FilterDiv = styled(FlexRow)`
  width: 100%;
  height: 5.44rem;
  align-items: center;
  border-bottom: 1px solid ${COLORS.secondary};
`;
