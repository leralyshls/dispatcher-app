import React from 'react';
import {
  SearchesContainer,
  SearchesHeader,
  SearchesTitle,
  SearchesList,
  SearchesLi,
  SearchesText,
  StyledClearIcon,
} from './styles';
import Button from '../button/MainButton';
import { filters } from '../../mockData/filterStrings';

const RecentSearches: React.FC = () => {
  const recentSearchesArr = filters.topHeadlines.category;
  return (
    <SearchesContainer>
      <SearchesHeader>
        <SearchesTitle>Recent searches</SearchesTitle>
        <Button>Clear</Button>
      </SearchesHeader>
      <SearchesList>
        {recentSearchesArr.map((el) => (
          <SearchesLi>
            <SearchesText>{el}</SearchesText>
            <Button>
              <StyledClearIcon />
            </Button>
          </SearchesLi>
        ))}
      </SearchesList>
    </SearchesContainer>
  );
};

export default RecentSearches;
