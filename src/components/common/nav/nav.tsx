import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { navList } from '../../../pages/pages-const';
import { Text } from '../../smart/text/text';

import {
    NavStyle,
    NavItem
} from './nav.styled';

export const Nav = () => {
    const location = useLocation();
    const listItem = navList.map((el) => {
        return (
            <NavItem key={el.name} 
            $current={location.pathname === el.path}>
                <Link to={el.path}>
                    <Text tid={el.translateKey} />
                </Link>
            </NavItem>
        )
    });
    return (
        <NavStyle>
            {listItem}
        </NavStyle>)
}