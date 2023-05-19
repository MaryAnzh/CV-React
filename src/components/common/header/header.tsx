import React, { useContext, useEffect } from "react";

import { LanguageContext } from "../../../translator/context";
import { ThemeEnum } from "../../../themes/theme.interface";
import { IThemes } from "../../../themes/themes";

import { LanguageSelector } from "../../smart/lang-selector/langSelector";
import { Text } from "../../smart/text/text";
import { ThemeButton } from "../themeButton/themeButton";
import {
    HeaderStyle,
    HeaderWrap
} from "./header.styled";

type HeaderProps = {
    changeTheme: (name: keyof IThemes) => void
}

export const Header: React.FC<HeaderProps> = (props) => {

    const changeTheme = (name: ThemeEnum) => {
        props.changeTheme(name);
    }

    const { userLanguageChange } = useContext(LanguageContext);

    useEffect(() => {
        if (userLanguageChange) {
            userLanguageChange();
        }
    }, []);

    return (
        <HeaderStyle>
            <HeaderWrap>
                <h2>
                    <Text tid='AUTHOR' />
                </h2>
                <div>
                    <ThemeButton
                        name={ThemeEnum.light}
                        changeTheme={changeTheme} />
                    <ThemeButton
                        name={ThemeEnum.black}
                        changeTheme={changeTheme} />
                </div>
                <LanguageSelector />
            </HeaderWrap>
        </HeaderStyle>
    );
}