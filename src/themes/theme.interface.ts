export interface IThemeConst {
    maxAppSize: number,
    black: string,
    white: string,
    iconSize: string,
    borderRadius: string,
    mediaPhonePoint: string,
    mediaTabletPoint: string,
}

export interface IThemeColors {
    main: string,
    contrast: string,
}

export interface ITheme {
    name: ThemeEnum,
    constants: IThemeConst,
    colors: IThemeColors,
}

export enum ThemeEnum {
    black = 'black',
    light = 'light',
}