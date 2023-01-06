/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from "solid-js";
import { useMobileBase } from "../MobileBaseProvider";
import BaseBuildings from "./BaseBuildings";
import BaseConstruction from "./BaseConstruction";

export default function HomeBase(){

  const { baseInfo, baseName } = useMobileBase();
  //console.log(baseInfo())
  const [view, setView] = createSignal('buildings')


  function renderView(){
    if(view()=='buildings'){
      return <BaseBuildings/>
    }else if(view()=='construction'){
      return <BaseConstruction/>
    }else{
      return <></>;
    }
  }

  return (<div>
    <div>
      <label>Base Name: {baseName()}</label><br/>
      <button onClick={()=>setView('buildings')}>Buildings</button>
      <button onClick={()=>setView('construction')}>Contructions</button>
      <button onClick={()=>setView('construction')}>Shipyard</button>
    </div>
    <div>
      {renderView()}
    </div>
    

  </div>)
}