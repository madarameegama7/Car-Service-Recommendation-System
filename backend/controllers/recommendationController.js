const openai = require("../config/openaiConfig");

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
        - Last Water Level Check: ${carDetails.lastWaterLevelCheckedDate}
        - Last Oil Level Check: ${carDetails.lastOilLevelCheckedDate}
        - Last Brake Pad Change: ${carDetails.lastBreakPadChangedDate}
        - Issues: ${carDetails.issues || "None"}

        Based on this data, recommend the next car service and the expected maintenance.
        `;

        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: prompt,
            max_tokens: 150,
        });

        res.json({ recommendation: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate recommendation" });
    }
};

module.exports = { generateRecommendation };
