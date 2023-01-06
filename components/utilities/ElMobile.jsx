/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3

import { createSignal, onMount } from 'solid-js';
import checkMobile from './deviceMobile';

export default function ElMobile(){

  const [isMobile, setIsMobile] = createSignal(false)

  onMount(()=>{
    //console.log(navigator.userAgentData.mobile)
    let _checkMobile = checkMobile();
    console.log(_checkMobile)
    setIsMobile(_checkMobile)
  })

  return (<>
    <label>Mobile {isMobile() ? 'True':'False'}</label>
  </>)
};
