import React from 'react';
import {
  CardSecondaryStyled,
  TitleContainer,
  SecondaryCardTitle,
  Underline,
  BodyContainer,
} from './style';

export interface CardProps {
  children?: any;
  title?: string;
}

const CardSecondary = ({ children, title }: CardProps) => {
  return (
    <CardSecondaryStyled>
      <TitleContainer>
        <SecondaryCardTitle>{title}</SecondaryCardTitle>
        <Underline />
      </TitleContainer>
      <BodyContainer>{children}</BodyContainer>
    </CardSecondaryStyled>
  );
};

export default CardSecondary;
