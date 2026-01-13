import * as C from '~constants';
import * as P from '~pages';

export const ROUTES_MAP = [
    {
        name: 'Authentication',
        path: C.ROUTE_LOGIN,
        element: <P.AuthenticationPage />,
    },
    {
        name: 'Not found',
        path: C.ROUTE_NOT_FOUND,
        element: <P.NotFoundPage />,
    },
    {
        name: 'Account',
        path: C.ROUTE_ACCOUNT,
        element: (
            <P.MainPage />
        ),
        childrenRoutes: [
            {
                name: C.ABOUT_ME,
                path: C.ROUTE_ACCOUNT_ABOUT_ME,
                element: <P.AboutMePage />,
            },
            {
                name: C.GALLERY,
                path: C.ROUTE_ACCOUNT_GALLERY,
                element: (
                    <P.Gallery />
                ),
            },
        ],
    },
    {
        name: 'Games',
        path: C.ROUTE_GAMES,
        element: <P.GamesPage />,
    }
];