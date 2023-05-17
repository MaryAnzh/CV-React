import React, { ChangeEvent, Context, useContext } from 'react';
import { IProvider, LanguageEnum, languageOptions } from '../../../translator/context';
import { LanguageContext } from '../../../translator/context';


export const LanguageSelector = () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (userLanguageChange) {
            userLanguageChange(value as LanguageEnum);
        }
    }

    return (
        <select
            onChange={(e) => handleLanguageChange(e)}
            value={userLanguage}
        >
            {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </select>
    );
};