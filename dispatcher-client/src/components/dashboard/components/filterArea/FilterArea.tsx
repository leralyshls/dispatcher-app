import React from 'react';
import { FilterDiv } from './styles';
import Dropwdown from '../../../dropdown/Dropdown';
import { topHeadlinesFilters } from '../../../../utils/constants/filterStrings';
// import DatePickerComponent from '../../../datePicker/DatePickerComponent';

const FilterArea: React.FC = () => {
  return (
    <FilterDiv>
      {topHeadlinesFilters.map((item, index) => (
        <Dropwdown
          key={item.filter.id}
          options={item.options}
          placeholder={item.filter.name}
          filtertype={item.filter.id}
        />
      ))}
      {/* <DatePickerComponent /> */}
    </FilterDiv>
  );
};

export default FilterArea;
