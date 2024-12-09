import { useContext, useEffect } from "react"
import { BlogItemComponent } from "../../../../types/component.types"
import "./BlogItem.scss"
import { blogDateToFormatDate } from "../../../../utils/date-format"
import LanguageContext from "../../../../context/LangContext"



const BlogItem: React.FC<BlogItemComponent> = ({ blogData }) => {

  const { langCode } = useContext(LanguageContext)
  if (!langCode) { return }

  console.log(blogData.content)

  return (
    <div className="blog-item-section-container">
      <div className="blog-item-container">
        <div className="blog-item-header">
          <h4>
            {blogDateToFormatDate(blogData.date, langCode, false)}
          </h4>
          <h1>
            {blogData.title}
          </h1>
          <img alt="blog-header-img" src={blogData.imgUrl} />
        </div>
        {blogData.content && <div className="blog-item-body" dangerouslySetInnerHTML={{__html: blogData.content}}></div>}
      </div>
    </div>
  )
}

export default BlogItem