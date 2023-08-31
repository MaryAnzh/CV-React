import { css, styled } from "styled-components";

export const BannerStyled = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.constants.maxAppSize};
  height: 13rem;
  display: flex;
  justify-content: center;
  background-image: url('bg/hidden_girl.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SpinSphereButton = styled.button`
  ${({theme}) => css`
    width: 3rem;
    height: 1.5rem;
    margin-left: 1rem;
    background: ${theme.colors.contrast};
    color: ${theme.colors.main};
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
  `}

`;