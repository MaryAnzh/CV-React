import styled from 'styled-components';
import { Sidebar } from './Sidebar';

export const MainPageWrap = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 360px auto;
	grid-template-rows: min-content auto min-content;
	gap: var(--p-3);
	background: var(--secondary-200);
	color: var(--base-contrast);
`;

export const SidebarWrapper = styled(Sidebar)`
	grid-row: 1/4;
`;

export const AccountPAgeWrap = styled.div`
	width: 100%;
	height: 100%;
	padding: var(--p-4);
	display: grid;
	gap: var(--p-3);
`;
