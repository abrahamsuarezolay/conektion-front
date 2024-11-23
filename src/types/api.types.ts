

export interface CarouselDataType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    buttonText?: string
    targetLanguage?: string
}

export interface AboutUsHeaderType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    targetLanguage?: string
}

export interface AboutUsTeamMembersType {
    imgUrl?: string,
    name?: string,
    position?: string,
    bio?: string,
    targetLanguage?: string
}

export interface SectionSimpleHeader {
    title?: string,
    subtitle?: string,
    targetLanguage?: string
}

export interface CaseStudiesHeaderType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    targetLanguage?: string
}

export interface ComingEventsHeaderType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    targetLanguage?: string
}

export interface BlogEntryType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    targetLanguage?: string,
    content?: string,
    date: string,
    dateTypeDate: Date,
    order: number
}

export interface SortedBlogs {
    date: string,
    dateTypeDate: Date,
    blogs: BlogEntryType[]
}

export interface SectionHeaderType {
    imgUrl?: string,
    title?: string,
    subtitle?: string,
    targetLanguage?: string
}