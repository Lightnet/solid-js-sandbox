/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HomeBaseSchema = new Schema({
  id: { type: String, default: uuidv4, unique: true },
  aliasID: { type: String, default: uuidv4, unique: true },
  alias: String,
  name: String,
  mapname: String,
  mapid: String,
  x:Number,
  y:Number,
  z:Number,
  region:String,
  date: { type: Date, default: Date.now }
});

// Compile model from schema
const HomeBaseModel = mongoose.model("HomeBase", HomeBaseSchema);
export default HomeBaseModel;