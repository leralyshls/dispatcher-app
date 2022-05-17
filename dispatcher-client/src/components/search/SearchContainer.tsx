import React from 'react';
import { SearchBox } from './styles';
import InputComponent from '../input/InputComponent';
import Dropdown from '../dropdown/Dropdown';
import { filters } from '../../mockData/filterStrings';

const SearchContainer: React.FC = () => {
  return (
    <SearchBox>
      <InputComponent />
      <Dropdown
        options={filters.search}
        isinsearchbox
        placeholder={filters.search[0]}
      />
    </SearchBox>
  );
};

export default SearchContainer;
