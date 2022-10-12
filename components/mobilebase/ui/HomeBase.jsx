/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { useMobileBase } from "../MobileBaseProvider";

export default function HomeBase(){
  const { baseInfo, baseName } = useMobileBase();
  //console.log(baseInfo())
  return (<>
    <label>Base Name: {baseName()}</label>
  </>)
}