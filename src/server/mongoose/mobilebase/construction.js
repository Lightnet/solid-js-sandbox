/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';
import { getTokenUser } from '../../../../libs/serverapi.js';
import HomeBaseModel from '../../../../libs/db/mongoose/homebase.js';
import BuildingModel from '../../../../libs/db/mongoose/building.js';

//import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
config();

const router = Router()

router.get('/', async (req, res) => {
  res.set('Content-Type', 'application/json');
  
  try{
    let userData = getTokenUser(req);
    console.log("userData")
    console.log(userData)
    if(userData){
      /*
      let homeBase = await HomeBaseModel.findOne({
        aliasID: userData.aliasID
      }).exec();
      console.log(homeBase)
      if(homeBase){
        return res.send(JSON.stringify({api:'HOMEBASE',homebase:homeBase}))
      }else{
        return res.send(JSON.stringify({api:'NOBASE'}))
      }
      */
    }
  }catch(e){
    console.log(e);
  }
  return res.send(JSON.stringify({api:'ERROR'}))
});

router.post('/', async (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log("base construct...")

  try{
    let userData = getTokenUser(req);
    console.log("userData")
    console.log(userData)
    if(userData){
      const { name } = req.body;
      //need checks


      if(name){
        let homeBase = await HomeBaseModel.findOne({
          aliasID: userData.aliasID
        }).exec();


        if(name=="extractmetal"){
          let newBuilding = new BuildingModel({
            baseid: homeBase.id,
            aliasID: userData.aliasID,
            name:"extractmetal",
          })
          
          await newBuilding.save();

          return res.send(JSON.stringify({api:'BUILDING',building:newBuilding.toJSON()}))
        }
        if(name=="extracthydrogen"){

        }
        if(name=="extractcrystal"){

        }
      }
    }
  }catch(e){
    console.log(e);
  }
  
  return res.send(JSON.stringify({api:'ERROR'}))
});


export default router;