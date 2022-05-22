import React, { useState } from 'react';
import { SearchContainer, InputStyled, InputIcon } from './styles';
import { InputAdornment } from '@mui/material';
import Dropdown from '../dropdown/Dropdown';
import { searchInStrings } from '../../strings/filterStrings/filterStrings';
import RecentSearches from '../../components/recentSearches/RecentSearches';
import { filters } from '../../mockData/filterStrings';

export interface isFocused {
  isFocused?: boolean;
}

const SearchBox: React.FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  return (
    <>
      <SearchContainer isFocused={focused}>
        <InputStyled
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          startAdornment={
            <InputAdornment position='start'>
              <InputIcon />
            </InputAdornment>
          }
          placeholder='Search'
          disableUnderline
        />
        <Dropdown
          options={searchInStrings}
          insearchbox={true}
          placeholder={searchInStrings[0].name}
        />
      </SearchContainer>
      {showHistory && (
        <RecentSearches history={filters.topHeadlines.category} />
      )}
    </>
  );
};

export default SearchBox;
