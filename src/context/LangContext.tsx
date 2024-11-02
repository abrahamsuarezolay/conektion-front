import { createContext, useState } from "react";
import { Props } from "../types/context.types";
import { dataLang, languageContextType } from "../types/dataLang.types";
import { langES } from "../config/dataLang";



const LanguageContext = createContext<languageContextType>({})

const LanguageProvider = ({ children }:Props) => {

    const [language, setLanguage] = useState<dataLang>(langES)

    return(
        <LanguageContext.Provider value={{
            language
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext

export { LanguageProvider }