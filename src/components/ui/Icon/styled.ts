import styled, { css } from "styled-components";
import type { IconType } from "./models";

export const IconStyle = styled.svg<IconType>`
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 0;

  ${({ rotate, size, width }) => css`
    ${rotate &&
    css`
      transform: rotate(${rotate}deg);
    `};

    ${size &&
    css`
      max-width: 100%;
      max-height: 100%;
      width: ${width ?? size}px;
      ${!width && `height: ${size}px;`};
    `}
  `}
`;
