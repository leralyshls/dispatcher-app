import React from 'react';
import { GraphsContainer } from './styles';
import CardSecondary from '../../../cardSecondary/CardSecondary';
import Graph from '../../../graphs/graph/Graph';
import { doughnutMock, areaChartMock } from '../../../graphs/graphsMockData';

const GraphsArea: React.FC = () => {
  return (
    <GraphsContainer>
      <CardSecondary title='Sources'>
        <Graph type='doughnut' data={doughnutMock} />
      </CardSecondary>
      <CardSecondary title='Dates'>
        <Graph type='area' data={areaChartMock} />
      </CardSecondary>
    </GraphsContainer>
  );
};

export default GraphsArea;
