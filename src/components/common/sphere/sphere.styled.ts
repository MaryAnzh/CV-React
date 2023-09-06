import styled, { css } from "styled-components";

import { SphereConst } from "./sphere.const";

const lineList = [...Array(SphereConst.linesInSphere).keys()].reduce((str, el) => {
  const line = `
  .sphere-line:nth-child(${el + 1}) {
    transform: rotateY(${el * (SphereConst.deg / SphereConst.dotInLine)}deg);
  }
  `;

  const calc = str + line;
  return calc;
}, ``);

const doaList = [...Array(SphereConst.linesInSphere).keys()].reduce((str, el) => {
  const dot = `
  .dot-front:nth-child(${el + 1}) {
    transform: rotateX(${el * (SphereConst.deg / SphereConst.dotInLine)}deg) translateZ(${SphereConst.radius}px);
  }
  `;
  const calc = str + dot;
  return calc;
}, ``);

// wrap for space of sphere
export const SphereSpace = styled.div`
    position: relative;
    width: calc(2 * ${SphereConst.radius}px + 20px);
    height: calc(2 * ${SphereConst.radius}px + 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.constants.black};
`;


export const SphereWrap = styled.div<{ $spin: boolean }>`
    ${({ $spin }) => css`
      position: absolute;
      width: calc(2 * ${SphereConst.radius}px);
      height: calc(2 * ${SphereConst.radius}px);
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      perspective: 2000px;
      animation: spin 10s linear infinite;
      animation-play-state: ${$spin ? 'running' : 'paused'};
    
      @keyframes spin {
        0% {transform: rotateY(0deg) rotateX(10deg)}
        100% {transform: rotateY(360deg) rotateX(30deg)}
      }
       
      ${lineList}
    `}
`;

export const SphereLine = styled.div`
  position: absolute;
  width: ${SphereConst.dotD}px;
  height: ${SphereConst.dotD}px;
  transform-style: preserve-3d;
  border-radius: 50%;

  ${doaList}

`;

export const SphereDotFace = styled.div`
   ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.dot};
    backface-visibility: hidden;
    border-radius: 50%;
   `}
`;
//transform: rotateX(0deg) translateZ(${SphereConst.radius}px)

export const SphereDotBack = styled.div`
   ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, ${theme.colors.dotAlfa}%);
    backface-visibility: visible;
    border-radius: 50%;
   `}
`;

export const SphereText = styled.p`
position: absolute;
top: 10px;
left: 10px;
font-size: 0.9rem;
font-weight: 200;
color: ${({ theme }) => theme.colors.contrast}
`;