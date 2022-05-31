import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchNews } from '../../store/slices/apiRequestSlice';
import { DashboardContainer, DashboardContent, MainContent } from './styles';
import FilterArea from './components/filterArea/FilterArea';
import NavBar from '../navBar/NavBar';
import NewsWidget from './components/newsWidget/NewsWidget';
import GraphsArea from './components/graphsArea/GraphsArea';
import PageTitle from '../pageTitle/PageTitle';
import useWindowSize from '../../hooks/useWindowSize';
import { SCREENS } from '../../utils/constants/screenSizes';
import { countryFirstVisit } from '../../mockData/filterStrings';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowSize();
  const { laptopM } = SCREENS;
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <DashboardContainer>
      <NavBar />
      <DashboardContent>
        <FilterArea />
        <PageTitle firstVisit={true} country={countryFirstVisit} />
        <MainContent isPortrait={height > width ? true : false}>
          <NewsWidget />
          {width > laptopM && <GraphsArea />}
        </MainContent>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
