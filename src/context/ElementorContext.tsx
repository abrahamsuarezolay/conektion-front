import { createContext, useEffect, useState } from "react";
import { elementorContextType } from "../types/dataLang.types";
import { Props } from "../types/context.types";
import { getAllElementor } from "../services/elementorApi.service";


const ElementorContext = createContext<elementorContextType>({
    elementorPages: [{}]
})

const ElementorProvider = ({children}:Props) => {

    const [elementorPages, setElementorPages] = useState()


    useEffect(() => {
        getAllElementor().then((elementorData) => {
            setElementorPages(elementorData)
        })
    }, [])

    return <ElementorContext.Provider value={{
        elementorPages
    }}>
        {children}
    </ElementorContext.Provider>
}

export default ElementorContext
export { ElementorProvider }