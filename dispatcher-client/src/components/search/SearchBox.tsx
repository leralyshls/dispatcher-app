import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useWindowSize from '../../hooks/useWindowSize';
import { useAppDispatch } from '../../store/hooks';
import { filterActions } from '../../store/slices/filterSlice';
import { fetchNews } from '../../store/slices/newsSlice';
import {
  getSearchHistory,
  addToSearchHistory,
} from '../../utils/localStorageUse';
import Dropdown from '../dropdown/Dropdown';
import RecentSearches from '../../components/recentSearches/RecentSearches';
import { InputAdornment } from '@mui/material';
import { SearchContainer, InputStyled, InputIcon } from './styles';
import { endpointsFilters } from '../../utils/constants/filterStrings';
import { SCREENS } from '../../utils/constants/screenSizes';

const SearchBox: React.FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>(
    getSearchHistory()
  );
  const debouncedInputValue = useDebounce<string>(inputValue, 1000);
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { tabletM, breakpoint500 } = SCREENS;

  useEffect(() => {
    const searchText = debouncedInputValue.trim();
    dispatch(filterActions.setQuery(searchText));
    if (searchText !== '') {
      addToSearchHistory(searchText);
      setSearchHistory(getSearchHistory());
      dispatch(fetchNews());
    }
  }, [debouncedInputValue, dispatch]);

  const handleClickOutside = () => {
    setFocused(false);
    setShowHistory(false);
  };
  const handleFocus = (e: React.SyntheticEvent) => {
    if (e.type === 'click' && width > breakpoint500) return;
    setFocused(true);
    setShowHistory(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter') {
      addToSearchHistory(value.trim());
      setSearchHistory(getSearchHistory());
    }
  };
  return (
    <>
      <SearchContainer isFocused={focused}>
        <InputStyled
          onChange={handleChange}
          value={inputValue}
          onFocus={(e) => handleFocus(e)}
          onBlur={handleClickOutside}
          onKeyPress={(e) => handleKeyPress(e, inputValue)}
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
            options={endpointsFilters.options}
            insearchbox={true}
            placeholder={endpointsFilters.options[0].name}
            filtertype={endpointsFilters.filter.id}
          />
        )}
      </SearchContainer>

      {showHistory && searchHistory.length && (
        <RecentSearches
          history={searchHistory}
          setHistory={setSearchHistory}
          setInputValue={setInputValue}
        />
      )}
    </>
  );
};

export default SearchBox;
