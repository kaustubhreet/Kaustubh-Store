const mongoose = require("mongoose");
require("dotenv").config();

exports.Connection = async () => {
    const URL = process.env.MONGODB_ATLAS_URL;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, { useNewUrlParser: true,useUnifiedTopology: true});
        console.log(`database is connected successfully`);
    } catch (err) {
        console.log("Error:Db connection error", err.message);
    }
};