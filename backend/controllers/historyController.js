const SearchHistory = require("../models/SearchHistory");

async function getSearchHistory(req, res) {
    try {
        const limit = Number(req.query.limit);

        const finalLimit = Number.isNaN(limit) || limit <= 0 ? 20 : limit;
        const history = await SearchHistory
        .find()
        .sort({ createdAt: -1 })
        .limit(finalLimit)
        .select("city createdAt");

        return res.json(history);
    } catch (error) {
        console.error("Error fetching search history: ", error.message);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
}

module.exports = {
    getSearchHistory,
}

