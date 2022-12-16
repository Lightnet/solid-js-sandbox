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
      let buildings = await BuildingModel.find({
        aliasID: userData.aliasID
      })
      if(buildings){
        console.log(buildings)
        //let cbuilding= buildings.toJSON();
        //console.log(cbuilding)

        return res.send(JSON.stringify({api:'BUILDINGS', buildings:buildings}))
      }else{
        return res.send(JSON.stringify({api:'NOBUILDINGS'}))
      }
    }
  }catch(e){
    console.log(e);
  }
  //return res.send(JSON.stringify({api:'BASE',base:[]}))
  return res.send(JSON.stringify({api:'ERROR'}))
});

router.post('/', async (req, res) => {
  res.set('Content-Type', 'application/json');
  try{
    let userData = getTokenUser(req);
    console.log("userData")
    console.log(userData)
    if(userData){
      const data = req.body;
      console.log(data)
      let building = await BuildingModel.findOne({
        aliasID: userData.aliasID,
        id:data.id
      })
      if(building){
        if(data.action == "build"){
          // https://stackoverflow.com/questions/7687884/add-10-seconds-to-a-date
          if(building.status == "contruct" && building.time == 300){
            console.log("HELLO TEST?")
            //let currentTime = new Date();
            //currentTime.setSeconds()
            //let settime = building.time + new Date().getTime();
            //console.log(settime)
            //building.time = settime;
            let currentTime = new Date().getTime();
            building.time = new Date(currentTime + building.producetime * 1000 ).getTime();
            //building.time
            await building.save();
            return res.send(JSON.stringify({api:'BUILDING',building:building.toJSON()}))
          }

          if(building.status == "contruct" && building.time > 300){
            let currentTime = new Date().getTime();
            if(building.time >= currentTime ){
              //building.time = new Date(currentTime.getTime() + building.producetime * 1000 ).getTime();
              building.time = new Date(currentTime + building.producetime * 1000 ).getTime();
              building.status = "produce";
              await building.save();
            }else{

            }
          }
        }
        console.log(building)
        return res.send(JSON.stringify({api:'BUILDING',building:building.toJSON()}))
      }else{
        return res.send(JSON.stringify({api:'NOBUILDINGS'}))
      }
    }
  }catch(e){
    console.log(e);
  }
  //return res.send(JSON.stringify({api:'BASE',base:[]}))
  return res.send(JSON.stringify({api:'ERROR'}))
});

export default router;