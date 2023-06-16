import styled from 'styled-components';

export const NavStyle = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.constants.mediaTabletPoint}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  text-transform: uppercase;
  
  a {
    color: ${({ theme }) => theme.colors.contrast};
    font-size: 1.25rem;
    font-weight: 100;
  }
`;