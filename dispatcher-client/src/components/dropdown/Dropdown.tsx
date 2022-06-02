import React from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';
import { filterActions } from '../../store/slices/filterSlice';
import { useAppDispatch } from '../../store/hooks';
import { fetchNews } from '../../store/slices/newsSlice';

export interface Option {
  name: string;
  id: string;
}

export interface DropdownProps {
  placeholder: string;
  options: Option[];
  insearchbox?: any;
  filtertype: string;
}

const Dropwdown = ({
  placeholder,
  options,
  insearchbox,
  filtertype,
}: DropdownProps) => {
  const dispatch = useAppDispatch();
  const handleFilterChange = (newValue: Option | null) => {
    if (newValue) {
      dispatch(
        filterActions.updateFilter({ key: filtertype, value: newValue.id })
      );
      if (filtertype !== 'endpoint') {
        dispatch(fetchNews());
      } else {
        dispatch(filterActions.cleanFilters());
      }
    }
  };
  return (
    <DropdownContainer
      options={options}
      insearchbox={insearchbox ? insearchbox.toString() : undefined}
      filtertype={filtertype}
      placeholder={placeholder}
    >
      <CustomSelect
        onChange={handleFilterChange}
        renderValue={(item: SelectOption<Option> | null) =>
          item != null ? item.label : placeholder
        }
      >
        {options.map((option) => (
          <StyledOption key={option.id} value={option} className='font-mulish'>
            {option.name}
          </StyledOption>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
