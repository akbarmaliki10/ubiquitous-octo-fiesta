import express = require('express');
import mongoose = require('mongoose');
import path = require('path');
import cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();
const PORT : Number = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

app.get("/", (req,res) => {
    res.send("Hello world!");
})