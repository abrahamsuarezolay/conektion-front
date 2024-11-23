import { useContext, useEffect, useState } from "react"
import "./BlogList.scss"
import LanguageContext from "../../../../context/LangContext"
import { WiDayCloudy } from "react-icons/wi"
import { BlogListComponent } from "../../../../types/component.types"
import { blogDateToFormatDate } from "../../../../utils/date-format"

const BlogList: React.FC<BlogListComponent> = ({ blogData, showArchive }) => {

    const { language, langCode } = useContext(LanguageContext)
    if (!blogData || !langCode) { return }

    const [responsive, setResponsive] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        if (windowDimensions.width <= 898) {
            setResponsive(true)
        } else {
            setResponsive(false)
        }

        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowDimensions]);


    return (
        <div className="blog-list-container">
            <div className="blog-list">
                {blogData.map((blogEntry, index) =>
                    <>
                        {index == 0 ? (
                            <div className={responsive ? "entry-responsive" : "first-entry"}>
                                <div className="blog-img-container">
                                    <img src={blogEntry.imgUrl} alt={blogEntry.title}></img>
                                </div>
                                <div className={responsive ? "entry-text-responsive" : "first-entry-text"}>
                                    <div>
                                        <h2>{blogEntry?.title}</h2>
                                        <h3>{blogEntry?.subtitle}</h3>
                                    </div>
                                    <div>
                                        <span>{blogDateToFormatDate(blogEntry.date, langCode, false)}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {index <= 5 ? (
                                    <div className={responsive ? "entry-responsive" : "secondary-entry"}>
                                        <div className="blog-img-container">
                                            <img src={blogEntry.imgUrl} alt={blogEntry.title}></img>
                                        </div>
                                        <div className={responsive ? "entry-text-responsive" : "secondary-entry-text"}>
                                            <div>
                                                <h2>{blogEntry.title}</h2>
                                                <h3>{blogEntry.subtitle}</h3>
                                            </div>
                                            <div>
                                                <span>{blogDateToFormatDate(blogEntry.date, langCode, false)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={responsive ? "entry-responsive" : "third-entry"}>
                                        <div className="blog-img-container">
                                            <img src={blogEntry.imgUrl} alt={blogEntry.title}></img>
                                        </div>
                                        <div className={responsive ? "entry-text-responsive" : "third-entry-text"}>
                                            <div>
                                                <h2>{blogEntry.title}</h2>
                                                <h3>{blogEntry.subtitle}</h3>
                                            </div>
                                            <div>
                                                <span>{blogDateToFormatDate(blogEntry.date, langCode, false)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </>
                        )}

                    </>
                )}
            </div>
            <div className="archive-button">
                <button onClick={showArchive}>{language?.comingEvents?.viewArchiveButton}</button>
            </div>
        </div>
    )
}

export default BlogList