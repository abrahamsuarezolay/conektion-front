import { Dispatch, SetStateAction } from "react";
import { AboutUsHeaderType, AboutUsTeamMembersType, BlogEntryType, SectionSimpleHeader, SortedBlogs } from "./api.types";


export interface AboutUsHeaderComponent {
    headerData: AboutUsHeaderType
}

export interface AboutUsTeamComponent {
    sectionHeader: SectionSimpleHeader,
    teamMembersData: AboutUsTeamMembersType[]
}

export interface AboutUsModalComponent {
    teamMember: AboutUsTeamMembersType,
    handleClose: () => void
}

export interface SectionHeaderComponent {
    headerData: AboutUsHeaderType
}

export interface BlogListComponent {
    blogData: BlogEntryType[],
    showArchive: () => void,
    showBlog: (blogTitle: string | undefined) => void,
}

export interface BlogArchiveComponent {
    sortedBlogs: SortedBlogs[],
    closeArchive: () =>  void,
    showBlog: (blogTitle: string) => void,
}

export interface BlogItemComponent {
    blogData: BlogEntryType
}

export interface SearchBarComponent {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}