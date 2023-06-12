import { styled } from "styled-components";

export const HomeStyle = styled.div`
  width: 100%;
`;

export const AnimTest = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    animation: test1 3s linear infinite;

    @keyframes test1 {
      0% {transform: rotateY(0deg)}
      0% {transform: rotateY(360deg)}
    }

`;