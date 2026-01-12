import { Outlet } from 'react-router-dom';

import { Footer, Header } from '~components';

import * as S from './styled';

export const MainPage = () => {
	return (
		<S.MainPageWrap>
			<S.SidebarWrapper />
			<Header />
			<Outlet />
			<Footer />
		</S.MainPageWrap>
	);
};
