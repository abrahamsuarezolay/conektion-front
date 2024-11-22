import React, { useContext, useEffect, useState } from 'react'
import "./ComingEventsLayout.scss"
import LanguageContext from '../../../context/LangContext'
import Loader from '../../../layout/home/components/loader/Loader'
import { SectionHeader } from '../../../layout/home/components/SectionHeader/SectionHeader'
import { getComingEventsBlogEntries, getComingEventsHeader } from '../../../services/api.service'
import { BlogEntryType, SectionHeaderType } from '../../../types/api.types'
import BlogList from '../components/BlogList/BlogList'

function ComingEventsLayout() {
  const { langCode } = useContext(LanguageContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [headerData, setHeaderData] = useState<SectionHeaderType>({})
  const [blogData, setBlogData] = useState<BlogEntryType[]>([])
 
  useEffect(() => {

    setLoading(true)

    getComingEventsHeader(langCode).then((response) => {
      if (response) {
        setHeaderData(response)
      }
    })

    getComingEventsBlogEntries(langCode).then((response) => {
      if (response) {
        console.log(response)
        setBlogData(response)
        setLoading(false)
      }
    })

  }, [langCode])


  return (
    <div className='coming-events-container'>
      {!loading ? (
        <>
          <SectionHeader headerData={headerData} />
          <BlogList blogData={blogData}/>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ComingEventsLayout