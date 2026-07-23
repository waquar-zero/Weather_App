const Weather = require("../models/Weather");   

async function createWeather(req, res) {
        try{
        if(!req.body.city){
            return res.status(400).send("City is required");
        }
        const city = req.body.city.trim().toLowerCase();
        const weather = await Weather.create({ city });
            return res.status(201).send(weather);
        } catch (error) {
            console.error(error);
            if (error.code === 11000) {
            return res.status(409).send("City already exists");
        }
        return res.status(500).send("Server Error");
        }
}

async function getAllWeather(req,res) {
    try{
        const weatherData = await Weather.find();
        return res.status(200).send(weatherData);
    } catch(error){
        console.error(error);
        return res.status(500).send("Server Error");
    }
}

async function getWeather(req, res){
    try{
        const city = req.params.city.trim().toLowerCase();
        const WeatherData = await Weather.findOne({ city });
        if(!WeatherData){
            return res.status(404).send("City not found");
        }
        return res.status(200).send(WeatherData);
    } catch(error){
        console.error(error);
        return res.status(500).send("Server Error");
    }

}

async function updateWeather(req, res) {
    try{
        if(!req.body.city){
            return res.status(400).send("City is required");
        }
        const oldCity = req.params.city.trim().toLowerCase();
        const newCity = req.body.city.trim().toLowerCase(); 
        if(oldCity !== newCity){
            const existing = await Weather.findOne({ city: newCity }); 
            if(existing){ 
            return res.status(409).send("City already exists");
            }
        }
        const updatedWeather = await Weather.findOneAndUpdate(
            { city: oldCity },
            { city: newCity },
            { new: true });
            if(!updatedWeather){
                return res.status(404).send("City not found");
            }
            return res.status(200).send(updatedWeather);
        } catch(error){
            console.error(error);   
            return res.status(500).send("Server Error");
        }

}

async function deleteWeather(req,res){
    try{
        const city = req.params.city.trim().toLowerCase();
        const deletedWeather = await Weather.findOneAndDelete({ city });
        if(!deletedWeather){
            return res.status(404).send("City not found");
        }
        return res.status(200).send(deletedWeather);
    } catch(error){
        console.error(error);
        return res.status(500).send("Server Error");
    }

}

module.exports = {
    createWeather,
    getAllWeather,
    getWeather,
    updateWeather,
    deleteWeather
};