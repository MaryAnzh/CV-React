import { Outlet } from 'react-router-dom';

import { Footer, Header } from '~components';

import * as S from './styled';

export const MainPage = () => {
	return (
		<S.MainPageWrap>
			<S.SidebarLogo />
			<S.SidebarWrapper />
			<Header isMyMainPage />
			<Outlet />
			<Footer />
		</S.MainPageWrap>
	);
};
