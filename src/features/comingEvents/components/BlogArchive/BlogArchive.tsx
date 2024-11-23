import { useEffect } from "react"
import { BlogArchiveComponent } from "../../../../types/component.types"
import "./BlogArchive.scss"

const BlogArchive:React.FC<BlogArchiveComponent> = ({sortedBlogs, closeArchive}) => {

  console.log(sortedBlogs)

  return (
    <div className="blog-archive-container">
      <button onClick={closeArchive}>Close</button>
    </div>
  )
}

export default BlogArchive