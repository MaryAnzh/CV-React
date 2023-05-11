import React from 'react';
import { ThemeContext } from "styled-components";

import { theme } from './themes/themes';
import {
  AppStyle,
  PageStyle
} from './AppStyle';

function App() {
  return (
    <ThemeContext.Provider value={theme.light}>
      <AppStyle>
      </AppStyle>
    </ThemeContext.Provider>
  );
}

export default App;
