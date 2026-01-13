import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Button, Icon, Logo, Typography } from 'components/ui';

import type { HeaderProps } from './types';
import { ICON_BASE_SIZE } from '~constants';
import { MIN_LAPTOP } from 'constants/styles';

export const HeaderWrap = styled.header<HeaderProps>`
	width: 100%;
	padding: var(--p-3);
	gap: var(--p-3);
	display: grid;
	grid-template-columns: 50% auto repeat(2, ${ICON_BASE_SIZE}px);
	grid-template-rows: min-content max-content min-content;
	
	@media (min-width: ${MIN_LAPTOP}) {
		grid-template-columns: max-content auto ${({ isGamePage }) => isGamePage && 'min-content'} repeat(3, ${ICON_BASE_SIZE}px);
		align-items: center;
		grid-template-rows: 100%;

		${({ isGamePage }) => isGamePage && css`
			& > h2 {
				justify-self: center;
			}

			& > button:nth-of-type(1) {
				grid-column: 3/4;
			}

			& > button:nth-of-type(2) {
				grid-column: 4/5;
			}

			& > button:nth-of-type(3) {
				grid-column: 5/6;
			}

			& > button:nth-of-type(4) {
				grid-column: 6/7;
			}
		`}
	}	
`;

export const LogoWrapper = styled(Logo) <Pick<HeaderProps, 'isMyMainPage'>>`
	display: flex;
	grid-row: 1/3;

	@media (min-width: ${MIN_LAPTOP}) {
		${({ isMyMainPage }) => css`
			display: ${isMyMainPage ? 'none' : 'flex'};
		`}
		align-self: stretch;
	}
`;

export const HeaderLightThemeButton = styled(Button)`
	grid-column: 3/4;
	grid-row: 1/2;
	align-self: center;
`;

export const HeaderDarkThemeButton = styled(Button)`
	grid-column: 4/5;
	grid-row: 1/2;
	align-self: center;
`;

export const SettingsButton = styled(Button)`
	grid-row: 2/3;
	grid-column: 3/4;
	align-self: center;

	@media (min-width: ${MIN_LAPTOP}) {
		grid-row: 1/2;
		grid-column: 5/6;
	}
`;

export const HeaderNavToGamesButton = styled(Button)`
	grid-row: 1/2;
	grid-column: 2/3;
	justify-self: flex-end;
`;

export const HeaderPageName = styled(Typography)`
	grid-row: 3/4;

	@media (min-width: ${MIN_LAPTOP}) {
		grid-row: 1/2;
	}
`;

export const HeaderBurgerButton = styled(Button)`
	grid-row: 2/3;
	grid-column: 4/5;
	align-self: center;

	@media (min-width: ${MIN_LAPTOP}) {
		display: none;
	}

`;