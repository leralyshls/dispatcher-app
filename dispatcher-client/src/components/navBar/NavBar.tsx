import SearchContainer from '../search/SearchContainer';
import Logo from '../logo/Logo';
import { StyledNav, LogoBox } from './styles';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <LogoBox>
        <Logo />
      </LogoBox>
      <SearchContainer />
    </StyledNav>
  );
};

export default NavBar;
