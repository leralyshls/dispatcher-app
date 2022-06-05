import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchNews } from '../../store/slices/newsSlice';
import { filterActions } from '../../store/slices/filterSlice';
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

const Dropwdown = React.forwardRef(
  (
    { placeholder, options, insearchbox, filtertype }: DropdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [selectedFilterValue, setSelectedFilterValue] =
      useState<IOption | null>(null);
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.filters);

    const hasRequiredParam =
      filters.category !== '' ||
      filters.country !== '' ||
      filters.q !== '' ||
      filters.sources !== '';

    const performFilterActions = (id: string) => {
      dispatch(
        filterActions.updateFilter({
          key: filtertype,
          value: id,
        })
      );
      hasRequiredParam && dispatch(fetchNews());
    };

    const performEndpointActions = (id: string) => {
      dispatch(filterActions.setEndpoint({ key: filtertype, value: id }));
      if (filters.q !== '' || filters.sources !== '') {
        dispatch(fetchNews());
      }
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
      if (
        selectedFilterValue &&
        id === selectedFilterValue.id &&
        !insearchbox
      ) {
        setSelectedFilterValue(null);
        dispatch(filterActions.updateFilter({ key: filtertype, value: '' }));
        hasRequiredParam && dispatch(fetchNews());
      }
    };

    return (
      <DropdownContainer
        options={options}
        insearchbox={insearchbox ? insearchbox.toString() : undefined}
        filtertype={filtertype}
        placeholder={placeholder}
        ref={ref}
        id={filtertype}
      >
        <CustomSelect
          value={selectedFilterValue}
          onChange={handleFilterChange}
          renderValue={(item: SelectOption<IOption> | null) =>
            item != null ? item.label : placeholder
          }
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleUnselectFilter(option.id)}
            >
              <StyledOption value={option} className='font-mulish'>
                {option.name}
              </StyledOption>
            </div>
          ))}
        </CustomSelect>
      </DropdownContainer>
    );
  }
);

export default Dropwdown;
