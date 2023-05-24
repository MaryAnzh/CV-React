import React, { useContext } from 'react';
import { IDictionary } from '../../../translator/dictionaries/interface';
import { LanguageContext } from '../../../translator/context';

export const Text = ({ tid }: { tid: keyof IDictionary }) => {
    const languageContext = useContext(LanguageContext);
    
    return (
        <span>
            {languageContext.dictionary[tid] || tid}
        </span>
    )
};