"use strict";

import { expect } from "../expect";
import { models } from "../../src/models";

describe("users", function() {
  beforeEach(function() {
    return models.User.truncate({ cascade: true });
  });

  context("#firstName", function() {
    it("validates", function() {
      expect(
        models.User.build({
          firstName: "Name"
        }).validate()
      ).to.not.be.rejectedWith("First name cannot be empty");
    });
  });

  context("#lastName", function() {
    it("validates", function() {
      expect(
        models.User.build({
          lastName: "Last"
        }).validate()
      ).to.not.be.rejectedWith("Last name cannot be empty");
    });
  });

  context("#password", function() {
    it("validates", function() {
      expect(
        models.User.build({
          password: "pass"
        }).validate()
      ).to.not.be.rejectedWith("Password cannot be empty");
    });
  });

  context("#username", function() {
    it("validates", function() {
      expect(
        models.User.build({
          username: "user"
        }).validate()
      ).to.not.be.rejectedWith("Username cannot be empty");
    });

    context("when username is already registered", function() {
      it("gets rejected with correct message", function() {
        expect(
          models.User.create({
            username: "abc"
          }).then(() => {
            return models.User.create({
              username: "abc"
            });
          })
        ).to.be.rejectedWith("Username already in use");
      });
    });
  });
});
