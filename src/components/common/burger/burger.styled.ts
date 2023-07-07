import styled from "styled-components";

export const BurgerStyle = styled.div<{ open: boolean }>`
   display: none;
   position: relative;
   width: ${({ theme }) => theme.constants.iconSize};
   height: ${({ theme }) => theme.constants.iconSize};
   padding: calc(${({ theme }) => theme.constants.iconSize} / 6)  calc(${({ theme }) => theme.constants.iconSize} / 8);
   flex-direction: column;
   border: 1px solid ${({ theme }) => theme.colors.contrast};
   border-radius: ${({ theme }) => theme.constants.borderRadius};
   opacity: 0.8;
   transition: all .3s;
   cursor: pointer;

   &:hover {
    opacity: 1;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 20%);
   }

   div:nth-child(1) {
     top: ${({ open, theme }) => open ? 'calc(50% - ' + theme.constants.burgerLineHight + '/2)' : 'calc(25% - ' + theme.constants.burgerLineHight + '/2)'};
     transform: rotate(${({ open }) => open ? '45deg' : '0'});
     transition: top ${({ open }) => open ? '.2s' : '.2s .2s'}, transform ${({ open }) => open ? '.2s .2s' : '.2s'};
    }

   div:nth-child(2) {
    top: calc(50% - ${({ theme }) => theme.constants.burgerLineHight}/2);
     opacity: ${({ open }) => open ? '0' : '1'};
     transition: opacity .3s;
   }

    div:nth-child(3) {
     top: ${({ open, theme }) => open ? 'calc(50% - ' + theme.constants.burgerLineHight + '/2)' : 'calc(75% - ' + theme.constants.burgerLineHight + '/2)'};
     transform: rotate(${({ open }) => open ? '-45deg' : '0'});
     transition: top ${({ open }) => open ? '.2s' : '.2s .2s'}, transform ${({ open }) => open ? '.2s .2s' : '.2s'};
    }

   @media (max-width: ${({ theme }) => theme.constants.mediaTabletPoint}) {
    display: flex;
  }
`;

export const BurgerLine = styled.div`
  position: absolute;
  width: 70%;
  left: 15%;
  height: ${({ theme }) => theme.constants.burgerLineHight};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.contrast};
`;