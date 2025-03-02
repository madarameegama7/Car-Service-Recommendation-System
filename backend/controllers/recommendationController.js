const genAI = require("../config/geminiConfig");

const formatResponse = (response) => {
    return response
        .replace(/\*\*/g, "")  // Remove existing bold markers (optional)
        .replace(/\*/g, "**")  // Ensure bold formatting with Markdown style
        .replace(/\n/g, "\n\n");  // Add spacing between sections
};

const generateRecommendation = async (req, res) => {
    try {
        const carDetails = req.body;
        const prompt = `
        A user has provided the following car details:
        - Brand: ${carDetails.brand}
        - Model: ${carDetails.carModel}
        - Manufactured Year: ${carDetails.carManufacturedYear}
        - Mileage: ${carDetails.mileage} km
        - Last Engine Oil Change: ${carDetails.lastEngineOilChangedDate}
        - Last Gear Oil Change: ${carDetails.lastGearOilChangedDate}
        - Last Brake Oil Change: ${carDetails.lastBreakOilChangedDate}
        - Last Brake Pad Change: ${carDetails.lastBreakPadChangedDate}
        - Issues: ${carDetails.issues || "None"}

        Based on this data, recommend the next car service and the expected maintenance with relevant date. Give me only next estimated service for next engine oil change, next gear oil change, next break oil change and next break pas change.
        `;

        // Call Gemini API
        const response = await genAI.getGeminiResponse(prompt);
        
        // Format the response
        const formattedResponse = formatResponse(response);

        // Send the formatted recommendation response
        res.json({ recommendation: formattedResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate recommendation" });
    }
};

module.exports = { generateRecommendation };
