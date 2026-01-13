import { Outlet } from 'react-router-dom';

import { Footer, Header } from '~components';
import { Sidebar } from './Sidebar';

import * as S from './styled';

export const MainPage = () => {
	return (
		<S.MainPageWrap>
			<S.SidebarLogo />
			<S.SidebarWrapper>
				<Sidebar />
			</S.SidebarWrapper>
			<Header isMyMainPage />
			<Outlet />
			<Footer />
		</S.MainPageWrap>
	);
};
