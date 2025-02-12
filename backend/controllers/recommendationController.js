const axios = require("axios");

exports.getServiceRecommendation = async (req, res) => {
    try {
        const { mileage, lastServiceDate, carModel, issues } = req.body;
        const prompt = `Based on the car details: 
        - Model: ${carModel} 
        - Mileage: ${mileage} km 
        - Last service date: ${lastServiceDate} 
        - Issues reported: ${issues || "None"} 
        
        Suggest the next car service date and required maintenance.`;

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: prompt }],
                max_tokens: 100,
            },
            { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
        );

        res.json({ recommendation: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to generate recommendation" });
    }
};
