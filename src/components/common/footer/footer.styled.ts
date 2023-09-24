import styled, { css } from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  ${({ theme }) => css`
    background: ${theme.colors.footer};
    color: ${theme.colors.contrast};
  `}
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.contrast};
`;
