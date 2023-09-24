import { IThemeConst } from "./theme.interface"

export const palette = {
  black: '#333',
  white: '#ffffff',
  lightGray: '#eee',
  lightGray_1: '#D8D8D8',
  green_base: '#B4F200',
  green_light_1: '#C9F83E',
  green_light_2: '#D6F870',
  green_dark_1: '#93B52D',
  green_dark_2: '#759D00',
}

export const themeConst: IThemeConst = {
  maxAppSize: '1200px',
  maxBlockSize: '780px',
  black: palette.black,
  white: palette.white,
  iconSize: '2rem',
  borderRadius: '6px',
  mediaPhonePoint: '500px',
  mediaTabletPoint: '680px',
  burgerLineHight: '2px',
  h2FontSize: '2rem',
  h4FontSize: '1.6rem'
}