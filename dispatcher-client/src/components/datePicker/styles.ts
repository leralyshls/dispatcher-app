import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import { filterSharedStyles } from '../../styles/sharedStyles';

export const DatesFilterContainer = styled(FlexRow)`
  ${filterSharedStyles}
  min-height: 3.36em;
  max-width: 10.93rem;
  border-radius: 0.625rem;
  padding: 0.93em 1.25em 0.93em 0.93em;
`;
