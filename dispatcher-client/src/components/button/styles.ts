import styled from 'styled-components';
import Button from '@mui/material/Button';
import { ButtonProps } from './MainButton';
import { COLORS } from '../../utils/colors';

export const ButtonStyled = styled(Button)`
  && {
    ${(props: ButtonProps) => `
      border-radius: 1.25rem;
      font-size: 0.875rem;
      background: ${props.color ? COLORS[props.color] : 'none'};
      color: ${props.color === 'primary' ? COLORS.white : COLORS.purple};
      opacity: 1;
      &:hover{
        opacity: ${props.color && 0.8};
        background: ${props.color ? COLORS[props.color] : 'none'};
      }
    `}
  }
`;
