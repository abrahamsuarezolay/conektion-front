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
import SearchBar from '../components/SearchBar/SearchBar'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate, useLocation } from 'react-router-dom';

function ComingEventsLayout() {
  const { langCode } = useContext(LanguageContext)
  if (!langCode) { return }

  const navigate = useNavigate();
  const location = useLocation();

  const isArchive = location.pathname === '/comingevents/archive';

  const [loading, setLoading] = useState<boolean>(true)
  const [showArchive, setShowArchive] = useState<boolean>(false)
  const [headerData, setHeaderData] = useState<SectionHeaderType>({})
  const [blogData, setBlogData] = useState<BlogEntryType[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<BlogEntryType[]>([])
  const [sortedBlogs, setSortedBlogs] = useState<SortedBlogs[]>([])
  const [filteredSorted, setFilteredSorted] = useState<SortedBlogs[]>([])

  const [searchValue, setSearchValue] = useState('')

  const handleShowArchive = () => {
    navigate("/comingevents/archive")
    setSearchValue('')
  }

  const handleCloseArchive = () => {
    navigate("/archive")
    setSearchValue('')
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
    if (blogData) {
      setSortedBlogs(sortBlogsByDate(blogData, langCode))
    }
  }, [blogData])

  useEffect(() => {
    if(searchValue != ''){
      setFilteredBlogs(blogData.filter((blog) => blog.title?.toLowerCase().includes(searchValue.toLowerCase())))
      setFilteredSorted(sortBlogsByDate(blogData.filter((blog) => blog.title?.toLowerCase().includes(searchValue.toLowerCase())), langCode))
    }else{
      setFilteredBlogs(blogData)
      setFilteredSorted(sortedBlogs)
    }
  }, [searchValue])


  return (
    <div className='coming-events-container'>
      {!loading ? (
        <>
          <SectionHeader headerData={headerData} />
          <div className='blog-tools'>
            <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
            {showArchive && <BsArrowLeftCircle className='back-button' size={50} onClick={handleCloseArchive}/>}
          </div>
          {isArchive ? (
            <BlogArchive sortedBlogs={filteredSorted} closeArchive={handleCloseArchive} />
          ) : (
            <BlogList blogData={filteredBlogs} showArchive={handleShowArchive} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ComingEventsLayout