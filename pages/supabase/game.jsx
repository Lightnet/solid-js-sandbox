/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal } from 'solid-js'

import Auth from '../components/auth/Auth.jsx';
import { useAuth } from '../components/auth/AuthProvider.jsx';
import Access from '../components/auth/supabase/Access.jsx'; 
export default function PageHome() {
  //const [session, setSession] = createSignal(null)
  const [session] = useAuth();

  createEffect(() => {
    console.log(session())
  })

  return (<Access>
    <label> Game Here? </label>
  </Access>)
}
