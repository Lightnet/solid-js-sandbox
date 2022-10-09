/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal } from 'solid-js'

//import Auth from '../components/auth/api/Auth.jsx';
//import { useAuth } from '../components/auth/api/AuthProvider.jsx';
import Access from '../components/auth/api/AuthAccess.jsx'; 
export default function PageGame() {

  return (<Access>
    <label> Game Here? </label>
  </Access>)
}
