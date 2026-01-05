
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, setTheme } from '~store';
import { Button, Typography } from 'components/ui';
import { AUTHOR, DARK, LIGHT } from '~constants';
import type { ThemeType } from '~types';


import * as S from './styled';


export const Header = () => {
	const theme = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	const handleChangeTheme = (themeName: ThemeType) => () => dispatch(setTheme(themeName));

	return (
		<S.HeaderWrap>
			<S.HeaderLogoWrap>
				<Typography asTag="h2" textView="bodyMRegular">
					CV
				</Typography>
				<Typography asTag="h2" textView="bodySRegular">
					{AUTHOR}
				</Typography>
			</S.HeaderLogoWrap>
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
