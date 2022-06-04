import React, { useState } from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';
import { filterActions } from '../../store/slices/filterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchNews } from '../../store/slices/newsSlice';
import { ENDPOINTS } from '../../utils/types/APITypes';

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

const Dropwdown = React.forwardRef(
  (
    { placeholder, options, insearchbox, filtertype }: DropdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [value, setValue] = useState<Option | null>(null);
    const sources = useAppSelector((state) => state.filters.sources);
    const q = useAppSelector((state) => state.filters.q);
    const dispatch = useAppDispatch();
    const hasRequiredParams = sources !== '' || q !== '';
    console.log(hasRequiredParams);
    const searchNews = (filtertype: string) => {
      if (filtertype === 'endpoint') {
        dispatch(filterActions.cleanFilters());
        if (hasRequiredParams) {
          dispatch(fetchNews());
        }
      } else {
        dispatch(fetchNews());
      }
    };
    const handleFilterChange = (newValue: Option | null) => {
      if (newValue) {
        setValue(newValue);
        dispatch(
          filterActions.updateFilter({ key: filtertype, value: newValue.id })
        );
        searchNews(filtertype);
      }
    };

    const handleUnselectFilter = (id: string) => {
      if (value && id === value.id) {
        setValue(null);
        dispatch(filterActions.updateFilter({ key: filtertype, value: '' }));
        dispatch(fetchNews());
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
          value={value}
          onChange={handleFilterChange}
          renderValue={(item: SelectOption<Option> | null) =>
            item != null ? item.label : placeholder
          }
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleUnselectFilter(option.id)}
            >
              <StyledOption
                key={option.id}
                value={option}
                className='font-mulish'
              >
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
