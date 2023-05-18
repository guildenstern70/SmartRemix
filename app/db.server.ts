/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import { FaunaGql } from "~/db/faunagql";
import User from "~/model/user";

export async function checkDbHasGuestUser() {
  console.log("Checking Database...");
  const faunaClient = new FaunaGql();
  const guestUser = await faunaClient.findUserByUsername("guest");
  if (guestUser == undefined)
  {
    console.log("Guest user was not found on DB. Creating it...");
    await faunaClient.createUser(new User({ username: "guest", password: "guest", id: 0}));
    console.log("Guest user has been created.");
  }
  else
  {
    console.log("Guest user was found on DB.");
  }
}
