import { M, S, XS } from '~constants';

export const BUTTON_COLOR_VARIANTS = {
	light: {
		bg: 'var(--base-contrast)',
		color: 'var(--base)',
		bgHover: 'var(--secondary-200)',
		colorHover: 'var(--main-400)',
		bgFocus: 'var(--secondary-200)',
		colorFocus: 'var(--base)',
		borderFocus: 'var(--secondary-400)',
		bgActive: 'var(--base-contrast)',
		colorActive: 'var(--secondary-600)',
	},
	dark: {
		bg: 'var(--main-400)',
		color: 'var(--base-contrast)',
		bgHover: 'var(--main-400)',
		colorHover: 'var(--base-contrast)',
		bgFocus: 'var(--main-400)',
		colorFocus: 'var(--base-contrast)',
		borderFocus: 'var(--secondary-400)',
		bgActive: 'var(--base)',
		colorActive: 'var(--secondary-400)',
	},
	grey: {
		bg: 'var(--grey-300)',
		color: 'var(--grey-600)',
		bgHover: 'var(--grey-400)',
		colorHover: 'var(--grey-500)',
		bgFocus: 'var(--grey-400)',
		colorFocus: 'var(--base)',
		borderFocus: 'var(--grey-400)',
		bgActive: 'var(--grey-500)',
		colorActive: 'var(--grey-100)',
	},
	ghostLight: {
		bg: 'none',
		color: 'var(--main-400)',
		bgHover: 'none',
		colorHover: 'var(--base)',
		bgFocus: 'none',
		colorFocus: 'var(--main-400)',
		borderFocus: 'transparent',
		bgActive: 'none',
		colorActive: 'var(--base)',
	},
	ghostDark: {
		bg: 'none',
		color: 'var(--main-400)',
		bgHover: 'none',
		colorHover: 'var(--main-200)',
		bgFocus: 'none',
		colorFocus: 'var(--secondary-400)',
		borderFocus: 'transparent',
		bgActive: 'none',
		colorActive: 'var(--base)',
	},
} as const;

export const BUTTON_SIZES = {
	[M]: {
		height: '40px',
		paddingVertical: '10px',
		paddingHorizontal: '16px',
		gap: '6px',
		borderRadius: '12px',
	},
	[S]: {
		height: '32px',
		paddingVertical: '8px',
		paddingHorizontal: '16px',
		gap: '6px',
		borderRadius: '8px',
	},
	[XS]: {
		height: '24px',
		paddingVertical: '6px',
		paddingHorizontal: '10px',
		gap: '4px',
		borderRadius: '6px',
	},
} as const;

export const BUTTON_ICON_SIZE = {
	[M]: 20,
	[S]: 16,
	[XS]: 12,
};

export const BUTTON_TEXT_SIZE = {
	[M]: 'bodySMedium',
	[S]: 'descriptionXSMedium',
	[XS]: 'descriptionXXSMedium',
} as const;
