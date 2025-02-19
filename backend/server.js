const express = require("express");
const cors = require("cors");
require("dotenv").config();

const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", recommendationRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
