/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal, For } from "solid-js";
import useAxois from "../../use/useAxois";
import { useMobileBase } from "../MobileBaseProvider";
import BuildExtractor from "./buildings/BuildExtractor";

export default function BaseBuildings(){
  const { baseInfo, baseName } = useMobileBase();
  //console.log(baseInfo())
  const [status, setStatus] = createSignal("")

  const [buildings, setBuildings] = createSignal([])

  function getBuildings(){
    useAxois({
      url:'/api/mobilebase/building',
      method:'GET'
    }).then(resp=>{
      console.log(resp.data)
      if(resp.data?.api !==null){
        if(resp.data.api=='EMPTY'){
          console.log("building Name EMPTY!")
        }
        if(resp.data.api=='BUILDINGS'){
          //onChange(resp.data.building)
          setBuildings(resp.data.buildings);
        }
      }
    }).catch(e=>{
      console.log(e)
    })
  }

  getBuildings();

  return (<>
    <label>Base Buildings:</label>
    <div>
      <For each={buildings()} >
        {(item, index) => {
          if(item.name == "extractmetal"){
           return <div id={index()}>
            <BuildExtractor id={item.id} time={item.time}/>
          </div>}else{
            return <div></div>
          }
        }}

      </For>
      
    </div>
  </>)
}