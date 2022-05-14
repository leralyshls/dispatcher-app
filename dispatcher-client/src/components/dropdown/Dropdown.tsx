import React from 'react';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { SelectOption } from '@mui/base/SelectUnstyled';

export interface DropdownProps {
  placeholder?: string;
  options: string[];
  isInSearchBox?: boolean;
}

const Dropwdown = ({ placeholder, options, isInSearchBox }: DropdownProps) => {
  const [value, setValue] =
    React.useState<string | null | undefined>(placeholder);
  const renderValue = (opt: SelectOption<string> | null) => {
    if (opt == null) {
      return placeholder;
    }
    return opt.label;
  };

  return (
    <DropdownContainer options={options} isInSearchBox={isInSearchBox}>
      <CustomSelect
        value={value ? value : options[0]}
        onChange={setValue}
        renderValue={renderValue}
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
