


import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ToDoListSchema = new Schema({
  //id: ObjectId,
  id: { type: String, default: uuidv4, unique: true, },
  aliasID: String,
  content: { type: String, default: "" },
  isDone: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

// Compile model from schema
const ToDoListModel = mongoose.model("todolist", ToDoListSchema);
export default ToDoListModel;