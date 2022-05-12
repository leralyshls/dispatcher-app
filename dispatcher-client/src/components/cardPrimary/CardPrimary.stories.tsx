import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardPrimary from './CardPrimary';
import data from '../../mockData/everyting.json';

const { urlToImage, title, publishedAt, source, content } = data.articles[0];

export default {
  title: 'CardPrimary',
  component: CardPrimary,
} as ComponentMeta<typeof CardPrimary>;

const Template: ComponentStory<typeof CardPrimary> = (args) => (
  <CardPrimary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: title,
  urlToImage: urlToImage,
  dateString: publishedAt,
  source: { name: source.name },
  content: content,
};
