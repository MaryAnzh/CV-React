import styled, { css } from "styled-components";

export const GamesNavStyle = styled.ul`
  width: 100%;
  display: flex;
  gap: 1rem;
  list-style: none;

`;

export const GamesNavItem = styled.li<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    color: ${theme.colors.contrast};
    background: ${$active ? theme.colors.gameChecker : 'none'};
  `}
  padding: 0.6rem 1rem;
  border-radius: 0 6px 0 6px;
  transition: all .3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.gameChecker_hover}
  }
`;