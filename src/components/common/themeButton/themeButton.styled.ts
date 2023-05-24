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
  pointer-events: ${(({ name, theme }) => name === theme.name ? 'none' : 'all')};
  transform-origin: -25%;
  
   & .moon-icon {
    &__fill {
      fill: ${(({ name, theme }) => name === theme.name ? theme.constants.white : theme.constants.black)};
      transition: .3s;
    }

    &__circle-fill {
      fill: ${(({ name, theme }) => name === theme.name ? theme.constants.white : theme.constants.black)};
    }
	  &__stroke{
      fill:none;
      stroke: ${(({ name, theme }) => name === theme.name ? theme.constants.white : theme.constants.black)};
      stroke-width:0.5;
      stroke-miterlimit:10;
      transition: .3s;
    }
  }

  &:hover .moon-icon {
    &__fill {
      fill: white;
    }
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

