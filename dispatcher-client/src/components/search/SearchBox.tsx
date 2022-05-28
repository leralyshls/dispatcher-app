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
  const [value, setValue] = useState<string>('');
  const { width } = useWindowSize();
  const { tabletM, breakpoint500 } = SCREENS;

  const handleClickOutside = () => {
    setFocused(false);
    setShowHistory(false);
    setValue('');
  };
  const handleFocus = (e: React.SyntheticEvent) => {
    if (e.type === 'click' && width > breakpoint500) return;
    setFocused(true);
    setShowHistory(true);
  };

  return (
    <>
      <SearchContainer isFocused={focused}>
        <InputStyled
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onFocus={(e) => handleFocus(e)}
          onBlur={handleClickOutside}
          startAdornment={
            <InputAdornment position='start'>
              <InputIcon
                tabIndex={1}
                className='input-icon'
                onClick={(e) => handleFocus(e)}
                onBlur={handleClickOutside}
              />
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
