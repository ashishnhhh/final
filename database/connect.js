//mongodb+srv://Api:root@api1.vb2hjwo.mongodb.net/Api?retryWrites=true&w=majority

require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = (uri) => {
    console.log("connectDB");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};

module.exports = connectDB;