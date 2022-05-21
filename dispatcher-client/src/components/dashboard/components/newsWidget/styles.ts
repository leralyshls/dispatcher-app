import styled from 'styled-components';
import { FlexColumn } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/colors';

export const CardsContainer = styled(FlexColumn)`
  width: 70.35%;
  overflow-y: auto;
  max-height: calc(44.17vw + 1rem);
  padding-right: 0.93rem;
  gap: 1.5rem;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${COLORS.greyPlaceholder};
    &:hover {
      background-color: rgba(160, 163, 189, 0.85);
    }
  }
  ::-webkit-scrollbar-track {
    visibility: hidden;
    margin-block: 0.25rem;
  }
`;
