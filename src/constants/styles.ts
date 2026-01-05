export const {
	MOBILE,
	TABLET,
	LAPTOP,
	PC17,
	PC19,
	PC22,
	PC24,
	LAPTOP_DESKTOP,
} = {
	MOBILE: 'mobile',
	TABLET: 'tablet',
	LAPTOP: 'laptop',
	PC17: 'pc17',
	PC19: 'pc19',
	PC22: 'pc22',
	PC24: 'pc24',
	LAPTOP_DESKTOP: 'laptopDesktop',
} as const;

export const {
	mobile: MOBILE_SIZE,
	tablet: TABLET_SIZE,
	laptop: LAPTOP_SIZE,
	pc17: PC17_SIZE,
	pc19: PC19_SIZE,
	pc22: PC22_SIZE,
	pc24: PC24_SIZE,
} = {
	[MOBILE]: 375,
	[TABLET]: 768,
	[LAPTOP]: 1024,
	[PC17]: 1280,
	[PC19]: 1440,
	[PC22]: 1660,
	[PC24]: 1920,
} as const;

export const APP_MEDIA_MIN_SIZE = {
	[MOBILE]: '375px',
	[TABLET]: '768px',
	[LAPTOP]: '1024px',
	[PC17]: '1280px',
	[PC19]: '1440px',
	[PC22]: '1660px',
	[PC24]: '1920px',
} as const;

export const {
	[MOBILE]: MIN_MOBILE,
	[TABLET]: MIN_TABLET,
	[LAPTOP]: MIN_LAPTOP,
	[PC17]: MIN_PC_17,
	[PC19]: MIN_PC_19,
	[PC22]: MIN_PC_22,
	[PC24]: MIN_PC_24,
} = APP_MEDIA_MIN_SIZE;

export const APP_MEDIA_MAX_SIZE = {
	[MOBILE]: '767px',
	[TABLET]: '1023px',
	[LAPTOP]: '1279px',
	[PC17]: '1439px',
	[PC19]: '1659px',
	[PC22]: '1919',
} as const;

export const {
	mobile: MAX_MOBILE,
	tablet: MAX_TABLET,
	laptop: MAX_LAPTOP,
	pc17: MAX_PC_17,
	pc19: MAX_PC_19,
	pc22: MAX_PC_22,
} = APP_MEDIA_MAX_SIZE;

export const { MAX_LAPTOP_HEIGHT, MIN_LAPTOP_HEIGHT } = {
	MAX_LAPTOP_HEIGHT: '900px',
	MIN_LAPTOP_HEIGHT: '618px',
} as const;
