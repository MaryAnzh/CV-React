import React, { useState } from 'react';
import { ThemeEnum } from '../../../themes/theme.interface';

import { ReactSVG } from "react-svg";
import { ThemeButtonStyle } from "./themeButton.styled";
import { useTheme } from 'styled-components';

type ThemeButtonType = {
    name: ThemeEnum,
    changeTheme: (theme: ThemeEnum) => void,
    isAnimationStart: boolean
}
enum AnimationEnum {
    none = 'none',
    active = 'fly-to-left 1s forwards',
    desActive = 'fly-to-right 1s linear forwards',
}
enum RotateEnum {
    active = 'rotate(-180deg)',
    desActive = 'rotate(0deg)',
}

export const ThemeButton: React.FC<ThemeButtonType> = (props) => {
    const currentTheme = useTheme();

    const currentRotate: RotateEnum = currentTheme && props.name === currentTheme.name ? RotateEnum.active : RotateEnum.desActive;
    const [rotate, useRotate] = useState<RotateEnum>(currentRotate);

    const animationStyle = {
        animation: currentTheme && props.isAnimationStart ?
            currentTheme.name === props.name ?
                AnimationEnum.active
                : AnimationEnum.desActive
            : AnimationEnum.none
        ,
        transform: rotate,
    }

    const changeTheme = () => {
        if (currentTheme) {
            if (currentTheme.name !== props.name) {
                props.changeTheme(props.name);
            }
        }
    }

    const animationEnd = () => {
        if (currentTheme) {
            if (currentTheme.name === props.name) {
                useRotate(() => RotateEnum.active);
            } else {
                useRotate(() => RotateEnum.desActive);
            }
        }
    }

    return (
        <ThemeButtonStyle
            onClick={changeTheme}
            onAnimationEnd={animationEnd}
            style={animationStyle}
            name={props.name}
        >
            {props.name === ThemeEnum.black ?
                <ReactSVG src='./icon/moon.svg' /> :
                <ReactSVG src='./icon/sun.svg' />
            }
        </ThemeButtonStyle>
    );
}