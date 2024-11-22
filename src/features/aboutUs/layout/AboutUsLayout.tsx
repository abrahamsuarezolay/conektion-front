import { useContext, useEffect, useState } from 'react'
import "./AboutUsLayout.scss"
import AboutUsBody from '../components/AboutUsBody/AboutUsBody'
import LanguageContext from '../../../context/LangContext'
import { AboutUsHeaderType, AboutUsTeamMembersType, SectionHeaderType, SectionSimpleHeader } from '../../../types/api.types'
import { getAboutUsHeader, getAboutUsTeamHeader, getAboutUsTeamMembers } from '../../../services/api.service'
import Loader from '../../../layout/home/components/loader/Loader'
import { SectionHeader } from '../../../layout/home/components/SectionHeader/SectionHeader'

function AboutUsLayout() {

  const { langCode } = useContext(LanguageContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [headerData, setHeaderData] = useState<SectionHeaderType>({})
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
          <SectionHeader headerData={headerData} />
          <AboutUsBody sectionHeader={sectionHeader} teamMembersData={teamMembersData} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AboutUsLayout