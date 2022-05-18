import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePickerComponent from './DatePicker';

export default {
  title: 'DatePickerComponent',
  component: DatePickerComponent,
} as ComponentMeta<typeof DatePickerComponent>;

const Template: ComponentStory<typeof DatePickerComponent> = (args) => (
  <DatePickerComponent {...args} />
);

export const DatePickerExample = Template.bind({});
