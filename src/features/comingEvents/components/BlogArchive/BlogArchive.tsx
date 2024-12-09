import { useContext, useEffect } from "react"
import { BlogArchiveComponent } from "../../../../types/component.types"
import "./BlogArchive.scss"
import { blogDateToFormatDate } from "../../../../utils/date-format"
import LanguageContext from "../../../../context/LangContext"

const BlogArchive: React.FC<BlogArchiveComponent> = ({ sortedBlogs, closeArchive, showBlog }) => {

  const { langCode } = useContext(LanguageContext)
  if (!langCode) { return }

  return (
    <div className="blog-archive-container">
      <div className="blog-archive-list">
        {sortedBlogs.map((sortedBlog) => (
          <div className="sorted-blogs" key={sortedBlog.date}>
            <h2>{sortedBlog.date}</h2>
            {sortedBlog.blogs.map((blogEntry) => (
              <div className="blog-entry" key={blogEntry.imgUrl} onClick={() => {if(blogEntry.title) showBlog(blogEntry.title)}}>
                <div className="img-archive-container">
                  <img src={blogEntry.imgUrl} alt={blogEntry.title} />
                </div>
                <div className="archive-blog-text">
                    <h2>{blogEntry.title}</h2>
                  <span>{blogDateToFormatDate(blogEntry.date, langCode, false)}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogArchive