/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { useMobileBase } from "../MobileBaseProvider";
import BuildExtractor from "./buildings/BuildExtractor";

export default function BaseConstruction(){
  const { baseInfo, baseName } = useMobileBase();
  //console.log(baseInfo())
  return (<>
    <label>Base Construction:</label>
    <div>
      <BuildExtractor/>
    </div>    
  </>)
}
/*

*/