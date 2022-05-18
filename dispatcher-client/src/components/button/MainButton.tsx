import React from 'react';
import { ButtonStyled } from './styles';
import arrowRight from '../../assets/svgs/arrowRight.svg';

export interface ButtonProps {
  icon?: boolean;
  children?: any;
  color?: 'primary' | 'secondary';
}

const MainButton = ({ children, icon, color }: ButtonProps) => {
  return (
    <ButtonStyled
      variant='contained'
      disableElevation
      endIcon={icon && <img src={arrowRight} alt='arrowRight' />}
      color={color}
    >
      {children}
    </ButtonStyled>
  );
};

export default MainButton;
