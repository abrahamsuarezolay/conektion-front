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
    showArchive: () => void
}

export interface BlogArchiveComponent {
    sortedBlogs: SortedBlogs[],
    closeArchive: () =>  void
}