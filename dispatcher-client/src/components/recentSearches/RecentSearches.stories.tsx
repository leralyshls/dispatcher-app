import { ComponentStory, ComponentMeta } from '@storybook/react';
import RecentSearches from './RecentSearches';

export default {
  title: 'RecentSearches',
  component: RecentSearches,
} as ComponentMeta<typeof RecentSearches>;

const Template: ComponentStory<typeof RecentSearches> = (args) => (
  <RecentSearches {...args} />
);

export const RecentSearchesExample = Template.bind({});
