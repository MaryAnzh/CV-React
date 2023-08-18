import { styled } from "styled-components";

export const AboutStyle = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.constants.maxAppSize};
  padding: 0.5rem;

`;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.constants.h2FontSize}
`;