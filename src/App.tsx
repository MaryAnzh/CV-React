import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppLayout } from '~pages';
import { type RootState } from '~store';


import * as S from './AppStyled';

export const App = () => {
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<BrowserRouter basename="/CV-React">
			<S.APPWrap data-theme={theme}>
				<AppLayout />
			</S.APPWrap>
		</BrowserRouter>
	);
};
