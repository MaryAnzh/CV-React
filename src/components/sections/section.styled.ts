import { styled, css } from "styled-components";

export const SectionStyle = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.constants.maxAppSize};
  padding: 0.5rem;
`;

export const SectionTitle = styled.h2<{ align: 'left' | 'center' | 'right' }>`
   ${({ theme, align }) => css`
     padding: 1rem;
     font-size: ${theme.constants.h2FontSize};
     font-weight: 200;
     text-align: ${align};
     text-transform: uppercase;
   `}
`;