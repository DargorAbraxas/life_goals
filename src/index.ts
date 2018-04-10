"use strict";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as Promise from "bluebird";

import register from "./users/operations/register";

const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.set("views", "./views");
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req: express.Request, res: express.Response): void {
  res.render("index", { title: "Home Page", message: "Welcome" });
});

app.get("/login", function(req: express.Request, res: express.Response) {
  res.render("login", { title: "Login", message: "Login" });
});

app.get("/register", function(req: express.Request, res: express.Response) {
  res.render("register", { title: "Register", message: "Register" });
});

app.post("/register", function(req: express.Request, res: express.Response) {
  return register(req.body).then(() => {
    res.render("index", { title: "Register", message: "Registered" });
  }).catch(err => {
    console.log(err);
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
