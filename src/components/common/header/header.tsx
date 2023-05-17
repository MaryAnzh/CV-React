import React, {useContext, useEffect} from "react";

import {
    HeaderStyle,
    HeaderWrap
} from "./header.styled";
import { LanguageSelector } from "../../smart/lang-selector/langSelector";
import { LanguageContext } from "../../../translator/context";
import { Text } from "../../smart/text/text";

export const Header = () => {
    const { userLanguageChange} = useContext(LanguageContext);

    useEffect(() => {
      if (userLanguageChange) {
        userLanguageChange();
      }
    }, []);

    return (
        <HeaderStyle>
            <HeaderWrap>
                <h2>
                    <Text tid='AUTHOR'/>
                </h2>
                <LanguageSelector />
            </HeaderWrap>
        </HeaderStyle>
    );
}