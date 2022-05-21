import React from 'react';
import PageTitle from './PageTitle';
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
  firstVisit: true,
};

export const TotalResults = Template.bind({});
TotalResults.args = { ...TotalResults.args, firstVisit: false };
