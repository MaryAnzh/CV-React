import styled from '@emotion/styled';
import { Sidebar } from './Sidebar';
import { Logo } from '~components';

export const MainPageWrap = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 360px auto;
	grid-template-rows: min-content auto min-content;
	gap: var(--p-3);

	& > footer {
		grid-column: 1/3;
	}
`;

export const SidebarLogo = styled(Logo)`
	grid-column: 1/2;
	grid-row: 1/2;
	padding: var(--p-4);
`;

export const SidebarWrapper = styled(Sidebar)`
	grid-column: 1/2;
	grid-row: 2/3;
`;

export const AccountPAgeWrap = styled.div`
	width: 100%;
	height: 100%;
	padding: var(--p-4);
	display: grid;
	gap: var(--p-3);
`;
