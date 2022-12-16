/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';
import { getTokenUser } from '../../../../libs/serverapi.js';
import HomeBaseModel from '../../../../libs/db/mongoose/homebase.js';

import construction from "./construction.js"
import building from "./building.js"

//import { v4 as uuidv4 } from 'uuid';
//import { config } from 'dotenv';
//config();

const router = Router()

router.get('/home', async (req, res) => {
  res.set('Content-Type', 'application/json');
  try{
    let userData = getTokenUser(req);
    console.log("userData")
    console.log(userData)
    if(userData){
      let homeBase = await HomeBaseModel.findOne({
        aliasID: userData.aliasID
      }).exec();
      console.log(homeBase)
      if(homeBase){
        return res.send(JSON.stringify({api:'HOMEBASE',homebase:homeBase}))
      }else{
        return res.send(JSON.stringify({api:'NOBASE'}))
      }
    }
  }catch(e){
    console.log(e);
    return res.send(JSON.stringify({api:'ERROR'}))
  }
  //return res.send(JSON.stringify({api:'BASE',base:[]}))
  return res.send(JSON.stringify({api:'ERROR'}))
});

router.post('/home', async (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log(req.body)
  let {name } = req.body;
  if(!name){
    return res.send(JSON.stringify({api:'EMPTY'}));
  }
  try{
    let userData = getTokenUser(req);
    console.log("userData")
    console.log(userData)
    if(userData){
      let homeBase = await HomeBaseModel.findOne({
        aliasID: userData.aliasID
      }).exec();
      console.log(homeBase)
      if(homeBase){
        return res.send(JSON.stringify({api:'EXIST'}))    
      }else{
        
        let newHomeBase = new HomeBaseModel({
          aliasID: userData.aliasID,
          name:name
        });
        console.log(newHomeBase)
        await newHomeBase.save();
        let homeBaseData = newHomeBase.toJSON();
        console.log(homeBaseData)
        return res.send(JSON.stringify({api:'HOMEBASE',homebase:homeBaseData}))
      }
    }
  }catch(e){
    console.log(e);
    return res.send(JSON.stringify({api:'ERROR'}))
  }

  res.send(JSON.stringify({api:'ERROR'}))
});

router.use('/construction',construction)
router.use('/building',building)

export default router;