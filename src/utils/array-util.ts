import { BlogEntryType, SortedBlogs } from "../types/api.types";
import { blogDateToFormatDate } from "./date-format";


export const sortBlogsByDate = (blogData:BlogEntryType[], langCode:string):SortedBlogs[] => {

    let sortedBlogs:SortedBlogs[] = []

    blogData.forEach((blog) => {
        const filteredMonth = sortedBlogs.filter(({dateTypeDate}) =>  dateTypeDate.getMonth() == blog.dateTypeDate.getMonth())
        if(filteredMonth.length == 0){ 
            const date = new Date(blog.dateTypeDate.getFullYear(), blog.dateTypeDate.getMonth())
            sortedBlogs.push({ date: blogDateToFormatDate(blog.date, langCode, true), dateTypeDate: date, blogs: [blog] }) 
        }else{
            const sortedBlog = sortedBlogs.find(sortedBlog => sortedBlog.date == blog.date)
            sortedBlog?.blogs.push(blog)
        }
    })

    return sortedBlogs;
}