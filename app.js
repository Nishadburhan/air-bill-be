require('dotenv').config();
const express = require('express');
const app = express();

const config = require('./src/config/config');
const initDB = require('./src/config/database');
const userController = require("./src/controllers/userController");
const vendorController = require("./src/controllers/vendorController");

initDB(config.DB_URL);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userController);
app.use("/api/vendors", vendorController);

app.get('/', (req, res) => {
    res.send("Welcome to the Air Bill API Server!");
});

app.listen(config.port, () => {
    console.log(`Server listening on http://localhost:${config.port}`);
});