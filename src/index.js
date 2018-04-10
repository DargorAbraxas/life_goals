"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const register_1 = require("./users/operations/register");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.set("views", "./views");
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.render("index", { title: "Home Page", message: "Welcome" });
});
app.get("/login", function (req, res) {
    res.render("login", { title: "Login", message: "Login" });
});
app.get("/register", function (req, res) {
    res.render("register", { title: "Register", message: "Register" });
});
app.post("/register", function (req, res) {
    return register_1.default(req.body).then(() => {
        res.render("index", { title: "Register", message: "Registered" });
    }).catch(err => {
        console.log(err);
    });
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
