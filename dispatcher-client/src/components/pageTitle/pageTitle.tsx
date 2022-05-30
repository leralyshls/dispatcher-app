import React from 'react';
import { TitleStyled } from './style';
import data from '../../mockData/topHeadlinesPage1.json';
import { useAppSelector } from '../../store/hooks';

export interface TitleProps {
  firstVisit?: boolean;
}

const PageTitle = ({ firstVisit }: TitleProps) => {
  const country = useAppSelector((state) => state.filter.country);
  return (
    <TitleStyled firstVisit={firstVisit}>
      {firstVisit
        ? `Top Headlines In ${country}`
        : `${data.totalResults} Total results`}
    </TitleStyled>
  );
};

export default PageTitle;
