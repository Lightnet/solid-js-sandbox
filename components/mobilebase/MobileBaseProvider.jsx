/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { 
  createContext
, createEffect
, createSignal
, useContext
} from 'solid-js';

export const MobileBaseContext = createContext();

export function useMobileBase(){return useContext(MobileBaseContext);}

export default function MobileBaseProvider(props){

  const [baseInfo, setBaseInfo] = createSignal(props.baseInfo || null);
  const [buildings, setBuildings] = createSignal([]);
  const [baseName, setBaseName] = createSignal('No Name');

  const value = {
    baseInfo,
    setBaseInfo,
    baseName,
    setBaseName
  }

  //watch data
  createEffect(() => {
    if(baseInfo()){
      setBaseName(baseInfo().name)
    }
  })

  return (<MobileBaseContext.Provider value={value}>
    {props.children}
  </MobileBaseContext.Provider>)
}