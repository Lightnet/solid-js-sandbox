/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import CssObject3D from "../threejs/CssObject3D";
import CssRender from "../threejs/CssRender";
import CssTroisProvider from "../threejs/CssTroisProvider";

export default function examplecssrender() {

  //const [session, {user,setSession}] = useAuth();

  return (<>
    <CssTroisProvider>
      <CssRender>
        <CssObject3D>
          <div style="width:100px;height:100px;background:#ffffff;">
            <label>Hello World1</label>
          </div>
        </CssObject3D>
      </CssRender>
    </CssTroisProvider>

  </>)
}