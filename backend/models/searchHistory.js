const mongoose = require("mongoose");

const searchHistorySchmea = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
}, {
    timestamps: true
});

const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);
module.exports = SearchHistory;