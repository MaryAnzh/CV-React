import React from "react";
import {
    BurgerStyle,
    BurgerLine
} from "./burger.styled";

export const Burger = () => {
    const lineCount = 3;
    const lines = [...Array(lineCount).keys()].map((el) => {
        return (<BurgerLine key={el}></BurgerLine>);
    });

    return (
        <BurgerStyle>
            {lines}
        </BurgerStyle>
    );
}