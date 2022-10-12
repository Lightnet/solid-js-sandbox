/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://developer.mozilla.org/en-US/docs/Web/API/AbortController

import { onCleanup } from "solid-js";

export default function useFetch(url, options){
  //let controller = new AbortController();
  //const signal = controller.signal;

  //onCleanup(()=>{
    //controller.abort();
  //})

  return new Promise((resolve, reject)=>{
    fetch(url, { ...options })
    .then( async (response) => {
      console.log("response", response);
      let data = await response.json()
      resolve(data);
    })
    .catch((err) => {
      console.error(`error: ${err.message}`);
      reject(err.message)
    });
  })
}