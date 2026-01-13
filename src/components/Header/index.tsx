
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { type RootState, setTheme } from '~store';
import { DARK, GAME, LIGHT, ROUTE_GAMES, ROUTES_NAME_MAP } from '~constants';
import type { ThemeType } from '~types';

import { Button, Typography } from '../ui';
import type { HeaderProps } from './types';

import * as S from './styled';

export const Header = ({ isGamePage, isMyMainPage }: HeaderProps) => {
	const theme = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	const handleChangeTheme = (themeName: ThemeType) => () => dispatch(setTheme(themeName));
	const { pathname } = useLocation();
	const pageName = ROUTES_NAME_MAP[pathname];

	return (
		<S.HeaderWrap isGamePage={isGamePage} isMyMainPage={isMyMainPage}>
			<S.LogoWrapper isMyMainPage={isMyMainPage} />
			<Typography asTag='h2' textView='headingMRegular'>{pageName}</Typography>
			{!isGamePage &&
				<Button
					buttonColorVariant='main'
					buttonText={GAME}
					buttonNavigateTo={ROUTE_GAMES}
				/>
			}
			<S.HeaderThemeWrap>
				{[LIGHT, DARK].map((themeName) => (
					<Button
						key={themeName}
						buttonColorVariant="ghostDark"
						buttonLeftIconName={themeName === DARK ? 'moon' : 'sun'}
						isRoundButton
						disabled={theme === themeName}
						onClick={handleChangeTheme(themeName)}
					/>
				))}
			</S.HeaderThemeWrap>
			<Button
				buttonColorVariant="ghostDark"
				buttonLeftIconName="settings"
				isRoundButton
			/>
		</S.HeaderWrap>
	);
};
