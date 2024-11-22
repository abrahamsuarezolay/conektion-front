//In this type, we add all the strings used in the application. Then, in config > dataLang.ts we will add the actual content of the strings divided by languages.

import { Dispatch, SetStateAction } from "react"

export interface dataLang {
    code?: string

    navbar?: {
        home?: string,
        instalation?: string,
        rental?: string,
        otherSolutions?: string,
        caseStudies?: string,
        contact?: string,
        comingEvents?: string,
        aboutUs?: string
    }

    aboutUs?: {
        meetTheTeam?: string,
        meetTheTeamDescription?: string
    }

    comingEvents?: {
        viewArchiveButton: string
    }
}

export interface languageContextType {
    language?: dataLang,
    setLanguage?: Dispatch<SetStateAction<dataLang>>,
    langCode?: string,
    setLangCode?: Dispatch<SetStateAction<string>>,
}