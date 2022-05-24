import React from 'react';
import { DashboardContainer, DashboardContent, MainContent } from './styles';
import FilterArea from './components/filterArea/FilterArea';
import NavBar from '../navBar/NavBar';
import NewsWidget from './components/newsWidget/NewsWidget';
import GraphsArea from './components/graphsArea/GraphsArea';
import PageTitle from '../../components/pageTitle/PageTitle';
import useWindowSize from '../../hooks/useWindowSize';
import { SCREENS } from '../../utils/screenSizes';

const Dashboard: React.FC = () => {
  const { width, height } = useWindowSize();
  const { tabletM } = SCREENS;
  return (
    <DashboardContainer>
      <NavBar />
      <DashboardContent>
        <FilterArea />
        <PageTitle firstVisit={true} />
        <MainContent isPortrait={height > width ? true : false}>
          <NewsWidget />
          {width > tabletM && <GraphsArea />}
        </MainContent>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
