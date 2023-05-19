import React, { useState } from 'react';
import { ThemeContext } from "styled-components";
import { LanguageProvider } from './translator/provider';
import { IThemes, theme } from './themes/themes';

import { Header } from './components/common/header/header';
import {
  AppStyle
} from './AppStyle';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(theme.light);

  const changeTheme = (name: keyof IThemes) => {
    const newTheme = theme[name];
    setSelectedTheme(() => newTheme);
  }

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={selectedTheme}>
        <AppStyle>
          <Header changeTheme={changeTheme} />
        </AppStyle>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
