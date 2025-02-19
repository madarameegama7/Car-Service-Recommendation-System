import axios from "axios";

export const getCarServiceRecommendation = async (carDetails) => {
    try {
        const response = await axios.post("http://localhost:5000/api/recommend", carDetails);
        return response.data.recommendation;
    } catch (error) {
        console.error("Error getting recommendation:", error);
        return "Unable to generate recommendation.";
    }
};
