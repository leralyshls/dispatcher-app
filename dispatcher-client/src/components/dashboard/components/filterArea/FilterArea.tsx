import React, { useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import useWindowSize from '../../../../hooks/useWindowSize';
import { FiltersWrapper, FilterDiv, BottomLine, AlertMessage } from './styles';
import Dropdown from '../../../dropdown/Dropdown';
import DatePickerComponent from '../../../datePicker/DatePickerComponent';
import {
  topFilters,
  everythingFilters,
  endpointsFilters,
} from '../../../../utils/constants/filterStrings';
import { ENDPOINTS } from '../../../../utils/constants/endpoints';
import { SCREENS } from '../../../../utils/constants/screenSizes';
import { COLORS } from '../../../../utils/constants/colors';

const FilterArea = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const sources = useAppSelector((state) => state.sources.sources);
  const endpoint = useAppSelector((state) => state.filters.endpoint);
  const { width } = useWindowSize();
  const { tabletM } = SCREENS;
  const datesFilterId = everythingFilters[1].filter.id;

  const alertMessageEverything =
    'Please search for something or choose a source before filtering';
  const alertMessageTop = 'Please choose a filter';

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
      setShowAlert={setShowAlert}
    />
  ));

  const everythingDropdowns = everythingFilters.map((item) =>
    item.filter.id !== datesFilterId ? (
      <Dropdown
        key={item.filter.id}
        options={item?.options || sources}
        placeholder={item.filter.name}
        filtertype={item.filter.id}
        setShowAlert={setShowAlert}
      />
    ) : (
      <DatePickerComponent key={item.filter.id} filtertype={item.filter.id} />
    )
  );

  return (
    <FiltersWrapper>
      <FilterDiv>
        {width <= tabletM && endpointDropdows}
        {endpoint === ENDPOINTS.TOP ? topDropdowns : everythingDropdowns}
      </FilterDiv>
      <AlertMessage showAlert={showAlert}>
        {endpoint === ENDPOINTS.TOP ? alertMessageTop : alertMessageEverything}
      </AlertMessage>
      <BottomLine />
    </FiltersWrapper>
  );
};

export default FilterArea;
