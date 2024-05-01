const express = require("express");
const cors = require('cors');
const app = express();
const routes = require("./routes/route");
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const mongoDBURL ='mongodb+srv://root:root@book-store-mern.3pexqyp.mongodb.net/?retryWrites=true&w=majority&appName=Book-store-MERN'
const PORT = process.env.PORT || 1234;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port auth : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });