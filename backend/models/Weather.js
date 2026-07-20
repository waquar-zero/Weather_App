const mongoose = require("mongoose");
const weatherSchema = new mongoose.Schema({
    city: {
        type: string,
        required: true
    }
});

mongoose.model("Weather", weatherSchema);

module.exports = Weather;