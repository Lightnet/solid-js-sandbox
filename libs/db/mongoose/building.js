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

const BuildingSchema = new Schema({
  id: { type: String, default: uuidv4, unique: true },
  aliasID: { type: String, default: uuidv4, unique: false },
  alias: String,
  name: String,
  level: { type: Number, default: 0 },
  status: { type: String, default: 'contruct' },
  time: { type: Number, default: 300 },
  producetime: { type: Number, default: 300 },
  res: { type: String, default: 'ore' },
  produce: { type: Number, default: 10 },
  stock: { type: Number, default:  0 },
  cap: { type: Number, default:  1000 },
  baseid: { type: String, default: uuidv4 },
  x:{ type: Number, default: 0 },
  y:{ type: Number, default: 0 },
  z:{ type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

// Compile model from schema
const BuildingModel = mongoose.model("Building", BuildingSchema);
export default BuildingModel;