/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

import mongoose from "mongoose"

const { MONGO_URI } = process.env;

function connect(){
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}

export {
  connect
}