/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';
import cookie from 'cookie';
//import ToDoListModel from '../../../../libs/db/mongoose/todolist.js';
import BlogModel from '../../../../libs/db/mongoose/blog.js';
//import { v4 as uuidv4 } from 'uuid';
import { verifyToken } from '../../../../libs/serverapi.js';

import { config } from 'dotenv';
config();
const router = Router()

const SECRET = process.env.SECRET || "TEST0123456789012345678901";
//console.log("process.env.SECRET: ",process.env.SECRET)
//console.log("SECRET: ",SECRET)

router.get('/list', async (req, res) => {
  res.set('Content-Type', 'application/json');
  try {
    var cookies = cookie.parse(req.headers.cookie || '');
    if(cookies?.token){
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)

      const blogs = await BlogModel.find({});
      return res.send(JSON.stringify({api:'BLOGS',blogs:blogs}))
    }
  } catch (error) {
    console.log(error)
  }

  res.send(JSON.stringify({api:'TASKS',tasks:[]}))
});

router.post('/add', async (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log(req.body)
  const { content } = req.body;
  try{
    var cookies = cookie.parse(req.headers.cookie || '');
    //console.log(cookies)
    if(cookies?.token){
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)

      const newBlog = new BlogModel({
        aliasID:userData.aliasID,
        content:content
      })

      newBlog.save(function (err) {
        if (err) return handleError(err);
        console.log("save!")
        // saved!
      });

      console.log(newBlog.toJSON());
      return res.send(JSON.stringify({api:'CREATED',blog:newBlog.toJSON()}))
    }else{
      console.log("NULL Token")
    }
  }catch(e){
    console.log(e);
  }

  res.send(JSON.stringify({api:'ERROR'}))
});

router.put('/update', async (req, res) => {
  res.set('Content-Type', 'application/json');
  const { content, id } = req.body;
  try{
    var cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies)
    if(cookies?.token){
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)

      const updateBlog = await BlogModel.findOne({
        id:id
      })
      updateBlog.content = content;

      await updateBlog.save(); 

      console.log(updateBlog.toJSON());
      return res.send(JSON.stringify({api:'UPDATE',blog:updateBlog.toJSON()}))
    }else{
      console.log("NULL Token")
    }
  }catch(e){
    console.log(e);
  }
  res.send(JSON.stringify({api:'ERROR'}))
});

router.delete('/delete', async (req, res) => {
  res.set('Content-Type', 'application/json');
  const { id } = req.body;
  console.log(req.body)
  try{
    var cookies = cookie.parse(req.headers.cookie || '');
    //console.log(cookies)
    if(cookies?.token){
      
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)
      const deleteBlog = await BlogModel.deleteOne({
        id
      });
      console.log(deleteBlog)
      return res.send(JSON.stringify({api:'DELETE'}))
    }else{
      console.log("NULL Token")
    }
  }catch(e){
    console.log(e);
  }

  res.send(JSON.stringify({api:'ERROR'}))
});

export default router;