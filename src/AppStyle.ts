import styled from "styled-components";

export const AppStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background: ${({theme})=> theme.colors.main};
  color: ${({theme}) => theme.colors.contrast};
`;

export const PageStyle = styled.div`
  
`;
