import React from 'react';
import PageTitle from './pageTitle';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: PageTitle,
  title: 'pageTitle',
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const TopHeadlines = Template.bind({});
TopHeadlines.args = {
  ...TopHeadlines.args,
  country: 'Israel',
};

export const TotalResults = Template.bind({});
TotalResults.args = { ...TotalResults.args, total: 33 };
