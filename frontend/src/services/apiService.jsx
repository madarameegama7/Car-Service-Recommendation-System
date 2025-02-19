// Assuming you're using Axios to handle API requests
import axios from 'axios';

export const getCarServiceRecommendation = async (carDetails) => {
    try {
        const response = await fetch("http://localhost:5000/api/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carDetails),
        });
        const data = await response.json();
        return data.recommendation;
    } catch (error) {
        console.error("Error fetching recommendation:", error);
        return "Failed to get recommendation. Please try again.";
    }
};

