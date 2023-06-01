import React, { useState } from 'react';
import { ThemeContext } from "styled-components";
import { LanguageProvider } from './translator/provider';
import { IThemes, theme } from './themes/themes';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Header } from './components/common/header/header';
import { Pages } from './pages/pages-const';

import {
  AppStyle,
  MainStyle
} from './AppStyle';



export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(theme.light);

  const changeTheme = (name: keyof IThemes) => {
    const newTheme = theme[name];
    setSelectedTheme(() => newTheme);
  }

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={selectedTheme}>
        <BrowserRouter>
          <AppStyle>
            <Header changeTheme={changeTheme} />
            <MainStyle>
              <Routes>
                <Route path={Pages.home.path} element={<Pages.home.link />} />
                <Route path={Pages.info.path} element={<Pages.info.link />} />
                <Route path={Pages.animation.path} element={<Pages.animation.link />} />
                <Route path={Pages.games.path} element={<Pages.games.link />} />
                <Route path={Pages.blog.path} element={<Pages.blog.link />} />
              </Routes>
            </MainStyle>
          </AppStyle>
        </BrowserRouter>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
}
