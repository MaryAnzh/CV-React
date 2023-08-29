import { styled } from "styled-components";

export const MyCardStyle = styled.div`
  max-width: ${({ theme }) => theme.constants.maxBlockSize};
  width: 100%;
  padding: 0.8rem;
  border: 1px solid black;

`;

export const AboutMeText = styled.p`
  font-size: 1rem;
  font-weight: 200;
  padding-bottom: 0.8rem;

  &::first-letter {
    margin-left: 0.8rem;
  }

`;