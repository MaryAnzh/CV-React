import React, { useState } from "react";
import {
    BurgerStyle,
    BurgerLine
} from "./burger.styled";

export const Burger = () => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen((prev) => prev = !open);
    }

    return (
        <BurgerStyle
            open={open}
            onClick={onClick}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
        </BurgerStyle>
    );
}