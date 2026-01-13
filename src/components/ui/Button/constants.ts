import { M, S, XS } from '~constants';

export const BUTTON_COLOR_VARIANTS = {
	main: {
		bg: 'var(--main-200)',
		color: 'var(--secondary)',
		bgHover: 'var(--main-300)',
		colorHover: 'var(--secondary-100)',
		bgFocus: 'var(--main-200)',
		colorFocus: 'var(--secondary)',
		borderFocus: 'var(--main-100)',
		bgActive: 'var(--main)',
		colorActive: 'var(--secondary-300)',
	},
	secondary: {
		bg: 'var(--main-700)',
		color: 'var(--basis-contrast)',
		bgHover: 'var(--main-800)',
		colorHover: 'var(--basis-contrast)',
		bgFocus: 'var(--main-700)',
		colorFocus: 'var(--basis-contrast)',
		borderFocus: 'var(--secondary-800)',
		bgActive: 'var(--main-900)',
		colorActive: 'var(--secondary-400)',
	},
	grey: {
		bg: 'var(--secondary-200)',
		color: 'var(--basis)',
		bgHover: 'var(--secondary-300)',
		colorHover: 'var(--main-600)',
		bgFocus: 'var(--secondary-200)',
		colorFocus: 'var(--basis)',
		borderFocus: 'var(--secondary-400)',
		bgActive: 'var(--secondary-400)',
		colorActive: 'var(--basis)',
	},
	accent: {
		bg: 'var(--accent-600)',
		color: 'var(--basis)',
		bgHover: 'var(--accent-500)',
		colorHover: 'var(--basis)',
		bgFocus: 'var(--accent-600)',
		colorFocus: 'var(--basis)',
		borderFocus: 'var(--accent-800)',
		bgActive: 'var(--accent-700)',
		colorActive: 'var(--basis)',
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
