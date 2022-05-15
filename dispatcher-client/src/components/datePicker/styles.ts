import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { FlexRow } from '../../styles/sharedStyles';

export const DatesFilterContainer = styled(FlexRow)`
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: 3.36em;
  max-width: 10.93rem;
  background: ${COLORS.white};
  border: none;
  border-radius: 0.625rem;
  padding: 0.93em 1.2em 0.93em 0.93em;
  cursor: pointer;
`;
