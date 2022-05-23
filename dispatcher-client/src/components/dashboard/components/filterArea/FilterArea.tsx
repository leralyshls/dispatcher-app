import React from 'react';
import { FilterDiv } from './styles';
import Dropwdown from '../../../dropdown/Dropdown';
import { topHeadlinesStrings } from '../../../../strings/filterStrings/filterStrings';
// import DatePickerComponent from '../../../datePicker/DatePickerComponent';

const FilterArea: React.FC = () => {
  return (
    <FilterDiv>
      {topHeadlinesStrings.map((item, index) => (
        <Dropwdown
          key={`filter-${item.name}`}
          options={item.options}
          placeholder={item.name}
        />
      ))}
      {/* <DatePickerComponent /> */}
    </FilterDiv>
  );
};

export default FilterArea;
