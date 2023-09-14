import { css, styled } from "styled-components";

export const InfoCardStyle = styled.div<{ align: 'start' | 'center' | 'flex-end' }>`
  ${({ theme, align }) => css`
    max-width: ${theme.constants.maxBlockSize};
    width: 100%;
    padding: 1rem;
    border: 1px solid ${theme.colors.contrast};
    border-radius: 0.5rem;
    box-shadow: ${theme.colors.shadow};
    align-self: ${align};
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: 300;

    &::first-letter {
      padding-left: 0.8rem;
    }
  `}
`;