import { observer } from 'mobx-react-lite';

import { Button, Icon, Typography } from 'components/ui';
import type { HeaderProps } from './types';

import * as S from './styled';

import type { ThemeType } from '~types';

import { AUTHOR, DARK, LIGHT } from '~constants';

export const Header = observer(({ onChangeTheme, theme }: HeaderProps) => {
	const handleChange = (theme: ThemeType) => () => {
		onChangeTheme(theme);
	};

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
						onClick={() => onChangeTheme(themeName)}
						isRoundButton
						disabled={theme == themeName}
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
});
