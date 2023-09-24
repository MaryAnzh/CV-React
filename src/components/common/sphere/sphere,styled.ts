import styled, { css } from "styled-components";

const radius = 100;
const dotD = 5;
// const fullDeg = 360;
// const pointCount = 36;
// const perspective = 80;
// const degStep = fullDeg / pointCount;

// wrap for space of sphere
export const SphereSpace = styled.div`
    position: relative;
    width: ${2 * radius + 20}px;
    height: ${2 * radius + 20}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.constants.black};
`;


export const SphereWrap = styled.div<{ $spin: boolean }>`
    ${({ $spin }) => css`
      position: absolute;
      width: ${2 * radius}px;
      height: ${2 * radius}px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      perspective: 2000px;
      /* transform: rotateY(10deg); */
      animation: spin 10s linear infinite;
      animation-play-state: ${$spin ? 'running' : 'paused'};
    
      @keyframes spin {
        0% {transform: rotateY(0deg) rotateX(10deg)}
        100% {transform: rotateY(360deg) rotateX(30deg)}
      }
    `}
`;

export const SphereLine = styled.div<{ angle: number }>`
  position: absolute;
  width: ${dotD}px;
  height: ${dotD}px;
  border-radius: 50%;
  transform-style: preserve-3d;
  transform: rotateY(${({ angle }) => angle}deg);
`;

export const SphereDot = styled.div<{ angle: number, type: 'front' | 'back' }>`
   ${({ angle, type, theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${type === 'front' ? theme.colors.dot : `rgba(255, 255, 255, ${theme.colors.dotAlfa}%)`};
    backface-visibility: ${type === 'front' ? 'hidden' : 'visible'};
    border-radius: 50%;
    transform: rotateX(${angle}deg) translateZ(${radius}px);
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