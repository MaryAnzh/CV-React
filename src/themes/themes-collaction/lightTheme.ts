import { ITheme, IThemeColors, ThemeEnum } from "../theme.interface";
import { themeConst } from "../themeConstants";

const colors: IThemeColors = {
    main: '#ffffff',
    contrast: '#333',
    arrow: 'white',
    arrowHover: 'gray',
    button: '#D8D8D8',
    buttonHover: '#eee',
    card: '#eee',
    cardBorder: 'transparent',
}

export const lightTheme: ITheme = {
    name: ThemeEnum.light,
    constants: themeConst,
    colors: colors,
}