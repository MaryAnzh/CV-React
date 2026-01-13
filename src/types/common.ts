import type {
	ICON_PICKER,
	TEXT_VIEW_NAME,
	DARK,
	LIGHT,
	SIZE_CHART,
} from '~constants';

export type ThemeType = typeof DARK | typeof LIGHT;

export type IsActiveType = { isActive: boolean };

export type CardType = {
	id: number;
	url: string;
};

export type TextViewNameType = keyof typeof TEXT_VIEW_NAME;

export type IconNameType = keyof typeof ICON_PICKER;

export type SizeChartType = keyof typeof SIZE_CHART;

export type IsGamePage = { isGamePage?: boolean };
export type IsMainPage = { isMyMainPage?: boolean }; 
