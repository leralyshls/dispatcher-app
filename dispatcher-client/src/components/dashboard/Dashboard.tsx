import React from 'react';
import { DashboardContainer, DashboardContent } from './styles';
import FilterArea from './components/filterArea/FilterArea';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardContent>
        <FilterArea />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
