import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/colors';
import { ReactComponent as Clear } from '../../assets/svgs/clearIcon.svg';
import { dropdownSharedStyles } from '../../styles/sharedStyles';

export const SearchesContainer = styled(FlexColumn)`
  ${dropdownSharedStyles}
  width: 41.44rem;
  max-height: 8.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
  position: absolute;
  z-index: 6;
  left: 12.6%;
  top: 92%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const SearchesHeader = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
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
