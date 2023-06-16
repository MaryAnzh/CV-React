import styled from "styled-components";

export const BurgerStyle = styled.div`
   display: none;
   width: ${({ theme }) => theme.constants.iconSize};
   height: ${({ theme }) => theme.constants.iconSize};
   background: red;

   @media (max-width: ${({ theme }) => theme.constants.mediaTabletPoint}) {
    display: flex;
  }
`;