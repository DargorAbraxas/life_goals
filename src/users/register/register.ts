"use strict";

interface RegisterParams {
  username: string;
  password: string;
}

export default function registerHandler({
  username,
  password
}: RegisterParams) {
  console.log("username", username);
  console.log("password", password);
}
