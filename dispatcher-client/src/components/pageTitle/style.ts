import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { TitleProps } from './pageTitle';

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 61.75rem;
`;

export const TitleStyled = styled.div`
  ${(props: TitleProps) => `
    width: 100%;
    max-width: 61.75rem;
    opacity: ${props.country ? '1' : '0.5'};
    color: ${props.country ? COLORS.bluishBlack : COLORS.purple};
    font-size: ${props.country ? 1.5 : 0.875}rem;
    padding: 0.85em 0;
  `}
`;
