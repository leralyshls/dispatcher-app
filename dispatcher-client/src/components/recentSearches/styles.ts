import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';
import { ReactComponent as Clear } from '../../assets/svgs/clearIcon.svg';
import { dropdownSharedStyles } from '../../styles/sharedStyles';

export const SearchesContainer = styled(FlexColumn)`
  ${dropdownSharedStyles}
  max-width: 42rem;
  width: 42rem;
  max-height: 8.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
`;

export const SearchesHeader = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SearchesTitle = styled.span`
  text-transform: uppercase;
  color: ${COLORS.purple};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const SearchesList = styled.ul`
  background: ${COLORS.white};
  width: 100%;
  list-style: none;
`;

export const SearchesItem = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;
export const SearchesText = styled(FlexColumn)`
  color: ${COLORS.purple};
  font-size: 0.875rem;
  height: 100%;
`;

export const StyledClearIcon = styled(Clear)`
  height: 1rem;
  width: auto;
`;
