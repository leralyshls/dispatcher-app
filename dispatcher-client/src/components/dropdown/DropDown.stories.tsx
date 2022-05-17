import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import { filters } from '../../mockData/filterStrings';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  ...Regular.args,
  placeholder: filters.everything.filterBy[3],
  options: filters.everything.language,
  isinsearchbox: false,
};

export const InSearchBox = Template.bind({});
InSearchBox.args = {
  ...InSearchBox.args,
  placeholder: filters.search[0],
  options: filters.search,
  isinsearchbox: true,
};
