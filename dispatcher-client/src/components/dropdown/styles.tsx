import React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { COLORS } from '../../utils/colors';
import dropdownArrow from '../../assets/svgs/dropdownArrow.svg';
import { DropdownProps } from './Dropdown';

export const DropdownContainer = styled('div')`
  ${(props: DropdownProps) => `
    max-width: ${props.isInSearchBox ? 'fit-content' : '10.93rem'};
    max-height: 10.5em;
    border-radius: ${!props.isInSearchBox && '0.625rem'};
    margin-right: ${props.isInSearchBox && '0.625rem'};
    border-left: ${props.isInSearchBox && `1px solid ${COLORS.lightPurple}`};
  `}
`;

const StyledButton = styled('button')`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  font-size: 0.875rem;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  background: ${COLORS.white};
  border: none;
  padding: 0.93em;
  text-align: left;
  color: ${COLORS.purple};
  cursor: pointer;
  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${COLORS.secondary};
  }
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${dropdownArrow});
      transform: rotate(180deg);
    }
  }
  &::after {
    content: url(${dropdownArrow});
    float: right;
    transition: transform 0.3s ease-out;
    margin-left: 1rem;
  }
`;

const StyledListbox = styled('ul')`
  font-size: 0.75rem;
  padding: 0.45em 0;
  margin: 0.5em 0;
  min-width: 10.93rem;
  max-height: 10.5em;
  background: ${COLORS.white};
  border-radius: 0.75em;
  color: ${COLORS.purple};
  overflow: overlay;
  outline: 0px;
  box-shadow: 0px 2rem 4rem rgba(0, 0, 0, 0.05);
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.lightGrey};
    visibility: hidden;
    border-radius: 5px;
    margin: 0.5em 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.purple};
    border-radius: 5px;
    opacity: 1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(90, 90, 137, 0.5);
  }
`;

export const StyledOption = styled(OptionUnstyled)`
  font-size: 0.75rem;
  list-style: none;
  padding: 8px;
  cursor: pointer;
  letter-spacing: 0.3px;
  color: ${COLORS.purple};
  padding: 1em;
  line-height: 1rem;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover:not(.${optionUnstyledClasses.selected}) {
    color: ${COLORS.bluishBlack};
  }
  &.${optionUnstyledClasses.highlighted} {
    background-color: ${COLORS.lightPurple};
  }
  &.${optionUnstyledClasses.disabled} {
    color: ${COLORS.secondary};
  }
  &.${optionUnstyledClasses.selected} {
    background-color: ${COLORS.lightPurple};
  }
  &.${optionUnstyledClasses.disabled} {
    color: ${COLORS.purple};
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 2;
`;

export const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };
  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
) => JSX.Element;
