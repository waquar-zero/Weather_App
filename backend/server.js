const express = require('express');
const app = express();


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


app.post("/weather", (req, res) => {
    if (!req.body.city) {
        res.status(400).send("City is required");
    }

    res.send(`You searched for ${req.body.city}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
