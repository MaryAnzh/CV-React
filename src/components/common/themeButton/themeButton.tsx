import React from 'react';
import { ThemeEnum } from '../../../themes/theme.interface';

import { ThemeButtonStyle } from "./themeButton.styled";
import { ReactSVG } from "react-svg";

type ThemeButtonType = {
    name: ThemeEnum,
    changeTheme: (theme: ThemeEnum) => void
}

export const ThemeButton: React.FC<ThemeButtonType> = (props) => {

    return (
        <ThemeButtonStyle
            onClick={() => props.changeTheme(props.name)}
            background={props.name === ThemeEnum.black ? '#333' : '#ffffff'}
            name={props.name}
        >
            {props.name === ThemeEnum.black ?
                <ReactSVG src='./icon/moon.svg' /> :
                <ReactSVG src='./icon/sun.svg' />
            }
        </ThemeButtonStyle>
    );
}