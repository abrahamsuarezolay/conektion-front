import React, { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../../context/LangContext'
import { SectionHeaderType } from '../../../types/api.types'
import { SectionHeader } from '../../../layout/home/components/SectionHeader/SectionHeader'
import Loader from '../../../layout/home/components/loader/Loader'
import { getCaseStudiesHeader } from '../../../services/api.service'

function CaseStudiesLayout() {

  const { langCode } = useContext(LanguageContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [headerData, setHeaderData] = useState<SectionHeaderType>({})

  useEffect(() => {

    setLoading(true)

    getCaseStudiesHeader(langCode).then((response) => {
      if (response) {
        setHeaderData(response)

        setLoading(false)
      }
    })

  }, [langCode])


  return (
    <div className='case-studies-container'>
      {!loading ? (
        <>
          <SectionHeader headerData={headerData} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default CaseStudiesLayout