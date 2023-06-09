import { ITheme, IThemeColors, ThemeEnum } from "../theme.interface";
import { themeConst } from "../themeConstants";

const colors: IThemeColors = {
    main: '#333',
    contrast: 'white',
}

export const blackTheme: ITheme = {
    name: ThemeEnum.black,
    constants: themeConst,
    colors: colors,
}