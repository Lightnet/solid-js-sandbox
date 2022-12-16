/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import RoomScene from "../components/threejs/RoomScene";
import SimpleScene from "../components/threejs/SimpleScene";

//import Access from '../components/auth/api/AuthAccess.jsx';
//import { useAuth } from '../components/auth/api/AuthProvider.jsx';

export default function PageThreejs() {

  //const [session, {user,setSession}] = useAuth();

  return (<>
    
    <RoomScene/>
  </>)
  //<SimpleScene/>
  /*
  return (
    <div>
      <Access>
        <label>Home, {user()}</label>
      </Access>
    </div>
  )
  */
}