/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017

import mongoose from 'mongoose';

import { config } from 'dotenv';
config();

//const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/solidtest';
//const DATABASE_URL = 'mongodb://localhost:27017/solidtest';
const DATABASE_URL = 'mongodb://0.0.0.0:27017/solidtest';
//const DATABASE_URL = 'mongodb://localhost:27017';
console.log(DATABASE_URL)

mongoose.set("strictQuery", false);

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
  //mongoose.set('strictQuery', false);
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