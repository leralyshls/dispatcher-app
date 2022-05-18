import React from 'react';
import { FilterDiv } from './styles';
import Dropwdown from '../../../dropdown/Dropdown';
import { topHeadlinesStrings } from '../../../../strings/filterStrings/topHeadlines';

const FilterArea: React.FC = () => {
  return (
    <FilterDiv>
      {/* {topHeadlinesStrings.map((item, index) => (
        <Dropwdown
          key={`top-filter-${item.name}`}
          options={item.options}
          placeholder={item.name}
        />
      ))} */}
    </FilterDiv>
  );
};

export default FilterArea;
