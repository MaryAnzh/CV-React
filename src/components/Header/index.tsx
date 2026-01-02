import { observer } from "mobx-react-lite";

import { Button } from "components/ui";
import type { HeaderProps } from "./types";

import * as S from "./styled";

import type { ThemeType } from "~types";

import { DARK, LIGHT } from "~constants";

export const Header = observer(({ onChangeTheme, theme }: HeaderProps) => {
  const handleChange = (theme: ThemeType) => () => {
    onChangeTheme(theme);
  };

  return (
    <S.HeaderWrap>
      <div></div>
      <S.HeaderThemeWrap>
        {[LIGHT, DARK].map((themeName) => (
          <Button
            key={themeName}
            buttonColorVariant="ghostDark"
            buttonLeftIconName={themeName === DARK ? "moon" : "sun"}
            onClick={() => onChangeTheme(themeName)}
            isRoundButton
            disabled={theme == themeName}
          />
        ))}
      </S.HeaderThemeWrap>
    </S.HeaderWrap>
  );
});
