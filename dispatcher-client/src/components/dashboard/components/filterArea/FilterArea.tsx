import React, { useRef } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { FilterDiv } from './styles';
import Dropwdown from '../../../dropdown/Dropdown';
import {
  topFilters,
  everythingFilters,
} from '../../../../utils/constants/filterStrings';
import { ENDPOINTS } from '../../../../utils/types/APITypes';
import DatePickerComponent from '../../../datePicker/DatePickerComponent';

const FilterArea = () => {
  const sources = useAppSelector((state) => state.sources.sources);
  const endpoint = useAppSelector((state) => state.filters.endpoint);
  const topRefs = useRef<(HTMLDivElement | null)[]>([]);
  const everythingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const datesFilterId = everythingFilters[1].filter.id;
  const topDropdowns = topFilters.map((item, index) => (
    <Dropwdown
      key={item.filter.id}
      options={item?.options || sources}
      placeholder={item.filter.name}
      filtertype={item.filter.id}
      ref={(el) => (topRefs.current[index] = el)}
    />
  ));
  const everythingDropdowns = everythingFilters.map((item, index) =>
    item.filter.id !== datesFilterId ? (
      <Dropwdown
        key={item.filter.id}
        options={item?.options || sources}
        placeholder={item.filter.name}
        filtertype={item.filter.id}
        ref={(el) => (everythingRefs.current[index] = el)}
      />
    ) : (
      <DatePickerComponent key={item.filter.id} />
    )
  );
  return (
    <FilterDiv>
      {endpoint === ENDPOINTS.TOP ? topDropdowns : everythingDropdowns}
    </FilterDiv>
  );
};

export default FilterArea;
