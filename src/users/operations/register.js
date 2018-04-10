"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
function registerHandler({ firstName, lastName, username, password }) {
    return models_1.models.User.create({
        firstName,
        lastName,
        username,
        password
    });
}
exports.default = registerHandler;
