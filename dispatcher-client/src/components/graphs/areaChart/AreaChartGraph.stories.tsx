import { ComponentStory, ComponentMeta } from '@storybook/react';
import AreaChartGraph from './AreaChartGraph';
import CardSecondary from '../../CardSecondary/CardSecondary';
// import mock from '../../../mockData/everyting.json';

export default {
  title: 'AreaChartGraph',
  component: AreaChartGraph,
} as ComponentMeta<typeof AreaChartGraph>;
const Template: ComponentStory<typeof AreaChartGraph> = (args) => (
  <CardSecondary title='Dates'>
    <AreaChartGraph {...args} />
  </CardSecondary>
);

const data = [
  {
    name: 'MAR',
    value: 1000,
  },
  {
    name: 'APR',
    value: 7300,
  },
  {
    name: 'MAY',
    value: 1040,
  },
  {
    name: 'JUNE',
    value: 4820,
  },
  {
    name: 'JUL',
    value: 9989,
  },
  {
    name: 'AUG',
    value: 2390,
  },
  {
    name: 'SEP',
    value: 3490,
  },
];

export const AreaChartExample = Template.bind({});

AreaChartExample.args = {
  data: data,
};
