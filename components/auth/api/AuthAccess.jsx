/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal} from 'solid-js';
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