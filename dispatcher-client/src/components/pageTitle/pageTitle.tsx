import React from 'react';
import { TitleStyled } from './style';
import data from '../../mockData/topHeadlinesPage1.json';
import { useAppSelector } from '../../store/hooks';

export interface TitleProps {
  firstVisit?: boolean;
  country: string;
}

const PageTitle = ({ firstVisit, country }: TitleProps) => {
  return (
    <TitleStyled firstVisit={firstVisit} country={country}>
      {firstVisit
        ? `Top Headlines In ${country}`
        : `${data.totalResults} Total results`}
    </TitleStyled>
  );
};

export default PageTitle;
