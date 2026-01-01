import { observer } from "mobx-react-lite";

import type { HeaderProps } from "./types";

import * as S from "./styled";
import { DARK, LIGHT } from "~constants";
import { ThemeType } from "~types";

export const Header = observer(({ onChangeTheme }: HeaderProps) => {
  const handleChange = (theme: ThemeType) => () => {
    onChangeTheme(theme);
  };

  return (
    <S.HeaderWrap>
      {[LIGHT, DARK].map((name) => (
        <button key={name} onClick={handleChange(name)}>
          {name}
        </button>
      ))}
    </S.HeaderWrap>
  );
});
