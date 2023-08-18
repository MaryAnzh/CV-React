import React, { ChangeEvent, useContext } from 'react';
import { LanguageContext, LanguageEnum, languageOptions } from '../../../translator/context';


export const LanguageSelector: React.FC = () => {
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