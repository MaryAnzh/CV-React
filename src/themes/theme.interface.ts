export interface IThemeConst {
    maxAppSize: number,
}

export interface IThemeColors {
    background: string
}

export interface ITheme {
    constants: IThemeConst,
    colors: IThemeColors,
}

export enum ThemeEnum {
    black = 'black',
    light = 'light',
}