const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const getGeminiResponse = async (prompt) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;

        return response.text(); // Extract text response
    } catch (error) {
        console.error("Error fetching response from Gemini:", error);
        return "Sorry, I couldn't generate a recommendation.";
    }
};

module.exports = { getGeminiResponse };
