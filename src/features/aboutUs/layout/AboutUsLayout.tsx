import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsLayout.scss"
import { AboutUsHeader } from '../components/AboutUsHeader/AboutUsHeader'
import AboutUsBody from '../components/AboutUsBody/AboutUsBody'
import LanguageContext from '../../../context/LangContext'
import { AboutUsHeaderType, AboutUsTeamMembersType, SectionSimpleHeader } from '../../../types/api.types'
import { getAboutUsHeader, getAboutUsTeamHeader, getAboutUsTeamMembers } from '../../../services/api.service'
import Loader from '../../../layout/home/components/loader/Loader'

function AboutUsLayout() {

  const { langCode } = useContext(LanguageContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [headerData, setHeaderData] = useState<AboutUsHeaderType>({})
  const [teamMembersData, setTeamMembersData] = useState<AboutUsTeamMembersType[]>([])
  const [sectionHeader, setSectionHeader] = useState<SectionSimpleHeader>({})

  useEffect(() => {

    setLoading(true)

    getAboutUsHeader(langCode).then((response) => {
      if (response) {
        setHeaderData(response)
      }
    })
    getAboutUsTeamMembers(langCode).then((response) => {
      setTeamMembersData(response)
    })

    getAboutUsTeamHeader(langCode).then((response) => {
      setSectionHeader(response)
      setLoading(false)
    })

  }, [langCode])


  return (
    <div className='about-us-container'>
      {!loading ? (
        <>
          <AboutUsHeader headerData={headerData} />
          <AboutUsBody sectionHeader={sectionHeader} teamMembersData={teamMembersData} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AboutUsLayout