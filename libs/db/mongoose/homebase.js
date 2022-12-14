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
  mapname: { type: String, default: 'noob' },
  mapid: { type: String, default: uuidv4 },
  x:{ type: Number, default: 0 },
  y:{ type: Number, default: 0 },
  z:{ type: Number, default: 0 },
  region:{ type: String, default: 'noob' },
  date: { type: Date, default: Date.now }
});

// Compile model from schema
const HomeBaseModel = mongoose.model("HomeBase", HomeBaseSchema);
export default HomeBaseModel;