const express = require("express");
const router = express.Router();

const { getSearchHistory } = require("../controllers/historyController");

router.get("/", getSearchHistory);

module.exports = router;