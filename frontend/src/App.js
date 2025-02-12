import React, { useState } from "react";
import CarServiceForm from "./components/CarServiceForm";
import RecommendationDisplay from "./components/RecommendationDisplay";
import "./css/App.css";

function App() {
    const [recommendation, setRecommendation] = useState("");

    return (
        <div className="App">
            <h1>Car Service Recommendation System</h1>
            <CarServiceForm setRecommendation={setRecommendation} />
            <RecommendationDisplay recommendation={recommendation} />
        </div>
    );
}

export default App;
