import styled, { css } from "styled-components";

const radius = 200;
const dotR = 10;
const fullDeg = 360;
const pointCount = 36;
const perspective = 1000;
const degStep = fullDeg / pointCount;

export const SphereWrapStyle = styled.div`
    position: relative;
    width: ${radius}px;
    height: ${radius}px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: ${perspective}px;
    background-color: ${({ theme }) => theme.colors.contrast};
`;

export const SphereStyle = styled.div`
  position: absolute;
  width: ${dotR}px;
  height: ${dotR}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  /* transform:  rotateX(-6deg) translateY(-40px); */
`;

export const Parallel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transform-origin: center;
  transform: perspective(${perspective}px);
`;

export const Dot = styled.div<{ $front: boolean, index: number }>`
   ${({ $front, index }) =>
        css`
     position: absolute;
     width: 100%;
     height: 100%;
     border-radius: 50%;
     background-color: ${$front ? 'white' : '#eee'};
     backface-visibility: ${$front ? 'hidden' : 'visible'};
     transform-origin: center;
     transform: perspective(${perspective}px) rotateY(${degStep * index}deg);
     z-index: ${$front ? '5' : '4'};
    `} 
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 360px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  width: calc(100% - 2 * 20px - 2 * 40px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselBodyWrap = styled.div`
  width: 200px;
  height:150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .3s;
  transform:  rotateX(-6deg) translateY(-40px);
  animation: spin linear 10s infinite;
  
  @keyframes spin {
      0% {transform: perspective(1000px) rotateY(0deg)}
      100% {transform: perspective(1000px) rotateY(-360deg)}
    }
`;

export const CarouselBody = styled.div`
  width: 200px;
  height:150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transform-origin: center;
  transition: all .3s;
`;

export const CarouselCard = styled.div<{ index: number }>`
    ${({ index }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    background-color: gray;
    transform: rotateY(${45 * index}deg) translateZ(290px);
    z-index: 11;
    `}    
`;

export const CarouselCardBackFace = styled.div<{ index: number }>`
    ${({ index }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    background-color: black;
    transform: rotateY(${45 * index}deg) translateZ(290px);
    z-index: 10;
    `}  
`;