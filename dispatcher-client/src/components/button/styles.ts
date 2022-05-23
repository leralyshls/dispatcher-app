import styled from 'styled-components';
import Button from '@mui/material/Button';
import { ButtonProps } from './MainButton';
import { COLORS } from '../../utils/colors';

export const ButtonStyled = styled(Button)`
  && {
    ${({ color }: ButtonProps) => `
      border-radius: 1.25rem;
      font-size: 0.875rem;
      background: ${color ? COLORS[color] : 'none'};
      color: ${color === 'primary' ? COLORS.white : COLORS.purple};
      opacity: 1;
      &:hover{
        opacity: ${color && 0.8};
        background: ${color ? COLORS[color] : 'none'};
      }
    `}
  }
`;
