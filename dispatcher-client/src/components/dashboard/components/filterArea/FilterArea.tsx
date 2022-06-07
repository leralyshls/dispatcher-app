import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { FilterDiv } from './styles';
import Dropwdown from '../../../dropdown/Dropdown';
import DatePickerComponent from '../../../datePicker/DatePickerComponent';
import {
  topFilters,
  everythingFilters,
} from '../../../../utils/constants/filterStrings';
import { ENDPOINTS } from '../../../../utils/constants/endpoints';

const FilterArea = () => {
  const sources = useAppSelector((state) => state.sources.sources);
  const endpoint = useAppSelector((state) => state.filters.endpoint);
  const datesFilterId = everythingFilters[1].filter.id;

  const topDropdowns = topFilters.map((item, index) => (
    <Dropwdown
      key={item.filter.id}
      options={item?.options || sources}
      placeholder={item.filter.name}
      filtertype={item.filter.id}
    />
  ));

  const everythingDropdowns = everythingFilters.map((item) =>
    item.filter.id !== datesFilterId ? (
      <Dropwdown
        key={item.filter.id}
        options={item?.options || sources}
        placeholder={item.filter.name}
        filtertype={item.filter.id}
      />
    ) : (
      <DatePickerComponent key={item.filter.id} filtertype={item.filter.id} />
    )
  );

  return (
    <FilterDiv>
      {endpoint === ENDPOINTS.TOP ? topDropdowns : everythingDropdowns}
    </FilterDiv>
  );
};

export default FilterArea;
