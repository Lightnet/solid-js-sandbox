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

  async function btnCreate(){
    useAxois({
      url:'/api/mobilebase/home',
      method:'POST',
      data:{
        name:name()
      }
    }).then(resp=>{
      console.log(resp.data)
    }).catch(e=>{
      console.log(e)
    })
    
    /*
    try{
      let data = await useFetch('/api/mobilebase/home',{
        method:'POST',
        body:JSON.stringify({
          name:name()
        })
      })
      console.log(data)
    }catch(e){
      console.log(e)
    }
    */

    /*
    try{
      let resp = await fetch('/api/mobilebase/home',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name:name()
        })
      })
      let data = await resp.json();
      console.log(data)
    }catch(e){
      console.log(e)
    }
    */
  }

  return (<>
    <label>Create:</label>
    <input value={name()} onInput={(e)=>setName(e.target.value)} placeholder="Base Name!"/>
    <button onClick={btnCreate}> Create </button>
  </>)
}