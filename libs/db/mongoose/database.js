/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import mongoose from 'mongoose';

import { config } from 'dotenv';
config();

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/test';
console.log(DATABASE_URL)

function mainTest(){
  
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });
  mongoose.model('BlogPost', BlogPost);

  const Comment = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
  });
  
  console.log('init DB')
}

export async function setupDatabase(){
  await mongoose.connect(DATABASE_URL);
  //mainTest()
  /*
  const MyModel = mongoose.model('BlogPost');
  console.log(MyModel)
  const instance = new MyModel();
  console.log(instance)
  instance.title = "Hello";
  instance.save(function (err) {
    if(err){
      console.log(err)
      return;
    }
    console.log("save!")
  });
  */

  console.log("init db");
}