import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

let arrStrings = [
  'Target name1',
  'Target name2',
  'Target name3',
  'Target name4',
  'Target name5',
];

export const Regular = Template.bind({});
Regular.args = {
  ...Regular.args,
  placeholder: 'Sources',
  options: arrStrings,
};
