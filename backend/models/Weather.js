const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true
    }
});

const weatherSchema1= new mongoose.Schema({
    city:{
        type: String,
        required: true,
        unique: true
    }
});

const Weather = mongoose.model("Weather", weatherSchema);
const Weather1 = mongoose.model("Weather1", weatherSchema1);

module.exports = Weather1;
module.exports = Weather;