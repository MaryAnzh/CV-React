import React, { useState } from "react";
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
    const listItem = navList.map((el) => {
        return (
            <BurgerNavItem key={el.name}>
                <Link to={el.path}>
                    <Text tid={el.translateKey} />
                </Link>
            </BurgerNavItem>
        )
    });

    const [open, setOpen] = useState(false);

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
            <BurgerNavPanel className='burger__panel'>
                {listItem}
            </BurgerNavPanel>
        </BurgerStyle>
    );
}