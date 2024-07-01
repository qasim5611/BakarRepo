import React, { createContext, useState } from 'react';
import {changeLanguage} from "i18next";

export const DataContext = createContext();

const ContextAPI = (props) => {
    const [loader, setLoader] = useState(false);
    const [lang, setLang] = useState(localStorage.getItem('lang'));
    const changeLANG = (lang) => {
        if (lang === 'en' || lang === 'kr') {
        setLang(lang);
        localStorage.setItem('lang', lang);
        changeLanguage(lang, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key');
        })
        }
    }
    return (
        <DataContext.Provider
            value={{
                setLoader,
                loader,
                setLang,
                lang,
                changeLANG
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default ContextAPI;
