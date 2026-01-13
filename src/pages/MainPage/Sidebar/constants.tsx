import { GALLERY, ABOUT_ME } from "~constants";
import * as R from "~constants";

export const SIDEBAR_MAP = [
    {
        name: ABOUT_ME,
        path: R.ROUTE_ACCOUNT_ABOUT_ME
    },
    {
        name: GALLERY,
        path: R.ROUTE_ACCOUNT_GALLERY,
    },
    {
        name: R.NOT_FOUND,
        path: R.ROUTE_NOT_FOUND,
    },
];