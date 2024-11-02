//In this type, we add all the strings used in the application. Then, in config > dataLang.ts we will add the actual content of the strings divided by languages.

export interface dataLang {
    hola?: string

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
}

export interface languageContextType {
    language?: dataLang
}