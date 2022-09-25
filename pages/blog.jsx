/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
//import { supabase } from '../libs/supabaseclient.js';
import Auth from '../components/auth/api/Auth.jsx';
import Account  from '../components/auth/api/Account.jsx';
import { useAuth } from '../components/auth/api/AuthProvider.jsx';

export default function PageHome() {

  const [session, {setSession}] = useAuth();

  return (
    <div>
      <label>Blog</label>
    </div>
  )
}