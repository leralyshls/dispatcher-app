import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../styles/sharedStyles';
import { COLORS } from '../../../utils/colors';

interface liProps {
  color: string;
}

const width = 'width: 100%;';

export const StyledUL = styled(FlexColumn)`
  ${width}
  height: 8rem;
  list-style: none;
  justify-content: space-evenly;
`;

export const StyledLI = styled(FlexRow)`
  ${width}
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
  ${width}
  font-size: 0.875rem;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  color: ${COLORS.doughnutGrey};
  font-size: 0.875rem;
`;
