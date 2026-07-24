const SearchHistory = require("../models/SearchHistory");

async function getWeatherFromAPI(req, res) {
    try{
        const city = req.params.city.trim().toLowerCase();
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const weatherResponse = await fetch(url);
        if(!weatherResponse.ok){
            const errorData = await weatherResponse.json();

            return res.status(weatherResponse.status).json({
                error: errorData.error.message
            });
        }
        const weatherData = await weatherResponse.json();
        try {
                await SearchHistory.create({ city });
            } catch (error) {
                console.error("Error saving search history:", error.message);
            }

            return res.json(weatherData);
    } catch(error){
        console.error("Error fetching weather data: ", error.message);
        return res.status(500).json({
            error: "Internal server error"
        }); 
    };
}

module.exports = {
    getWeatherFromAPI,
}


