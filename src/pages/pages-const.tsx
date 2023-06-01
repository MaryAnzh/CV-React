import React from "react";
import { Home } from "./home/home";
import { Info } from "./info/info";
import { Animation } from "./animation/animation";
import { Games } from "./games/games";
import { Blog } from "./blog/blog";

export enum PagesEnum {
    home = 'home',
    info = 'info',
    animation = 'animation',
    games = 'games',
    blog = 'blog'
}

export interface IPage {
    name: PagesEnum,
    path: `/${PagesEnum}` | '/',
    link: React.FC,
}

interface IPages {
    [PagesEnum.home]: IPage,
    [PagesEnum.info]: IPage,
    [PagesEnum.animation]: IPage,
    [PagesEnum.games]: IPage,
    [PagesEnum.blog]: IPage,
}

export const Pages: IPages = {
    [PagesEnum.home]:
    {
        name: PagesEnum.home,
        path: '/',
        link: Home,
    },
    [PagesEnum.info]:
    {
        name: PagesEnum.info,
        path: `/${PagesEnum.info}`,
        link: Info,
    },
    [PagesEnum.animation]:
    {
        name: PagesEnum.animation,
        path: `/${PagesEnum.animation}`,
        link: Animation,
    },
    [PagesEnum.games]:
    {
        name: PagesEnum.games,
        path: `/${PagesEnum.games}`,
        link: Games,
    },
    [PagesEnum.blog]:
    {
        name: PagesEnum.blog,
        path: `/${PagesEnum.blog}`,
        link: Blog,
    },
};

export interface INavItem {
    name: PagesEnum,
    path: '/' | `/${PagesEnum}`,
}

const createLinkList = () => {
    const list: INavItem[] = [];
    for (const k in Pages) {
        const key = k as keyof IPages;
        const item: INavItem = {
            name: Pages[key].name,
            path: Pages[key].path,
        }
        list.push(item);
    }
    return list;
}

export const navList = createLinkList();




