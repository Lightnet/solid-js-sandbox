/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
//import { supabase } from '../libs/supabaseclient.js';
//import Auth from '../components/auth/api/Auth.jsx';
//import Account  from '../components/auth/api/Account.jsx';
//import { useAuth } from '../components/auth/api/AuthProvider.jsx';
import { createMemo, createSignal } from "solid-js";
import ModalTest from "../components/modal/ModalTest"
import NotifyTest from "../components/notify/NotifyTest"

export default function PageTestLab() {

  return (
    <div>
      <label> Test Lab </label>
      <NotifyTest />
      <ModalTest/>
    </div>
  )
}