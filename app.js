require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./database/connect");
const datas_route = require("./routes/datas");

app.get("/", (req,res) =>{
    res.send("server is online")
});

app.use("/alldata", datas_route );

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT ,() => {
            console.log(`server alive on the port:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
    } 
    start();