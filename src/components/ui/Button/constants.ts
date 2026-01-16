import * as C from '~constants';

export const BUTTON_COLOR_VARIANTS = {
	main: {
		bg: C.COLOR_MAIN_200,
		color: C.COLOR_SECONDARY,
		bgHover: C.COLOR_MAIN_300,
		colorHover: C.COLOR_SECONDARY_100,
		bgFocus: C.COLOR_MAIN_200,
		colorFocus: C.COLOR_SECONDARY,
		borderFocus: C.COLOR_MAIN_100,
		bgActive: C.COLOR_MAIN,
		colorActive: C.COLOR_SECONDARY_300,
	},
	secondary: {
		bg: C.COLOR_SECONDARY_200,
		color: C.COLOR_MAIN,
		bgHover: C.COLOR_SECONDARY_300,
		colorHover: C.COLOR_MAIN,
		bgFocus: C.COLOR_SECONDARY_400,
		colorFocus: C.COLOR_MAIN_100,
		borderFocus: C.COLOR_SECONDARY_100,
		bgActive: C.COLOR_SECONDARY_100,
		colorActive: C.COLOR_MAIN_300,
	},
	grey: {
		bg: C.COLOR_GRAY_400,
		color: C.COLOR_MAIN,
		bgHover: C.COLOR_GRAY_500,
		colorHover: C.COLOR_GRAY_100,
		bgFocus: C.COLOR_GRAY_500,
		colorFocus: C.COLOR_MAIN,
		borderFocus: C.COLOR_GRAY_400,
		bgActive: C.COLOR_GRAY_600,
		colorActive: C.COLOR_GRAY_100,
	},
	accent: {
		bg: C.COLOR_ACCENT_600,
		color: C.COLOR_BLACK,
		bgHover: C.COLOR_ACCENT_500,
		colorHover: C.COLOR_BLACK,
		bgFocus: C.COLOR_ACCENT_600,
		colorFocus: C.COLOR_BLACK,
		borderFocus: C.COLOR_ACCENT_800,
		bgActive: C.COLOR_ACCENT_700,
		colorActive: C.COLOR_BLACK,
	},
	ghostLight: {
		bg: C.NONE,
		color: C.COLOR_MAIN_400,
		bgHover: C.NONE,
		colorHover: C.COLOR_MAIN,
		bgFocus: C.NONE,
		colorFocus: C.COLOR_MAIN_400,
		borderFocus: C.TRANSPARENT,
		bgActive: C.NONE,
		colorActive: C.COLOR_MAIN,
	},
	ghostDark: {
		bg: C.NONE,
		color: C.COLOR_SECONDARY_200,
		bgHover: C.NONE,
		colorHover: C.COLOR_SECONDARY,
		bgFocus: C.NONE,
		colorFocus: C.COLOR_SECONDARY,
		borderFocus: C.TRANSPARENT,
		bgActive: C.NONE,
		colorActive: C.COLOR_SECONDARY_300,
	},
} as const;

export const BUTTON_SIZES = {
	[C.M]: {
		height: '40px',
		paddingVertical: '10px',
		paddingHorizontal: '16px',
		gap: '6px',
		borderRadius: '12px',
	},
	[C.S]: {
		height: '32px',
		paddingVertical: '8px',
		paddingHorizontal: '16px',
		gap: '6px',
		borderRadius: '8px',
	},
	[C.XS]: {
		height: '24px',
		paddingVertical: '6px',
		paddingHorizontal: '10px',
		gap: '4px',
		borderRadius: '6px',
	},
} as const;

export const BUTTON_ICON_SIZE = {
	[C.M]: 20,
	[C.S]: 16,
	[C.XS]: 12,
};

export const BUTTON_TEXT_SIZE = {
	[C.M]: 'bodySMedium',
	[C.S]: 'descriptionXSMedium',
	[C.XS]: 'descriptionXXSMedium',
} as const;
