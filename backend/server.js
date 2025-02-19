const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { generateRecommendation } = require("./controllers/recommendationController");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/recommend", generateRecommendation);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
