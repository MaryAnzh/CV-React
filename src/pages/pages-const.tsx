import React from "react";
import { Home } from "./home/home";
import { Info } from "./info/info";
import { Animation } from "./animation/animation";
import { Games } from "./games/games";
import { Blog } from "./blog/blog";
import { IDictionary } from "../translator/dictionaries/interface";

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
    translateKey: keyof IDictionary,
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
        translateKey: 'NAV_MAIN',
    },
    [PagesEnum.info]:
    {
        name: PagesEnum.info,
        path: `/${PagesEnum.info}`,
        link: Info,
        translateKey: 'NAV_INFO'
    },
    [PagesEnum.animation]:
    {
        name: PagesEnum.animation,
        path: `/${PagesEnum.animation}`,
        link: Animation,
        translateKey: 'NAV_ANIMATION'
    },
    [PagesEnum.games]:
    {
        name: PagesEnum.games,
        path: `/${PagesEnum.games}`,
        link: Games,
        translateKey: 'NAV_GAMES'
    },
    [PagesEnum.blog]:
    {
        name: PagesEnum.blog,
        path: `/${PagesEnum.blog}`,
        link: Blog,
        translateKey: 'NAV_BLOG'
    },
};

export interface INavItem {
    name: PagesEnum,
    path: '/' | `/${PagesEnum}`,
    translateKey: keyof IDictionary,
}

const createLinkList = () => {
    const list: INavItem[] = [];
    for (const k in Pages) {
        const key = k as keyof IPages;
        const item: INavItem = {
            name: Pages[key].name,
            path: Pages[key].path,
            translateKey: Pages[key].translateKey,
        }
        list.push(item);
    }
    return list;
}

export const navList = createLinkList();




