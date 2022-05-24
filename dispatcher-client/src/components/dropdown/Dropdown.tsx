import React, { useState } from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';

export interface Option {
  name: string;
  id: string;
}

export interface DropdownProps {
  placeholder?: string;
  options: Option[];
  insearchbox?: any;
}

const Dropwdown = ({ placeholder, options, insearchbox }: DropdownProps) => {
  const [value, setValue] = useState<string | null | undefined>(placeholder);
  const handleFilterChange = (newValue: string | null | undefined) => {
    setValue(newValue);
  };
  return (
    <DropdownContainer
      options={options}
      insearchbox={insearchbox ? insearchbox.toString() : undefined}
    >
      <CustomSelect
        value={value ? value : placeholder}
        onChange={handleFilterChange}
        renderValue={(item: SelectOption<string> | null) =>
          item != null ? item.label : placeholder
        }
      >
        {options.map((option) => (
          <StyledOption
            key={option.id}
            value={option.name}
            className='font-mulish'
          >
            {option.name}
          </StyledOption>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
