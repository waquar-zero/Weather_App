const express = require('express');
const router = express.Router();
const { getWeatherFromAPI } = require("../controllers/weatherController");


router.get("/:city", getWeatherFromAPI);

module.exports = router;
