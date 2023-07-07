import styled from "styled-components";

export const BurgerStyle = styled.div`
  display: none;
  position: relative;
  width: ${({ theme }) => theme.constants.iconSize};
  height: ${({ theme }) => theme.constants.iconSize};
   
  @media (max-width: ${({ theme }) => theme.constants.mediaTabletPoint}) {
    display: flex;
  }

`;

export const BurgerIconStyle = styled.div<{ open: boolean }>`
   display: flex;
   position: relative;
   width: ${({ theme }) => theme.constants.iconSize};
   height: ${({ theme }) => theme.constants.iconSize};
   padding: calc(${({ theme }) => theme.constants.iconSize} / 6)  calc(${({ theme }) => theme.constants.iconSize} / 8);
   flex-direction: column;
   border: 1px solid ${({ theme }) => theme.colors.contrast};
   border-radius: ${({ theme }) => theme.constants.borderRadius};
   background-color: ${({ theme }) => theme.colors.main};
   opacity: 0.8;
   transition: all .3s;
   cursor: pointer;
   z-index: 2;

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
`;

export const BurgerLine = styled.div`
  position: absolute;
  width: 70%;
  left: 15%;
  height: ${({ theme }) => theme.constants.burgerLineHight};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.contrast};
`;

export const BurgerNavPanel = styled.ul<{ open: boolean }>`
  position: absolute;
  width: ${({ open }) => open ? '145px' : '0px'};
  height: ${({ open }) => open ? '185px' : '0px'};
  right: -0.4rem;
  top: -0.4rem;
  padding: calc(1rem + ${({ theme, open }) => open ? theme.constants.iconSize : '-1rem'}) 0;
  padding-bottom: ${({ open }) => open ? '1rem' : '0rem'};
  border: 1px solid ${({ theme }) => theme.colors.contrast};
  border-radius: 6px;
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: width .3s, height .3s, opacity ${({ open }) => open ? '0s' : '.3s 0s'};
  overflow: hidden;
  z-index: 1;
`;

export const BurgerNavItem = styled.li<{ isActive: boolean, open: boolean }>`
  text-transform: uppercase;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.contrast : theme.colors.main};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: background-color .3s, opacity ${({ open }) => open ? '1s .1s' : '0s'};
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'all'};

  a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 0 1rem;
    color: ${({ theme, isActive }) => isActive ? theme.colors.main : theme.colors.contrast};
    font-size: 1.25rem;
    font-weight: 100;
    transition: all .3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.contrast};
    
    a {
      color: ${({ theme }) => theme.colors.main};
    } 
  }
`;