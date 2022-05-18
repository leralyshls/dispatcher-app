import React from 'react';
import logoSvg from '../../assets/svgs/logo.svg';
import { LogoContainer, LogoImg } from './style';

export interface LogoProps {
  height?: number;
}

const Logo = ({ height }: LogoProps) => {
  return (
    <LogoContainer height={height}>
      <LogoImg src={logoSvg} alt='logo' />
    </LogoContainer>
  );
};

export default Logo;
