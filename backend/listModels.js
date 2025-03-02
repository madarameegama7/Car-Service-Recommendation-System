const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const listModels = async () => {
    try {
        const modelsResponse = await fetch(
            "https://generativelanguage.googleapis.com/v1/models?key=" + GEMINI_API_KEY
        );

        if (!modelsResponse.ok) {
            throw new Error(`HTTP error! Status: ${modelsResponse.status}`);
        }

        const models = await modelsResponse.json();
        console.log(models);
    } catch (error) {
        console.error("Error listing models:", error);
    }
};

listModels();
