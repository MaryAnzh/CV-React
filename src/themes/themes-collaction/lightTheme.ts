import { ITheme, IThemeColors, ThemeEnum } from "../theme.interface";
import { themeConst, palette } from "../themeConstants";

const colors: IThemeColors = {
    main: palette.white,
    contrast: palette.black,
    arrow: palette.white,
    arrowHover: 'gray',
    button: palette.lightGray_1,
    buttonHover: palette.lightGray,
    card: palette.lightGray,
    cardBorder: 'transparent',
    dot: 'pink',
    dotAlfa: 25,
}

export const lightTheme: ITheme = {
    name: ThemeEnum.light,
    constants: themeConst,
    colors: colors,
}