import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../styles/sharedStyles';
import { COLORS } from '../../../utils/colors';

interface liProps {
  color: string;
}

export const StyledUL = styled(FlexColumn)`
  width: 100%;
  height: 8rem;
  list-style: none;
  justify-content: space-evenly;
`;

export const StyledLI = styled(FlexRow)`
  padding: 0 2rem;
  &:before {
    width: 2em;
    content: '●';
    color: ${(props: liProps) => props.color};
    display: inline-block;
    margin-left: -0.5em;
  }
`;

export const StyledListContainer = styled(FlexRow)`
  font-size: 0.93rem;
  justify-content: space-between;
`;

export const GreySpan = styled.span`
  color: ${COLORS.doughnutGrey};
  font-size: 0.93rem;
`;
export const BlueSpan = styled.span`
  color: ${COLORS.bluishBlack};
  font-size: 0.875rem;
`;
