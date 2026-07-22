const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require("./config/db");
const Weather = require("./models/Weather");
const Weather1= require("./models/Weather");
//console.log(process.env.NAME);
connectDB();


app.use(express.json());

app.use((req, res, next) => {
    console.log("Someone visited");
    next();
});


app.get("/", (req, res) => {
    res.send("Weather Backend is running");
});

app.use((req, res, next) => {
    console.log("This is a middleware function");
    next();
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.use((req, res, next) => {
    console.log("This is a middleware function");
    next();
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.use((req, res, next) => {
    console.log("This is a middleware function");
    next();
});

app.get("/weather/:city", (req, res) => {
    res.send(`Weather Requested for ${req.params.city}`);
});

app.use((err,req,res,next) => {
    res.status(400).json({
        "error" : "Invalid JSON format"
    });

});


app.post("/weather", async (req,res) => {
    try{
    if(!req.body.city){
        return res.status(400).send("City is required");
    }
    const city = req.body.city.trim().toLowerCase();
    const weather = await Weather1.create({ city });
        return res.status(201).send(weather);
    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
        return res.status(409).send("City already exists");
    }
     res.status(500).send("Server Error");
    }
});

app.get("/weather", async (req,res) => {
    try{
        const weathers = await Weather1.find();
        return res.status(200).send(weathers);
    } catch(error){
        console.error(error);
        return res.status(500).send("Server Error");
    }
    });




async function startServer(){
    await connectDB();

    app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
}

startServer();
