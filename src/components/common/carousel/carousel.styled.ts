import styled, { css } from "styled-components";
import { carouselConst } from "./carousel.const";

export const CarouselWrap = styled.div`
  max-width: ${carouselConst.carouselWidth}px;
  width: 100%;
  height: ${carouselConst.wrapHight}px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${carouselConst.carouselWidth}px) {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  width: calc(100% - 2 * ${carouselConst.cardsInterval}px - 2 * ${carouselConst.cardsInterval * 2}px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transform:  translateY(-40px) rotateX(-6deg) perspective(1000px);
`;

export const CarouselBodyWrap = styled.div<{ angle: number }>`
  ${({ angle }) => css`
    width: ${carouselConst.cardWidth}px;
    height: ${carouselConst.cardHight}px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;
    transform:  rotateY(${angle}deg);
    transition: all .5s;
  `}
`;

export const CarouselBody = styled.div`
    width: 100%;
    height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transform-origin: center;
  transition: all .6s;
`;

export const CarouselCard = styled.div<{ index: number, type: 'back' | 'front' }>`
    ${({ index, type, theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    transform-style: preserve-3d;
    border-radius: 8px;
    transform: rotateY(${45 * index}deg) translateZ(290px);
    background-color: ${type === 'front' ? theme.colors.card : 'gray'};
    border: 1px solid ${type === 'front' ? theme.colors.cardBorder : 'transparent'};
    backface-visibility: ${type == 'front' ? 'hidden' : 'visible'};
    z-index: ${type === 'front' ? '5' : '4'};
    `}
`;

export const CarouselCardTitle = styled.h4`
      font-size: ${({ theme }) => theme.constants.h4FontSize};
      font-weight: 300;
`;
export const CarouselCardList = styled.ul`
  width: 100%;
  padding-left: 0.5rem;
  list-style: disc;
`;
export const CarouselCardListItem = styled.li`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: 1rem;
`;

export const CarouselButton = styled.button<{ direction: 'prev' | 'nest', $disabled: boolean }>`
  ${({ $disabled, theme }) =>
    css`
      width: ${carouselConst.buttonSize}px;
      height: ${carouselConst.buttonSize}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: ${theme.colors.button};
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 25%);
      cursor: ${$disabled ? 'none' : 'pointer'};
      pointer-events: ${$disabled ? 'none' : 'all'};
      opacity: ${$disabled ? '0.5' : '1'};
      transition: .3s;;

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

