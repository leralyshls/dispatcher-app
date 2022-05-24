import styled from 'styled-components';
import { FlexRow } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/colors';
import { SCREENS } from '../../../../utils/screenSizes';

export const FilterDiv = styled(FlexRow)`
  padding-block: 1.25rem;
  align-items: center;
  border-bottom: 1px solid ${COLORS.secondary};
  gap: min(1.25rem, 2%);
  overflow-x: hidden;

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 120%;
    margin-left: -2rem;
    padding-left: 2.125rem;
    padding-block: 0;
    overflow-x: hidden;
    background: ${COLORS.white};
    border-top: 1px solid ${COLORS.secondary};
    gap: 3%;
  }
`;
