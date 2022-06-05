import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchNews } from '../../store/slices/newsSlice';
import { filterActions } from '../../store/slices/filterSlice';
import {
  hasRequiredParam,
  hasRequiredParamEndpoint,
} from '../../services/newsApiService';
import { SelectOption } from '@mui/base/SelectUnstyled';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';

export interface IOption {
  name: string;
  id: string;
}

export interface DropdownProps {
  placeholder: string;
  options: IOption[];
  insearchbox?: any;
  filtertype: string;
}

const Dropwdown = ({
  placeholder,
  options,
  insearchbox,
  filtertype,
}: DropdownProps) => {
  const [selectedFilterValue, setSelectedFilterValue] =
    useState<IOption | null>(null);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const performFilterActions = (id: string) => {
    dispatch(
      filterActions.updateFilter({
        key: filtertype,
        value: id,
      })
    );
    hasRequiredParam(filters) && dispatch(fetchNews());
  };

  const performEndpointActions = (id: string) => {
    dispatch(filterActions.setEndpoint({ key: filtertype, value: id }));
    hasRequiredParamEndpoint(filters) && dispatch(fetchNews());
  };

  const handleFilterChange = (newValue: IOption | null) => {
    if (newValue) {
      setSelectedFilterValue(newValue);
      if (filtertype === 'endpoint') {
        performEndpointActions(newValue.id);
      } else {
        performFilterActions(newValue.id);
      }
    }
  };

  const handleUnselectFilter = (id: string) => {
    if (selectedFilterValue && id === selectedFilterValue.id && !insearchbox) {
      setSelectedFilterValue(null);
      dispatch(filterActions.updateFilter({ key: filtertype, value: '' }));
      hasRequiredParam(filters) && dispatch(fetchNews());
    }
  };

  return (
    <DropdownContainer
      options={options}
      insearchbox={insearchbox ? insearchbox.toString() : undefined}
      filtertype={filtertype}
      placeholder={placeholder}
      filters={filters}
      className={filtertype}
    >
      <CustomSelect
        value={selectedFilterValue}
        onChange={handleFilterChange}
        renderValue={(item: SelectOption<IOption> | null) =>
          item != null ? item.label : placeholder
        }
      >
        {options.map((option) => (
          <div key={option.id} onClick={() => handleUnselectFilter(option.id)}>
            <StyledOption value={option} className='font-mulish'>
              {option.name}
            </StyledOption>
          </div>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
