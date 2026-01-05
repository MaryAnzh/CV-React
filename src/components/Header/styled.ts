import styled from 'styled-components';

export const HeaderWrap = styled.header`
	width: 100%;
	padding: var(--p-4);
	gap: var(--p-2);
	display: grid;
	background-color: var(--secondary-300);
	grid-template-columns: auto max-content min-content;
`;

export const HeaderLogoWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--p-2);
`;

export const HeaderThemeWrap = styled.div`
	display: flex;
	gap: var(--p-1);
`;
