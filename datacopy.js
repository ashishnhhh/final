const connectDB = require("./database/connect");
const data = require("./model/datas");
const datacopyjson = require("./datacopy.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await data.deleteMany();
        await data.create(datacopyjson);

        console.log("In Mongo");
    } catch (error) {
        console.log(error);
    }
};

start();