import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import { filterSharedStyles } from '../../styles/sharedStyles';
import { SCREENS } from '../../utils/constants/screenSizes';

export const DatesFilterContainer = styled(FlexRow)`
  ${filterSharedStyles}
  height: 2.94rem;
  width: 10.93rem;
  border-radius: 0.625rem;
  padding: 0.93em 1.2em 0.93em 0.93em;
  align-items: center;

  @media only screen and (max-width: ${SCREENS.tabletM - 1}px) {
    padding-inline: 0;
    width: 4.375rem;
  }
`;
