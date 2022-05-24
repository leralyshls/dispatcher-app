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
  const handleRemove = (e: React.SyntheticEvent) => {
    console.log(e.target);
    e.preventDefault();
  };
  return (
    <SearchesContainer>
      <SearchesHeader>
        <SearchesTitle>Recent searches</SearchesTitle>
        <Button onMouseDown={(e) => handleRemove(e)}>Clear</Button>
      </SearchesHeader>
      <SearchesList>
        {history.map((el) => (
          <SearchesItem key={el}>
            <SearchesText className='font-mulish'>{el}</SearchesText>
            <Button onMouseDown={(e) => handleRemove(e)}>
              <StyledClearIcon />
            </Button>
          </SearchesItem>
        ))}
      </SearchesList>
    </SearchesContainer>
  );
};

export default RecentSearches;
