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
    h4FontSize: string,
}

export interface IThemeColors {
    main: string,
    contrast: string,
    arrow: string,
    arrowHover: string,
    button: string,
    buttonHover: string,
    card: string,
    cardBorder: string,
    dot: string,
    dotAlfa: number,
    shadow: string,
    footer: string
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