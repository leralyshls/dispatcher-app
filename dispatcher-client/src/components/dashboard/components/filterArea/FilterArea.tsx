import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import useWindowSize from '../../../../hooks/useWindowSize';
import Dropdown from '../../../dropdown/Dropdown';
import DatePickerComponent from '../../../datePicker/DatePickerComponent';
import { FilterDiv } from './styles';
import {
  topFilters,
  everythingFilters,
  endpointsFilters,
} from '../../../../utils/constants/filterStrings';
import { ENDPOINTS } from '../../../../utils/constants/endpoints';
import { SCREENS } from '../../../../utils/constants/screenSizes';

const FilterArea = () => {
  const sources = useAppSelector((state) => state.sources.sources);
  const endpoint = useAppSelector((state) => state.filters.endpoint);
  const { width } = useWindowSize();
  const { tabletM } = SCREENS;
  const datesFilterId = everythingFilters[1].filter.id;

  const endpointDropdows = (
    <Dropdown
      options={endpointsFilters.options}
      placeholder={endpointsFilters.options[0].name}
      filtertype={endpointsFilters.filter.id}
    />
  );

  const topDropdowns = topFilters.map((item, index) => (
    <Dropdown
      key={item.filter.id}
      options={item?.options || sources}
      placeholder={item.filter.name}
      filtertype={item.filter.id}
    />
  ));

  const everythingDropdowns = everythingFilters.map((item) =>
    item.filter.id !== datesFilterId ? (
      <Dropdown
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
      {width < tabletM && endpointDropdows}
      {endpoint === ENDPOINTS.TOP ? topDropdowns : everythingDropdowns}
    </FilterDiv>
  );
};

export default FilterArea;
