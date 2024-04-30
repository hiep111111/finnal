const config = require ("./config.js");
const express = require ("express");
const cors = require ('cors');
const routes = require ("./routes/index");
const mongoose = require ('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

routes(app); // Chuyển router express vào hàm routes

mongoose
    .connect(config.mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(config.PORT, () => {
            console.log(`App is listening to port staff : ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });