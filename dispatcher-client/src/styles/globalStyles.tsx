import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../utils/colors';

const GlobalStyles = createGlobalStyle`
  *,
  * ::before,
  * ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: ${COLORS.darkPurple};
  font-size: 16px;
}
`;

export default GlobalStyles;
