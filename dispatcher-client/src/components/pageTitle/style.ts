import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { TitleProps } from './PageTitle';

export const TitleStyled = styled.div`
  ${({ firstVisit }: TitleProps) => `
    width: 100%;
    opacity: ${firstVisit ? '1' : '0.5'};
    color: ${firstVisit ? COLORS.bluishBlack : COLORS.purple};
    font-size: ${firstVisit ? 1.5 : 0.875}rem;
    padding: 0.85em 0;
  `}
`;
