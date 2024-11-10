
import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsHeader.scss"
import LanguageContext from '../../../../context/LangContext'
import { getAboutUsHeader } from '../../../../services/api.service'
import { AboutUsHeaderType } from '../../../../types/api.types'

export const AboutUsHeader = () => {

    const { langCode } = useContext(LanguageContext)

    const [loading, setLoading] = useState<boolean>(true)
    const [headerData, setHeaderData] = useState<AboutUsHeaderType>()


    useEffect(() => {
        setLoading(true)
        getAboutUsHeader(langCode).then((response) => {
            if(response){
              setHeaderData(response)
              setLoading(false)
            }
          })
    }, [langCode])


    return (
        <div className='about-us-header-container'>
            
        </div>
    )
}
