import React from 'react';
import { TitleContainer, TitleStyled } from './style';

export interface TitleProps {
  country?: string;
  total?: number;
}

const PageTitle = ({ country, total }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleStyled country={country}>
        {country ? `Top Headlines In ${country}` : `${total} Total results`}
      </TitleStyled>
    </TitleContainer>
  );
};

export default PageTitle;
