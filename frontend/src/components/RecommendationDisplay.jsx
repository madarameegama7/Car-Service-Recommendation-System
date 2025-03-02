import React from "react";
import "../css/Recommendation.css";

const RecommendationDisplay = ({ recommendation }) => {
    // Function to format the recommendation text
    const formatRecommendation = (text) => {
        if (!text) return "Enter details to get a recommendation!";

        return text
            .replace(/\*\*/g, "") // Remove all ** marks

    };

    return (
        <div className="recommendation-box">
            <h3>Recommended Service</h3>
            <p className="recommendation-text" dangerouslySetInnerHTML={{ __html: formatRecommendation(recommendation) }} />

        </div>
    );
};

export default RecommendationDisplay;
