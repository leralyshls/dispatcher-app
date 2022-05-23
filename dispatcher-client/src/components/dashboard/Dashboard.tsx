import React from 'react';
import { DashboardContainer, DashboardContent, MainContent } from './styles';
import FilterArea from './components/filterArea/FilterArea';
import NavBar from '../navBar/NavBar';
import NewsWidget from './components/newsWidget/NewsWidget';
import GraphsArea from './components/graphsArea/GraphsArea';
import PageTitle from '../pageTitle/PageTitle';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <NavBar />
      <DashboardContent>
        <FilterArea />
        <PageTitle firstVisit={true} />
        <MainContent>
          <NewsWidget />
          <GraphsArea />
        </MainContent>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
