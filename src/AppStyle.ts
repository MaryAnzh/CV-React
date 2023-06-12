import styled from "styled-components";

export const AppStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.contrast};
  transition: background-color 0.5s ease;
`;

export const MainStyle = styled.main`
  width: 100%;
  margin-top: 2rem;
`;

export const PageTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.contrast};
`;
