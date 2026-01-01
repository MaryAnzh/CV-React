import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Footer, Header } from "~components";
import { LIGHT, MAIN_ROUTE } from "~constants";
import { MainPage } from "~pages";
import type { ThemeType } from "~types";

import * as S from "./AppStyled";

const App = observer(() => {
  const [theme, setTheme] = useState<ThemeType>(LIGHT);

  const handleChangeTheme = (theme: ThemeType) => {
    setTheme(theme);
  };

  return (
    <BrowserRouter>
      <S.APPWrap data-theme={theme}>
        <Header onChangeTheme={handleChangeTheme} />
        <Routes>
          <Route path={MAIN_ROUTE} element={<MainPage />} />
        </Routes>
        <Footer />
      </S.APPWrap>
    </BrowserRouter>
  );
});

export { App };
