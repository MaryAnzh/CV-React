import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { navList } from "../../../pages/pages-const";
import { Text } from "../../smart/text/text";

import {
    BurgerStyle,
    BurgerIconStyle,
    BurgerLine,
    BurgerNavPanel,
    BurgerNavItem
} from "./burger.styled";

export const Burger = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const listItem = navList.map(({ name, path, translateKey }) => {
        const active = false;
        return (
            <BurgerNavItem
                key={name}
                active={active}
                open={open}>
                <Link to={path}>
                    <Text tid={translateKey} />
                </Link>
            </BurgerNavItem>
        )
    });
    const onClick = () => {
        setOpen((prev) => prev = !open);
    }

    return (
        <BurgerStyle className='burger'>
            <BurgerIconStyle
                className='burger__icon'
                open={open}
                onClick={onClick}>
                <BurgerLine></BurgerLine>
                <BurgerLine></BurgerLine>
                <BurgerLine></BurgerLine>
            </BurgerIconStyle>
            <BurgerNavPanel
                className='burger__panel'
                open={open}>
                {listItem}
            </BurgerNavPanel>
        </BurgerStyle>
    );
}