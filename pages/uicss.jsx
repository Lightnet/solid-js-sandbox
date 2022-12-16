/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import CssObject3D from "../components/threejs/CssObject3D";
import CssRender from "../components/threejs/CssRender";
import CssTroisProvider from "../components/threejs/CssTroisProvider";


export default function PageUICSS() {

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