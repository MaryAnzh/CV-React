import { ITheme, IThemeColors, ThemeEnum } from "../theme.interface";
import { themeConst } from "../themeConstants";

const colors: IThemeColors = {
    main: '#ffffff',
    contrast: '#333',
}

export const lightTheme: ITheme = {
    name: ThemeEnum.light,
    constants: themeConst,
    colors: colors,
}