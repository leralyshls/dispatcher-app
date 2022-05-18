import React from 'react';
import {
  SearchesContainer,
  SearchesHeader,
  SearchesTitle,
  SearchesList,
  SearchesItem,
  SearchesText,
  StyledClearIcon,
} from './styles';
import Button from '../button/MainButton';

export interface RecentSearchesProps {
  history: string[];
}

const RecentSearches = ({ history }: RecentSearchesProps) => {
  return (
    <SearchesContainer>
      <SearchesHeader>
        <SearchesTitle>Recent searches</SearchesTitle>
        <Button>Clear</Button>
      </SearchesHeader>
      <SearchesList>
        {history.map((el) => (
          <SearchesItem>
            <SearchesText>{el}</SearchesText>
            <Button>
              <StyledClearIcon />
            </Button>
          </SearchesItem>
        ))}
      </SearchesList>
    </SearchesContainer>
  );
};

export default RecentSearches;
