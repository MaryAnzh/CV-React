import styled from "styled-components";

export const AppStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.contrast};
  transition: background-color 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
;
`;

export const MainStyle = styled.main`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex: 1 0 auto
`;
