import { ITheme, ThemeEnum } from "./theme.interface";
import { blackTheme } from "./themes-collaction/blackTheme";
import { lightTheme } from "./themes-collaction/lightTheme";

export interface IThemes {
    [ThemeEnum.black]: ITheme,
    [ThemeEnum.light]: ITheme
}

export const theme: IThemes = {
    [ThemeEnum.black]: blackTheme,
    [ThemeEnum.light]: lightTheme,
}