/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from "solid-js"
import useAxois from "../../use/useAxois";
import useFetch from "../../use/useFetch";

export default function CreateBase(props){

  const [name, setName] = createSignal('');

  function onChange(_data){
    if(typeof props?.onChange==='function'){
      props.onChange(_data)
    }
  }

  async function btnCreate(){
    useAxois({
      url:'/api/mobilebase/home',
      method:'POST',
      data:{
        name:name()
      }
    }).then(resp=>{
      //console.log(resp.data)
      if(resp.data?.api !==null){
        if(resp.data.api=='EMPTY'){
          console.log("HomeBase Name EMPTY!")
        }

        if(resp.data.api=='EXIST'){
          console.log("HomeBase Name Exist!")
        }

        if(resp.data.api=='HOMEBASE'){
          onChange(resp.data.homebase)
        }
      }
    }).catch(e=>{
      console.log(e)
    })
  }

  return (<>
    <label>Create:</label>
    <input value={name()} onInput={(e)=>setName(e.target.value)} placeholder="Base Name!"/>
    <button onClick={btnCreate}> Create </button>
  </>)
}