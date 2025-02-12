import axios from "axios";

const API_URL = "http://localhost:5000/api/recommend-service";

export const getCarServiceRecommendation = async (carDetails) => {
    try {
        const response = await axios.post(API_URL, carDetails);
        return response.data.recommendation;
    } catch (error) {
        console.error("Error fetching recommendation:", error);
        return "Failed to get recommendation.";
    }
};
