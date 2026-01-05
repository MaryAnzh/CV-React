import { Footer, Header } from '~components';
import * as S from './styled';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
	return (
		<S.MainPageWrap>
			<Header />
			<Outlet />
			<Footer />
		</S.MainPageWrap>
	);
};
