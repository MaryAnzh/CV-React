import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { type RootState } from '~store';

import { DARK, LIGHT, MAIN_ROUTE } from '~constants';
import { MainPage } from '~pages';

import * as S from './AppStyled';
import { AppLayout } from 'layouts/AppLayout';

export const App = () => {
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<BrowserRouter basename="/CV-React">
			<S.APPWrap data-theme={theme === LIGHT ? undefined : DARK}>
				<AppLayout />
			</S.APPWrap>
		</BrowserRouter>
	);
};
