import React, { useState } from 'react';
import { SearchContainer, InputStyled, InputIcon } from './styles';
import { InputAdornment } from '@mui/material';
import Dropdown from '../dropdown/Dropdown';
import { searchInStrings } from '../../strings/filterStrings/filterStrings';
import RecentSearches from '../../components/recentSearches/RecentSearches';
import { filters } from '../../mockData/filterStrings';
import useWindowSize from '../../hooks/useWindowSize';
import { SCREENS } from '../../utils/screenSizes';

const SearchBox: React.FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const { width } = useWindowSize();
  const { tabletM } = SCREENS;
  return (
    <>
      <SearchContainer isFocused={focused}>
        <InputStyled
          onFocus={() => {
            setFocused(true);
            setShowHistory(true);
          }}
          onBlur={() => {
            setFocused(false);
            setShowHistory(false);
          }}
          startAdornment={
            <InputAdornment position='start'>
              <InputIcon className='input-icon' />
            </InputAdornment>
          }
          placeholder='Search'
          disableUnderline
        />
        {width > tabletM && (
          <Dropdown
            options={searchInStrings}
            insearchbox={true}
            placeholder={searchInStrings[0].name}
          />
        )}
      </SearchContainer>
      {showHistory && (
        <RecentSearches history={filters.topHeadlines.category} />
      )}
    </>
  );
};

export default SearchBox;
