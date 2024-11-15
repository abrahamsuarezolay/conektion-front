
import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsHeader.scss"
import LanguageContext from '../../../../context/LangContext'
import { getAboutUsHeader } from '../../../../services/api.service'
import { AboutUsHeaderType } from '../../../../types/api.types'
import Loader from '../../../../layout/home/components/loader/Loader'

export const AboutUsHeader = () => {

  const { langCode } = useContext(LanguageContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [headerData, setHeaderData] = useState<AboutUsHeaderType>()


  useEffect(() => {
    getAboutUsHeader(langCode).then((response) => {
      if (response) {
        setHeaderData(response)
        setLoading(false)
      }
    })
  }, [langCode])


  return (
    <>
      {!loading ? (
        <div className='about-us-header-container'>
          <img src={headerData?.imgUrl} alt='about-us-header' />
          <div className='about-us-content'>
            <h2>{headerData?.title}</h2>
            <p>{headerData?.subtitle}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}
