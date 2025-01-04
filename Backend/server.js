const express = require("express");  //Create variable and assign value
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const path = require('path');

const PORT = process.env.PORT || 8070; //If 8070 not avilable assign another avilalabe port number

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL; //connect to mongodb

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
});

const connection = mongoose.connection;
connection.once("open",() => {  //Open the created connection
    console.log("MongoDb connection success!");
})