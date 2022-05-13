import React from 'react';
import { CustomSelect, StyledOption } from './style';
import { SelectOption } from '@mui/base/SelectUnstyled';

export interface DropdownProps {
  placeholder: string;
  options: string[];
}

const Dropwdown = ({ placeholder, options }: DropdownProps) => {
  const [value, setValue] =
    React.useState<string | null | undefined>(placeholder);
  const renderValue = (opt: SelectOption<string> | null) => {
    if (opt == null) {
      return placeholder;
    }
    return opt.label;
  };

  return (
    <CustomSelect value={value} onChange={setValue} renderValue={renderValue}>
      {options.map((option) => (
        <StyledOption key={option} value={option} className='font-mullish'>
          {option}
        </StyledOption>
      ))}
    </CustomSelect>
  );
};

export default Dropwdown;
