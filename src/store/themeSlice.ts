import { createSlice, type PayloadAction, type SliceCaseReducers, type SliceSelectors } from '@reduxjs/toolkit';
import { DARK, THEME } from '~constants';
import type { ThemeType } from '~types';

const initialState: ThemeType = DARK;
const themeSlice = createSlice<
    ThemeType,
    SliceCaseReducers<ThemeType>,
    typeof THEME,
    SliceSelectors<ThemeType>>({
        name: THEME,
        initialState,
        reducers: {
            setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
            toggleTheme: (state) => { return state === 'light' ? 'dark' : 'light'; }
        },
    });

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
