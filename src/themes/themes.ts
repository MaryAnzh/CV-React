import { ThemeEnum } from "./theme.interface";
import { blackTheme } from "./themes-collaction/blackTheme";
import { lightTheme } from "./themes-collaction/lightTheme";

export const theme = {
    [ThemeEnum.black]: blackTheme,
    [ThemeEnum.light]: lightTheme
}