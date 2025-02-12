import React, { useState } from "react";
import { getCarServiceRecommendation } from "../services/apiService";
import "../css/CarServiceForm.css";

const CarServiceForm = ({ setRecommendation }) => {
    const [carDetails, setCarDetails] = useState({
        brand :"",
        carModel: "",
        carManufacturedYear: "",
        mileage: "",
        lastEngineOilChangedDate: "",
        lastGearOilChangedDate: "",
        lastBreakOilChangedDate: "",
        lastWaterLevelCheckedDate: "",
        lastOilLevelCheckedDate: "",
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
        <form onSubmit={handleSubmit} className="car-form">
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

            <label>Last Water Level Checked Date</label>
            <input type="date" name="lastWaterLevelCheckedDate" onChange={handleChange} required />

            <label>Last Oil Checked Date</label>
            <input type="date" name="lastOilLevelCheckedDate" onChange={handleChange} required />

            <label>Last Break Pad Changed Date</label>
            <input type="date" name="lastBreakPadChangedDate" onChange={handleChange} required />
            

            <input type="text" name="issues" placeholder="Any issues? (Optional)" onChange={handleChange} />
            <button type="submit">Get Recommendation</button>

        </form>
    );
};

export default CarServiceForm;
