import React from 'react';
import { SearchBox } from './styles';
import InputComponent from '../input/InputComponent';
import Dropdown from '../dropdown/Dropdown';

const SearchContainer: React.FC = () => {
  const options = ['Top Headlines', 'Everything'];
  return (
    <SearchBox>
      <InputComponent />
      <Dropdown options={options} isInSearchBox />
    </SearchBox>
  );
};

export default SearchContainer;
