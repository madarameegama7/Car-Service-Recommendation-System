const express = require("express");
const { generateRecommendation } = require("../controllers/recommendationController");

const router = express.Router();

router.post("/recommend", generateRecommendation);

module.exports = router;
