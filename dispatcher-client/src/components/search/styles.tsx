import { Input } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/svgs/inputIcon.svg';
import { COLORS } from '../../utils/colors';
import { FlexRow } from '../../styles/sharedStyles';

export interface isFocused {
  isFocused?: boolean;
}

export const SearchContainer = styled(FlexRow)<isFocused>`
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 0.625rem;
  background: ${COLORS.white};
  padding: 1rem 0 1rem 1.125rem;
  height: 3.125rem;
  transition: all 0.3s ease-out;
  width: ${({ isFocused }: isFocused) => (isFocused ? 41.44 : 26.44)}rem;
`;

export const InputStyled = styled(Input)`
  flex: 2;
  border: none;
  font-size: 0.875rem !important;
  color: ${COLORS.purple} !important;
  height: 100%;
`;

export const InputIcon = styled(Icon)`
  max-height: 1.125rem
  width: auto;
  margin-right: 1rem;
`;
