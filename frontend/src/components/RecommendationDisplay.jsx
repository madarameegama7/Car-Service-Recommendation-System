import React from "react";
import "../css/Recommendation.css";

const RecommendationDisplay = ({ recommendation }) => {
    return (
        <div className="recommendation-box">
            <h3>Recommended Service</h3>
            <p>{recommendation || "Enter details to get a recommendation!"}</p>
        </div>
    );
};

export default RecommendationDisplay;
