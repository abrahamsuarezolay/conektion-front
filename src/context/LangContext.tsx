import { createContext, useEffect, useState } from "react";
import { Props } from "../types/context.types";
import { dataLang, languageContextType } from "../types/dataLang.types";
import { langES, langEN } from "../config/dataLang";



const LanguageContext = createContext<languageContextType>({})

const LanguageProvider = ({ children }:Props) => {

    const [langCode, setLangCode] = useState("ES")
    const [language, setLanguage] = useState<dataLang>(langES)

    useEffect(() => {
        
        switch (langCode){
            case "ES":
                setLanguage(langES)
                break;
            
            case "EN":
                setLanguage(langEN)
                break;

            default:
                setLanguage(langEN)
                break;
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