import React, { useState } from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';

export interface DropdownProps {
  placeholder?: string;
  options: { name: string; id: string }[];
  insearchbox?: any;
}

const Dropwdown = ({ placeholder, options, insearchbox }: DropdownProps) => {
  const [value, setValue] = useState<string | null | undefined>(placeholder);
  return (
    <DropdownContainer
      options={options}
      insearchbox={insearchbox ? insearchbox.toString() : undefined}
    >
      <CustomSelect
        value={value ? value : placeholder}
        onChange={setValue}
        renderValue={(item: SelectOption<string> | null) =>
          item != null ? item.label : placeholder
        }
      >
        {options.map((option) => (
          <StyledOption key={option.id} value={option.name}>
            {option.name}
          </StyledOption>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
