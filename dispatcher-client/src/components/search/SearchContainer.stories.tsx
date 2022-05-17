import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchContainer from './SearchContainer';
import { filters } from '../../mockData/filterStrings';

export default {
  title: 'SearchContainer',
  component: SearchContainer,
} as ComponentMeta<typeof SearchContainer>;

const Template: ComponentStory<typeof SearchContainer> = (args) => (
  <SearchContainer {...args} />
);

export const SearchExample = Template.bind({});
SearchExample.args = {
  ...SearchExample.args,
};
