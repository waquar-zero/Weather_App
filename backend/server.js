const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require("./config/db");

const weatherRoutes = require("./routes/weatherRoutes");
const historyRoutes = require("./routes/historyRoutes");    

const app = express();
//console.log(process.env.NAME);
app.use(cors());
app.use(express.json());

app.use("/weather", weatherRoutes);
app.use("/history", historyRoutes);

app.use((err,req,res,next) => {
    if(err instanceof SyntaxError){
        return res.status(400).json({
            error: "Invalid JSON format"
        });
    }
    next(err);
});


async function startServer(){
    await connectDB();

    app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
}

startServer();
