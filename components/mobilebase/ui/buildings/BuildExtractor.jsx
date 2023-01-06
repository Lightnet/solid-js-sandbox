/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onCleanup } from "solid-js"
import useAxois from "../../../use/useAxois"

export default function BuildExtractor(props){

  const [status, setStatus] = createSignal("Ready")
  const [action, setAction] = createSignal("Build")
  const [name, setName] = createSignal("")
  const [tagName, setTagName] = createSignal("extractmetal")

  const [remainTime, setRemainTime] = createSignal("00:00:00")

  const [id, setID] = createSignal(props?.id || null)
  const [time, setTime] = createSignal(props?.time || 0)

  const [timer, setTimer] = createSignal(null)

  function clickAction(){
    //console.log("click...")
    if(id()){
      console.log("found id:",id())
      useAxois({
        url:'/api/mobilebase/building',
        method:'POST',
        data:{
          id:id(),
          action:"build"
        }
      }).then(resp=>{
        console.log(resp.data)
        if(resp.data?.api !==null){
          if(resp.data.api=='EMPTY'){
            console.log("building Name EMPTY!")
          }
  
          if(resp.data.api=='EXIST'){
            console.log("building Name Exist!")
          }
  
          if(resp.data.api=='BUILDING'){
            //onChange(resp.data.building)
            console.log(resp.data.building)
            setTime(resp.data.building.time);
          }
        }
      }).catch(e=>{
        console.log(e)
      })

      return;
    }
    useAxois({
      url:'/api/mobilebase/construction',
      method:'POST',
      data:{
        name:tagName()
      }
    }).then(resp=>{
      console.log(resp.data)
      if(resp.data?.api !==null){
        if(resp.data.api=='EMPTY'){
          console.log("building Name EMPTY!")
        }

        if(resp.data.api=='EXIST'){
          console.log("building Name Exist!")
        }

        if(resp.data.api=='BUILDING'){
          //onChange(resp.data.building)
        }
      }
    }).catch(e=>{
      console.log(e)
    })
    
  }

  function checkTime(){
    let buildtime = time();
    if(buildtime > 300){

      //console.log("build time:", buildtime)
      let currentTime = new Date().getTime();
      //console.log("currentTime: ",currentTime)
      let remainTime = buildtime - currentTime;
      //console.log("remainTime: ", remainTime)
      //let h = remainTime / 

      let hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remainTime %(1000 * 60) / 1000))
      if(hours<10){hours="0"+hours;}
      if(minutes<10){minutes="0"+minutes;}
      if(seconds<10){seconds="0"+seconds;}

      setRemainTime(String(hours + ":" + minutes + ":" + seconds))

      if(remainTime <= 0){
        console.log("FINISH")
        let idtime = timer();
        if(idtime){
          clearInterval(idtime)
          setRemainTime("00:00:00[finish]")
          setAction("Start")
        }
      }else{

      }
    }
  }

  function initTime(){
    let idtime = setInterval(()=>{
      checkTime()
    },1000)
    setTimer(idtime)
  }

  initTime()

  onCleanup(()=>{
    let idtime = timer();
    if(idtime){
      clearInterval(idtime)
    }
  })

  return (<div>
    <label> Metal Ore Extractor </label> <button onClick={clickAction}> {action()} </button> <label> Status: {status()}  </label>
    <label> Time: {remainTime()} </label>
  </div>)
}