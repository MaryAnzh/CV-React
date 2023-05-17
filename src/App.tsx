import React, { useContext, useEffect } from 'react';
import { ThemeContext } from "styled-components";

import { theme } from './themes/themes';
import {
  AppStyle,
  PageStyle
} from './AppStyle';
import { Header } from './components/common/header/header';
import { LanguageProvider } from './translator/provider';
import { LanguageContext } from './translator/context';

function App() {

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={theme.light}>
        <AppStyle>
          <Header />
        </AppStyle>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
