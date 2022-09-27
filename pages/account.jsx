/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
import Account  from '../components/account/api/Account.jsx';
import { useAuth } from '../components/auth/api/AuthProvider.jsx';
import AuthAccess from '../components/auth/api/AuthAccess.jsx';

export default function PageAccount() {

  const [,{isLogin}] = useAuth();

  return (<AuthAccess>
    <div>
      <label>Account</label>
    </div>
    <Account/>
  </AuthAccess>)
}