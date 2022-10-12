/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/
/*
  check for:
  base exist
  load exist
  error on server for error database
*/


import { createEffect, createMemo, createSignal } from 'solid-js';
import CreateBase from './ui/CreateBase';

export default function PageMobileBase(){

  const [isBase, setIsBase] = createSignal(false)
  const [isLoading, setIsLoading] = createSignal(true)

  async function getBase(){
    let resp = await fetch('/api/mobilebase/home')
    let data = await resp.json()
    console.log(data)
    if(data?.api !=null){
      if(data.api=='NOBASE'){
        setIsBase(false);
        setIsLoading(false)
      }
      if(data.api=='HOMEBASE'){
        setIsBase(true);
        setIsLoading(false)
      }
      if(data.api=='ERROR'){

        setIsLoading(false)
      }
    }
  }

  getBase();

  const checkingBase = createMemo(()=>{
    if(isBase()){
      return (<label> Hello </label>)
    }else{
      //return (<label> Hello </label>)
      return (<CreateBase />)
    }
  });

  //createEffect(()=>{
    //console.log(isLoading())
    //console.log(checkingBase())
    //console.log(isBase())
  //})

  return (<>
    {isLoading()?(<>
      <label> Loading... </label>
    </>):(<>
      {checkingBase}
    </>)}
  </>)
};
