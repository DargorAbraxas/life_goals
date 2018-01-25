"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.set("views", "./views");
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.render("index", { title: "Register", message: "Example" });
});
app.post("/register", function (req, res) {
    res.render("index", { title: "Register", message: "Registered" });
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
