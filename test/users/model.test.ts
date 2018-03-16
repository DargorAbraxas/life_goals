"use strict";

import { expect } from "../expect";
import { models } from "../../src/models";

describe("users", function() {
  it("have a user", function() {
    expect(
      models.User.build({
        firstName: "Name"
      }).validate()
    ).to.not.be.rejectedWith("First name cannot be empty");
  });
});
