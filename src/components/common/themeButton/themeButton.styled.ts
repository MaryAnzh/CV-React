import { styled } from "styled-components";
import { ThemeEnum } from "../../../themes/theme.interface";

type ThemeButtonType = {
    name: ThemeEnum
}

export const ThemeButtonStyle = styled.button<ThemeButtonType>`
  position: absolute;
  width: ${({ theme }) => theme.constants.iconSize};
  height: ${({ theme }) => theme.constants.iconSize};
  border-radius: 50%;
  background: none;
  transition: .3s;
  cursor: pointer;
  ${(({ name }) => name === ThemeEnum.black ? 'right: 0' : 'right: 0')};
  opacity: ${(({ name, theme }) => name === theme.name ? '1' : '0.4')};
  pointer-events: ${(({ name, theme }) => name === theme.name ? 'none' : 'all')};
  transform-origin: -25%;
  

  &:hover {
    opacity: 1;
  }

  @keyframes fly-to-left {
    from {
    transform: rotate(0deg);
    }
    to {
      transform: rotate(-180deg);
    }
  }
  @keyframes fly-to-right {
    from {
    transform: rotate(-180deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

`;