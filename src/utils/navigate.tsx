import type { NavigateFunction, NavigateOptions } from 'react-router-dom';

let navigateFunc: NavigateFunction | null = null;

export const setNavigate = (navigate: NavigateFunction) => {
	navigateFunc = navigate;
};

export const navigateTo = (route: string, options?: NavigateOptions) => {
	navigateFunc?.(route, options);
};
