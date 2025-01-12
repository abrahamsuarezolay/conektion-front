import { api } from "../config/enviroment"


export const getAllElementor = async () => {
    try {
        const response = await fetch(api.apiGetAllPages);
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching carousel data:", error);
    }
}