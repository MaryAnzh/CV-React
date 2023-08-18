export interface IThemeConst {
    maxAppSize: string,
    maxBlockSize: string,
    black: string,
    white: string,
    iconSize: string,
    borderRadius: string,
    mediaPhonePoint: string,
    mediaTabletPoint: string,
    burgerLineHight: string,
    h2FontSize: string,
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