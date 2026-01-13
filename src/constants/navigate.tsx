import { ABOUT_ME, GALLERY, GAME } from "./dictionary";

export const { MAIN_ROUTE } = {
	MAIN_ROUTE: '/',
} as const;

export const {
	ROUTE_LOGIN,
	ROUTE_ACCOUNT,
	ROUTE_ACCOUNT_ABOUT_ME,
	ROUTE_ACCOUNT_GALLERY,
	ROUTE_GAMES,
	ROUTE_NOT_FOUND,
} = {
	ROUTE_LOGIN: '/login',
	ROUTE_ACCOUNT: '/account',
	ROUTE_ACCOUNT_ABOUT_ME: '/account/about-me',
	ROUTE_ACCOUNT_GALLERY: '/account/gallery',
	ROUTE_GAMES: '/games',
	ROUTE_NOT_FOUND: '/404',
};

export const ROUTES_NAME_MAP = {
	[ROUTE_ACCOUNT_ABOUT_ME]: ABOUT_ME,
	[ROUTE_ACCOUNT_GALLERY]: GALLERY,
	[ROUTE_GAMES]: GAME,
}