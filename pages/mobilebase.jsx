/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect, createSignal } from 'solid-js'
import Access from '../components/auth/api/AuthAccess.jsx'; 
import PageMobileBase from '../components/mobilebase/PageMobileBase.jsx';
export default function PageGame() {
  
  return (<Access>
    <PageMobileBase/>
  </Access>)
}
