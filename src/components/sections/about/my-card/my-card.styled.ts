import { styled } from "styled-components";

export const MyCardStyle = styled.div`
  max-width: ${({ theme }) => theme.constants.maxBlockSize};
  width: 100%;
  padding: 1rem;
  border: 1px solid black;
`;