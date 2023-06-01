import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './nav.styled';
import { Pages, PagesEnum, navList } from '../../../pages/pages-const';

export const Nav = () => {
    const listItem = navList.map((el) => {
        return (
            <li key={el.name}>
                <Link to={el.path}>
                    {el.name}
                </Link>
            </li>
        )
    });
    return (
        <NavStyle>
            {listItem}
        </NavStyle>)
}