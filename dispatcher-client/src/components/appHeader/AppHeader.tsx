import SearchContainer from '../search/SearchContainer';
import Logo from '../logo/Logo';
import { StyledHeader, LogoBox } from './styles';

const AppHeader: React.FC = () => {
  return (
    <StyledHeader>
      <LogoBox>
        <Logo />
      </LogoBox>
      <SearchContainer />
    </StyledHeader>
  );
};

export default AppHeader;
