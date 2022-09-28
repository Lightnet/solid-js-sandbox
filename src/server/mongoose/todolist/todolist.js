/*
  Project Name: vite-solid-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';
import cookie from 'cookie';
import ToDoListModel from '../../../../libs/db/mongoose/todolist.js';
import { v4 as uuidv4 } from 'uuid';
import { verifyToken } from '../../../../libs/serverapi.js';

import { config } from 'dotenv';
config();
const router = Router()

const SECRET = process.env.SECRET || "TEST0123456789012345678901";
console.log("process.env.SECRET: ",process.env.SECRET)
console.log("SECRET: ",SECRET)

router.get('/list', async (req, res) => {
  res.set('Content-Type', 'application/json');
  try {
    var cookies = cookie.parse(req.headers.cookie || '');
    if(cookies?.token){
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)


      const tasks = await ToDoListModel.find({aliasID:userData.aliasID});
      return res.send(JSON.stringify({api:'TASKS',tasks:tasks}))
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
    console.log(cookies)
    if(cookies?.token){
      //ToDoListModel
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)

      const newTask = new ToDoListModel({
        aliasID:userData.aliasID,
        content:content
      })

      newTask.save(function (err) {
        if (err) return handleError(err);
        console.log("save!")
        // saved!
      });

      console.log(newTask.toJSON());
      return res.send(JSON.stringify({api:'CREATED',task:newTask.toJSON()}))
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
      //ToDoListModel
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)

      const updateTask = await ToDoListModel.findOne({
        id:id
      })
      updateTask.content = content;

      await updateTask.save(); 

      console.log(updateTask.toJSON());
      return res.send(JSON.stringify({api:'UPDATE',task:updateTask.toJSON()}))
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
      //ToDoListModel
      
      const userData = verifyToken(cookies.token, SECRET);
      console.log(userData)
      const deleteTask = await ToDoListModel.deleteOne({
        id
      });
      console.log(deleteTask)
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