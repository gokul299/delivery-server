require("dotenv").config();

const DB_URL = "mongodb+srv://GokulPrasath:gokul535@cluster0.g3xxz.mongodb.net/pizza?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4500;
const APP_URL = process.env.WEB_APP_URL;

module.exports = { DB_URL, PORT, APP_URL };
