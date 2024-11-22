import { createContext, useEffect, useState } from "react";
import { Props } from "../types/context.types";
import { dataLang, languageContextType } from "../types/dataLang.types";
import { langES, langEN } from "../config/dataLang";



const LanguageContext = createContext<languageContextType>({})

const LanguageProvider = ({ children }:Props) => {

    const [langCode, setLangCode] = useState(navigator.language)
    const [language, setLanguage] = useState<dataLang>(langEN)

    useEffect(() => {


        if(langCode.toLocaleUpperCase().includes("ES")){
            setLangCode("ES")
            setLanguage(langES)
        }else{
            setLangCode("EN")
            setLanguage(langEN)
        }
    }, [langCode])

    return(
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            langCode,
            setLangCode
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext

export { LanguageProvider }