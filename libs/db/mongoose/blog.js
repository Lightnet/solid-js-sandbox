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

const BlogSchema = new Schema({
  //id: ObjectId,
  id: { type: String, default: uuidv4, unique: true, },
  aliasID: String,
  content: { type: String, default: "" },
  update: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now }
});

BlogSchema.pre('save', function(next) {
  // do stuff
  //this.update = new Date().toLocaleDateString();
  this.update = new Date().toLocaleString();
  next();
});

// Compile model from schema
const BlogModel = mongoose.model("blog", BlogSchema);
export default BlogModel;