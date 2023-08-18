import React, { useState } from "react";
import { IProvider, LanguageContext, LanguageEnum, dictionaryList } from "./context";

export type LanguageProviderProps = {
    children: React.ReactNode,
}

const localLangKey = 'lang';

export const LanguageProvider = ({ children }: {
    children: React.ReactNode;
}) => {

    const [userLanguage, setUserLanguage] = useState<LanguageEnum>(LanguageEnum.en);

    const provider: IProvider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: (selected?: LanguageEnum) => {
            if (selected) {
                setUserLanguage(() => selected);
                window.localStorage.setItem(localLangKey, selected);
                return;
            }
            const defaultLanguage = window.localStorage.getItem(localLangKey);
            if (defaultLanguage !== null) {
                const lang = defaultLanguage as LanguageEnum;
                if (lang) {
                    setUserLanguage(() => lang);
                }
            }
        }
    };
    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};