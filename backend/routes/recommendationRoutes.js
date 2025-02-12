const express = require("express");
const { getServiceRecommendation } = require("../controllers/recommendationController");

const router = express.Router();
router.post("/recommend-service", getServiceRecommendation);

module.exports = router;
