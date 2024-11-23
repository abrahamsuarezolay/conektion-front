import React, { useContext, useEffect, useState } from 'react'
import "./ComingEventsLayout.scss"
import LanguageContext from '../../../context/LangContext'
import Loader from '../../../layout/home/components/loader/Loader'
import { SectionHeader } from '../../../layout/home/components/SectionHeader/SectionHeader'
import { getComingEventsBlogEntries, getComingEventsHeader } from '../../../services/api.service'
import { BlogEntryType, SectionHeaderType, SortedBlogs } from '../../../types/api.types'
import BlogList from '../components/BlogList/BlogList'
import { sortBlogsByDate } from '../../../utils/array-util'
import BlogArchive from '../components/BlogArchive/BlogArchive'

function ComingEventsLayout() {
  const { langCode } = useContext(LanguageContext)
  if(!langCode){return}

  const [loading, setLoading] = useState<boolean>(true)
  const [showArchive, setShowArchive] = useState<boolean>(false)
  const [headerData, setHeaderData] = useState<SectionHeaderType>({})
  const [blogData, setBlogData] = useState<BlogEntryType[]>([])
  const [sortedBlogs, setSortedBlogs] = useState<SortedBlogs[]>([])

  const handleShowArchive = () => {
    setShowArchive(true)
  }

  const handleCloseArchive = () => {
    setShowArchive(false)
  }
 
 
  useEffect(() => {
    setLoading(true)

    getComingEventsHeader(langCode).then((response) => {
      if (response) {
        setHeaderData(response)
      }
    })

    getComingEventsBlogEntries(langCode).then((response) => {
      if (response) {
        setBlogData(response)
        setLoading(false)
      }
    })

  }, [langCode])

  useEffect(() => {
    if(blogData){
      setSortedBlogs(sortBlogsByDate(blogData, langCode))
    }
  }, [blogData])


  return (
    <div className='coming-events-container'>
      {!loading ? (
        <>
          <SectionHeader headerData={headerData} />
          {showArchive ? (
            <BlogArchive sortedBlogs={sortedBlogs} closeArchive={handleCloseArchive} />
          ) : (
            <BlogList blogData={blogData} showArchive={handleShowArchive}/>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ComingEventsLayout