import React, { useState } from "react";
import { getCarServiceRecommendation } from "../services/apiService";
import "../css/CarServiceForm.css";
import carServiceImage from "../assets/car-service.jpg"; // Add your image here

const CarServiceForm = ({ setRecommendation }) => {
    const [carDetails, setCarDetails] = useState({
        brand: "",
        carModel: "",
        carManufacturedYear: "",
        mileage: "",
        lastEngineOilChangedDate: "",
        lastGearOilChangedDate: "",
        lastBreakOilChangedDate: "",
        lastBreakPadChangedDate: "",
        issues: "",
    });

    const handleChange = (e) => {
        setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recommendation = await getCarServiceRecommendation(carDetails);
        setRecommendation(recommendation);
    };

    return (
        <div className="form-container">
            {/* Left side - Image */}
            <div className="image-container">
                <img src={carServiceImage} alt="Car Service" />
            </div>

            {/* Right side - Form */}
            <form onSubmit={handleSubmit} className="car-form">
                <h2>Car Service Recommendation</h2>

                <label>Vehicle Brand</label>
                <input type="text" name="brand" placeholder="Vehicle Brand" onChange={handleChange} required />

                <label>Vehicle Model</label>
                <input type="text" name="carModel" placeholder="Vehicle Model" onChange={handleChange} required />

                <label>Manufactured Year</label>
                <input type="text" name="carManufacturedYear" placeholder="Manufactured Year" onChange={handleChange} required />

                <label>Mileage</label>
                <input type="number" name="mileage" placeholder="Mileage (km)" onChange={handleChange} required />

                <label>Last Engine Oil Changed Date</label>
                <input type="date" name="lastEngineOilChangedDate" onChange={handleChange} required />

                <label>Last Gear Oil Changed Date</label>
                <input type="date" name="lastGearOilChangedDate" onChange={handleChange} required />

                <label>Last Break Oil Changed Date</label>
                <input type="date" name="lastBreakOilChangedDate" onChange={handleChange} required />

                <label>Last Break Pad Changed Date</label>
                <input type="date" name="lastBreakPadChangedDate" onChange={handleChange} required />

                <label>Any Issues?</label>
                <input type="text" name="issues" placeholder="Describe issues (Optional)" onChange={handleChange} />

                <button type="submit">Get Recommendation</button>
            </form>
        </div>
    );
};

export default CarServiceForm;
