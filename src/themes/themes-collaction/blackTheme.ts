import { ITheme, IThemeColors, ThemeEnum } from "../theme.interface";
import { themeConst, palette } from "../themeConstants";

const colors: IThemeColors = {
    main: palette.black,
    contrast: palette.white,
    arrow: 'gray',
    arrowHover: palette.white,
    button: 'none',
    buttonHover: 'none',
    card: palette.black,
    cardBorder: palette.white,
    dot: palette.white,
    dotAlfa: 50,
}

export const blackTheme: ITheme = {
    name: ThemeEnum.black,
    constants: themeConst,
    colors: colors,
}