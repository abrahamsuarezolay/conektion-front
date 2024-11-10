import { api } from "../config/enviroment"
import { AboutUsHeaderType, CarouselDataType } from "../types/api.types"


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
        console.error("Error fetching carousel data:", error);
        return {};
    }
};