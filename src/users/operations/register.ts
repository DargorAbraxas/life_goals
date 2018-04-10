"use strict";

import * as Promise from "bluebird";

import { models } from "../../models";
import { User, UserAttrs } from "../model";

export default function registerHandler({
  firstName,
  lastName,
  username,
  password
}: UserAttrs): Promise<User> {
  return models.User.create({
    firstName,
    lastName,
    username,
    password
  });
}
