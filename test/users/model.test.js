"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = require("../expect");
const models_1 = require("../../src/models");
describe("users", function () {
    it("have a user", function () {
        expect_1.expect(models_1.models.User.build({
            firstName: "Name"
        }).validate()).to.not.be.rejectedWith("First name cannot be empty");
    });
});
