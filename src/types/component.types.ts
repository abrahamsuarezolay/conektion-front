import { AboutUsHeaderType, AboutUsTeamMembersType, SectionSimpleHeader } from "./api.types";


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