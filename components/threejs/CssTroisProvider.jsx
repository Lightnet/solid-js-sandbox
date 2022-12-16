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

export const CssTroisContext = createContext();

export function useCssTrois(){return useContext(CssTroisContext);}


export default function CssTroisProvider(props){

  const [scene, setScene] = createSignal(props.scene || null);
  const [camera, setCamera] = createSignal(props.camera || null);

  const value = {
    scene,setScene,
    camera, setCamera
  }

  return (<CssTroisContext.Provider value={value}>
    {props.children}
  </CssTroisContext.Provider>)
}