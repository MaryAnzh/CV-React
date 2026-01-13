
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { type RootState, setTheme } from '~store';
import { DARK, GAME, HOME, LIGHT, ROUTE_ACCOUNT_ABOUT_ME, ROUTE_GAMES, ROUTES_NAME_MAP } from '~constants';
import type { ButtonProps } from '~components';
import type { ThemeType } from '~types';

import type { HeaderProps } from './types';

import * as S from './styled';

export const Header = ({ isGamePage, isMyMainPage }: HeaderProps) => {
	const theme = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	const handleChangeTheme = (themeName: ThemeType) => () => dispatch(setTheme(themeName));
	const { pathname } = useLocation();
	const pageName = ROUTES_NAME_MAP[pathname];

	const buttons = [
		{
			Button: S.HeaderNavToGamesButton,
			key: HOME,
			buttonColorVariant: 'main',
			buttonText: isGamePage ? HOME : GAME,
			buttonNavigateTo: isGamePage ? ROUTE_ACCOUNT_ABOUT_ME : ROUTE_GAMES
		},
		{
			Button: S.HeaderLightThemeButton,
			key: LIGHT,
			buttonColorVariant: 'ghostDark',
			buttonLeftIconName: 'sun',
			isRoundButton: true,
			disabled: theme === LIGHT,
			onClick: handleChangeTheme(LIGHT)
		},
		{
			Button: S.HeaderDarkThemeButton,
			key: DARK,
			buttonColorVariant: 'ghostDark',
			buttonLeftIconName: 'moon',
			isRoundButton: true,
			disabled: theme === DARK,
			onClick: handleChangeTheme(DARK)
		},
		{
			Button: S.SettingsButton,
			key: 'settings',
			buttonColorVariant: 'ghostDark',
			buttonLeftIconName: 'settings',
			isRoundButton: true,
		},
		{
			Button: S.HeaderBurgerButton,
			key: 'burger',
			buttonColorVariant: 'ghostDark',
			buttonLeftIconName: 'burger',
			isRoundButton: true,
		},
	];

	return (
		<S.HeaderWrap isGamePage={isGamePage} isMyMainPage={isMyMainPage}>
			<S.LogoWrapper isMyMainPage={isMyMainPage} />
			<S.HeaderPageName
				asTag='h2'
				textView='headingMRegular'>
				{pageName}
			</S.HeaderPageName>
			{buttons.map(({ Button, key, ...props }) => (
				<Button key={key} {...props as ButtonProps} />
			))}
		</S.HeaderWrap>
	);
};
