import React, { useState } from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';

export interface DropdownProps {
  placeholder?: string;
  options: string[];
  isInSearchBox?: boolean;
}

const Dropwdown = ({ placeholder, options, isInSearchBox }: DropdownProps) => {
  const [value, setValue] = useState<string | null | undefined>(placeholder);
  return (
    <DropdownContainer options={options} isInSearchBox={isInSearchBox}>
      <CustomSelect
        value={value ? value : placeholder}
        onChange={setValue}
        renderValue={(item: SelectOption<string> | null) =>
          item != null ? item.label : placeholder
        }
      >
        {options.map((option) => (
          <StyledOption key={option} value={option} className='font-mullish'>
            {option}
          </StyledOption>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
