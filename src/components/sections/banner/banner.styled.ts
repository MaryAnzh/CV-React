import { styled } from "styled-components";

export const BannerStyled = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.constants.maxAppSize};
  height: 13rem;
  background-image: url('bg/hidden_girl.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;