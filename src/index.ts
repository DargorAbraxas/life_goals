"use strict";

import * as express from "express";
import * as bodyParser from "body-parser";

import register from "./register/register";

const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.set("views", "./views");
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req: express.Request, res: express.Response): void {
  res.render("index", { title: "Register", message: "Example" });
});

app.post("/register", function (req: express.Request, res: express.Response) {
  register(req.body);
  res.render("index", { title: "Register", message: "Registered" });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
