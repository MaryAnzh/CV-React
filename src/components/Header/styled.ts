import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Logo } from 'components/ui';

import type { HeaderProps } from './types';

export const HeaderWrap = styled.header<HeaderProps>`
	width: 100%;
	padding: var(--p-4);
	gap: var(--p-4);
	display: grid;
	grid-template-columns: ${({ isMyMainPage }) => isMyMainPage ? 'auto repeat(3, min-content)' : 'max-content auto repeat(2, min-content)'};
	align-items: center;
	
	${({ isGamePage }) => isGamePage && css`
		& > h2 {
			justify-self: center;
		}
	`}
`;

export const LogoWrapper = styled(Logo) <Pick<HeaderProps, 'isMyMainPage'>>`
	${({ isMyMainPage }) => css`
		display: ${isMyMainPage ? 'none' : 'flex'};
	`}
`;

export const HeaderThemeWrap = styled.div`
	display: flex;
	gap: var(--p-1);
`;
