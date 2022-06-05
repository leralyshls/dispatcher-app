import React from 'react';
import { GraphsContainer } from './styles';
import CardSecondary from '../../../cardSecondary/CardSecondary';
import Graph from '../../../graphs/graph/Graph';

const GraphsArea: React.FC = () => {
  return (
    <GraphsContainer>
      <CardSecondary title='Sources'>
        <Graph type='doughnut' />
      </CardSecondary>
      <CardSecondary title='Dates'>
        <Graph type='area' />
      </CardSecondary>
    </GraphsContainer>
  );
};

export default GraphsArea;
