import React from 'react';
import { ThemeEnum } from '../../../themes/theme.interface';
import { useTheme } from 'styled-components';

import { ThemeButtonStyle } from "./themeButton.styled";
// import { ReactComponent as Sun } from './icon/sun.svg';
// import { ReactComponent as Moon } from './icon/moon.svg';
import { ReactSVG } from "react-svg";

type ThemeButtonType = {
    name: ThemeEnum,
    changeTheme: (theme: ThemeEnum) => void
}

export const ThemeButton: React.FC<ThemeButtonType> = (props) => {
    const theme = useTheme();

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