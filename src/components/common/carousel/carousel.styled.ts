import styled, {css} from "styled-components";

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
  perspective: 1000px;
  /* animation: spin linear 10s infinite; */
  
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

export const CarouselCardFront = styled.div<{ index: number }>`
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

export const CarouselCardBack = styled.div<{ index: number }>`
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