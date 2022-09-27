/*
  Project Name: vite-solid-surrealdb
  License: MIT
  Created by: Lightnet
*/

import { 
  createContext
, createEffect
, createSignal
, useContext
} from 'solid-js';

import { useAuth } from './AuthProvider';
import SignIn from "./SignIn.jsx";

export default function AuthAccess(props){

  const [,{isLogin} ] = useAuth();

  return (<>
    {isLogin()?(<>
      {props.children}
    </>):(<>
      <SignIn/>
    </>)}
  </>)
}