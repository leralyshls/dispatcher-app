import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import {
  topHeadlinesStrings,
  searchInStrings,
} from '../../strings/filterStrings/filterStrings';

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
  placeholder: topHeadlinesStrings[0].name,
  options: topHeadlinesStrings[0].options,
  insearchbox: false,
};

export const InSearchBox = Template.bind({});
InSearchBox.args = {
  ...InSearchBox.args,
  placeholder: searchInStrings[0].name,
  options: searchInStrings,
  insearchbox: true,
};
