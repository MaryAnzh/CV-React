import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_ACCOUNT_ABOUT_ME } from '~constants';

export const useBooleanState = (initialValue = false) => {
	const [value, setValue] = useState(initialValue);

	const setTrue = useCallback(() => setValue(true), []);
	const setFalse = useCallback(() => setValue(false), []);

	return { value, setTrue, setFalse } as const;
};

export const useNavigateTo = (initialValue = ROUTE_ACCOUNT_ABOUT_ME) => {
	const navigate = useNavigate();

	const navigateTo = navigate(initialValue);
	const navigateToCallbACK = () => navigate(initialValue);

	return { navigateTo, navigateToCallbACK } as const;
};
