import React from 'react';
import { SearchBox } from './styles';
import InputComponent from '../input/InputComponent';
import Dropdown from '../dropdown/Dropdown';
import { searchInStrings } from '../../strings/filterStrings/filterStrings';

const SearchContainer: React.FC = () => {
  return (
    <SearchBox>
      <InputComponent />
      <Dropdown
        options={searchInStrings}
        insearchbox={true}
        placeholder={searchInStrings[0].name}
      />
    </SearchBox>
  );
};

export default SearchContainer;
