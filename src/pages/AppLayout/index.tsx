import { useMemo } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import * as C from '~constants';
import type { AppRoutesType } from '~types';

import { ROUTES_MAP } from './constants';

export function AppLayout() {

	const appRoutesMemo = useMemo(() => {
		const getAppLayoutRoutes = (routes: AppRoutesType) =>
			routes.map(({ name, childrenRoutes, element, ...props }) => (
				<Route key={name} element={element || <Outlet />} {...props}>
					{childrenRoutes && getAppLayoutRoutes(childrenRoutes)}
				</Route>
			));

		return getAppLayoutRoutes(ROUTES_MAP);
	}, []);

	return (
		<Routes>
			{appRoutesMemo}
			<Route
				path="/"
				element={
					<Navigate
						to={C.ROUTE_ACCOUNT_WORKSPACE}
						replace
					/>
				}
			/>
			<Route path="*" element={<Navigate to={C.ROUTE_NOT_FOUND} replace />} />
		</Routes>
	);
}
