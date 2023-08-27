import styled, { css } from "styled-components";
import { carouselConst } from "./carousel.const";

export const CarouselWrap = styled.div`
  width: 100%;
  height: ${carouselConst.wrapHight}px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  width: calc(100% - 2 * ${carouselConst.cardsInterval}px - 2 * ${carouselConst.cardsInterval * 2}px);
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

export const CarouselCard = styled.div<{ index: number, type: 'back' | 'front' }>`
    ${({ index, type, theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    transform: rotateY(${45 * index}deg) translateZ(290px);
    background-color: ${type === 'front' ? '#eee' : 'gray'};
    backface-visibility: ${type == 'front' ? 'hidden' : 'visible'};
    z-index: ${type === 'front' ? '5' : '4'};
    `}
`;

export const CarouselButton = styled.button<{ direction: 'prev' | 'nest' }>`
  ${({ type, theme }) =>
    css`
      width: ${carouselConst.buttonSize}px;
      height: ${carouselConst.buttonSize}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: ${theme.colors.button};
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 25%);
      cursor: pointer;
      transition: .3s;

      &:hover {
        background: ${theme.colors.buttonHover};

        svg {
          fill: ${theme.colors.arrowHover};
        }
      }

      &:active {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 5%);
      }
  `}
`;