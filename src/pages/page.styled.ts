import { styled } from "styled-components";

export const PageStyle = styled.div`
  max-width: ${({ theme }) => theme.constants.maxAppSize};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageTitleStyle = styled.h2`
  padding: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 200;
`;