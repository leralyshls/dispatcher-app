import React from 'react';
import { TitleStyled } from './style';
import { countryFirstVisit } from '../../mockData/filterStrings';
import data from '../../mockData/topHeadlinesPage1.json';

export interface TitleProps {
  firstVisit?: boolean;
}

const PageTitle = ({ firstVisit }: TitleProps) => {
  return (
    <TitleStyled firstVisit={firstVisit}>
      {firstVisit
        ? `Top Headlines In ${countryFirstVisit}`
        : `${data.totalResults} Total results`}
    </TitleStyled>
  );
};

export default PageTitle;
