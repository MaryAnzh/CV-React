import { styled } from "styled-components";
import { ThemeEnum } from "../../../themes/theme.interface";

type ThemeButtonType = {
    background: string,
    name: ThemeEnum
}

export const ThemeButtonStyle = styled.button<ThemeButtonType>`
  width: ${({ theme }) => theme.constants.iconSize};
  height: ${({ theme }) => theme.constants.iconSize};
  border-radius: 50%;
  background: none;
  opacity: ${(({ name, theme }) => name === theme.name ? '1' : '0.4')};
  transition: .3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:active {
   transform: scale(1.1);
  }
`;