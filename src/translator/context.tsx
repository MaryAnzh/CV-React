import { createContext } from "react";
import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";
import { IDictionary } from "./dictionaries/interface";

export const dictionaryList = { en, ru };

export enum LanguageEnum {
    en = 'en',
    ru = 'ru',
}

export const languageOptions = {
    en: LanguageEnum.en,
    ru: LanguageEnum.ru
}

export interface IProvider {
    userLanguage: LanguageEnum,
    dictionary: IDictionary,
    userLanguageChange?: (selected?: LanguageEnum) => void,
}

export const LanguageContext = createContext<IProvider>({
    userLanguage: LanguageEnum.en,
    dictionary: dictionaryList.en,
})