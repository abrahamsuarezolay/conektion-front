import { api } from "../config/enviroment"
import { AboutUsHeaderType, AboutUsTeamMembersType, BlogEntryType, CarouselDataType, CaseStudiesHeaderType, ComingEventsHeaderType, SectionSimpleHeader } from "../types/api.types"


export const getCarouselHome = async (langCode?: string): Promise<CarouselDataType[]> => {
    if (!langCode) return [];

    try {
        const response = await fetch(api.apiCarousel);
        const data = await response.json();
        const jsonFiltered = data.filter((content:CarouselDataType) => content.targetLanguage === langCode);
        return jsonFiltered;
    } catch (error) {
        console.error("Error fetching carousel data:", error);
        return [];
    }
};


export const getAboutUsHeader = async (langCode?: string): Promise<AboutUsHeaderType> => {
    if (!langCode) return {};

    try {
        const response = await fetch(api.apiAboutUsHeader);
        const data = await response.json();
        const jsonFiltered = data.filter((content:AboutUsHeaderType) => content.targetLanguage === langCode);
        return jsonFiltered[0];
    } catch (error) {
        console.error("Error fetching about us data:", error);
        return {};
    }
};


export const getAboutUsTeamMembers = async (langCode?: string): Promise<AboutUsTeamMembersType[]> => {
    if (!langCode) return [];

    try {
        const response = await fetch(api.apiAboutUsTeamMembers);
        const data = await response.json();
        const jsonFiltered = data.filter((content:AboutUsTeamMembersType) => content.targetLanguage === langCode);
        return jsonFiltered;
    } catch (error) {
        console.error("Error fetching carousel data:", error);
        return [];
    }
};

export const getAboutUsTeamHeader = async (langCode?: string): Promise<SectionSimpleHeader> => {
    if (!langCode) return {};

    try {
        const response = await fetch(api.apiAboutUsTeamHeader);
        const data = await response.json();
        const jsonFiltered = data.filter((content:SectionSimpleHeader) => content.targetLanguage === langCode);
        return jsonFiltered[0];
    } catch (error) {
        console.error("Error fetching carousel data:", error);
        return {};
    }
};


export const getCaseStudiesHeader = async (langCode?: string): Promise<CaseStudiesHeaderType> => {
    if (!langCode) return {};

    try {
        const response = await fetch(api.apiCaseStudiesHeader);
        const data = await response.json();
        const jsonFiltered = data.filter((content:CaseStudiesHeaderType) => content.targetLanguage === langCode);
        return jsonFiltered[0];
    } catch (error) {
        console.error("Error fetching case studies data:", error);
        return {};
    }
};

export const getComingEventsHeader = async (langCode?: string): Promise<ComingEventsHeaderType> => {
    if (!langCode) return {};

    try {
        const response = await fetch(api.apiComingEventsHeader);
        const data = await response.json();
        const jsonFiltered = data.filter((content:ComingEventsHeaderType) => content.targetLanguage === langCode);
        return jsonFiltered[0];
    } catch (error) {
        console.error("Error fetching case studies data:", error);
        return {};
    }
};


export const getComingEventsBlogEntries = async (langCode?: string): Promise<BlogEntryType[]> => {
    if (!langCode) return [];

    try {
        const response = await fetch(api.apiComingEventsBlogEntries);
        const data = await response.json();
        const jsonFiltered = data.filter((content:BlogEntryType) => content.targetLanguage === langCode);
        return jsonFiltered;
    } catch (error) {
        console.error("Error fetching case studies data:", error);
        return [];
    }
};

