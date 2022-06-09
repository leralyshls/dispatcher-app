import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/constants/colors';
import { SCREENS } from '../../../../utils/constants/screenSizes';

export const FiltersWrapper = styled(FlexColumn)`
  padding-inline: 12.5%;
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    padding-inline: 1.25rem;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-inline: 1rem;
  }
`;

export const FilterDiv = styled(FlexRow)`
  padding-top: 1.25rem;
  align-items: center;
  gap: min(1.25rem, 2%);
  overflow-x: hidden;

  @media only screen and (max-width: 880px) {
    width: 180%;
    margin-left: -8rem;
    padding-left: 2.125rem;
    padding-block: 0;
    overflow-x: hidden;
    background: ${COLORS.white};
    border-top: 1px solid ${COLORS.secondary};
    gap: max(1.25rem, 3%);
  }
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    display: grid;
    background: none;
    grid-template-columns: repeat(3, 1fr);
    padding-block: 1rem;
    border-top: none;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MobileEndpointFilterDiv = styled.div`
  width: 120%;
  margin-left: -2rem;
  padding-left: 2rem;
  background: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.secondary};
`;

export const AlertMessage = styled.span<{ showAlert: boolean }>`
  font-color: ${COLORS.purple};
  font-style: italic;
  font-size: 0.75rem;
  opacity: 0.5;
  margin-block: 2px;
  visibility: ${({ showAlert }) => (showAlert ? 'visible' : 'hidden')};
`;

export const BottomLine = styled.div`
  width: 100;
  height: 1px;
  background: ${COLORS.secondary};
`;
