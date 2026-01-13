import styled from '@emotion/styled';
import { Logo } from '~components';
import { MIN_LAPTOP, PC24_SIZE } from '~constants';

export const MainPageWrap = styled.main`
	width: 100%;
	max-width: ${PC24_SIZE}px;
	height: 100%;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: min-content auto min-content;
	gap: var(--p-3);
	overflow: hidden;

	& > header {
		grid-row: 1/2;
	}

	@media (min-width: ${MIN_LAPTOP}) {
		grid-template-columns: 360px auto;
		
		& > footer {
			grid-column: 1/3;
		}		
	}
`;

export const SidebarLogo = styled(Logo)`
	grid-column: 1/2;
	grid-row: 1/2;
	display: none;

	@media (min-width: ${MIN_LAPTOP}) {
		display: flex;
		padding: var(--p-3);
	}
`;

export const SidebarWrapper = styled.aside`
	display: none;

	@media (min-width: ${MIN_LAPTOP}) {
		display: flex;
		grid-column: 1/2;
		grid-row: 2/3;
	}	
`;

export const AccountPAgeWrap = styled.div`
	width: 100%;
	height: 100%;
	padding: var(--p-4);
	display: grid;
	gap: var(--p-3);
`;
