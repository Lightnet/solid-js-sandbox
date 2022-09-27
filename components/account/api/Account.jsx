/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal } from 'solid-js'
import { useAuth } from '../../auth/api/AuthProvider.jsx';
//import AuthAccess from '../../auth/api/AuthAccess.jsx';

export default function Access() {

  const [,{user}] =useAuth();

  return(<>
    <label>Alias: {user()} </label>
  </>)
}