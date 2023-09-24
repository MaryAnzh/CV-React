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
  
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  & .sun-svg {
    &__sun{
      fill: ${(({ name, theme }) => name === theme.name ? theme.constants.white : theme.constants.black)};
      stroke: ${(({ name, theme }) => name === theme.name ? theme.constants.black : theme.constants.white)};
      stroke-width:0.5;
      stroke-miterlimit:10;
      transition:.3s;
    }
  }
  &:hover .sun-svg {
    &__sun {
      fill: #eee;
    }
  }

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
      fill: #eee;
    }
  }

  @keyframes fly-to-left {
    from {
    transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-180deg);
    }
  }
  @keyframes fly-to-right {
    from {
    transform: rotateY(-180deg);
    }
    to {
      transform: rotateY(-360deg);
    }
  }

`;

