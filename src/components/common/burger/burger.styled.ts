import styled from "styled-components";

export const BurgerStyle = styled.div`
   display: none;
   width: ${({ theme }) => theme.constants.iconSize};
   height: ${({ theme }) => theme.constants.iconSize};
   padding: calc(${({ theme }) => theme.constants.iconSize} / 6)  calc(${({ theme }) => theme.constants.iconSize} / 8);
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid ${({ theme }) => theme.colors.contrast};
   border-radius: ${({ theme }) => theme.constants.borderRadius};
   opacity: 0.8;
   transition: all .3s;
   cursor: pointer;

   &:hover {
    opacity: 1;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 20%);
   }

   @media (max-width: ${({ theme }) => theme.constants.mediaTabletPoint}) {
    display: flex;
  }
`;

export const BurgerLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.contrast};
`;