/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from "solid-js"
import useAxois from "../../use/useAxois";

export default function DayReward(props){

  const [cmd,setCMD] =createSignal("")

  function inputCMD(e){
    setCMD(e.target.value)

  }

  return(<>
    <div style="position:fixed;bottom:0px;left:0px;">
      <input value={cmd()} onInput={inputCMD}/>
    </div>
  </>)
}