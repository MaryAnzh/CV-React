import React from 'react';
import { Link } from 'react-router-dom';
import { navList } from '../../../pages/pages-const';
import { Text } from '../../smart/text/text';

import {
    NavStyle,
    NavItem
} from './nav.styled';

export const Nav = () => {
    const listItem = navList.map((el) => {
        return (
            <NavItem key={el.name}>
                <Link to={el.path}>
                    <Text tid={el.translateKey}/>
                </Link>
            </NavItem>
        )
    });
    return (
        <NavStyle>
            {listItem}
        </NavStyle>)
}