"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Hello world!");
});
