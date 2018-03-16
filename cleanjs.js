"use strict";

const del = require("del");

const deleteGlob = [
  "src/**/*.js",
  "src/**/*.js.map",
  "test/**/*.test.js",
  "db/**/*.js"
]

function deleteFiles() {
  del(deleteGlob).then(paths => {
    console.log("Deleted: \n", paths.join("\n"));
  });
}

deleteFiles();
