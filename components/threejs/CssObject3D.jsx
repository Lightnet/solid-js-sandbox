/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';

import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { useCssTrois } from './CssTroisProvider';
import { PropAliases } from 'solid-js/web';


export default function CssObject3D(props) {


  let ref;
  const id = crypto.randomUUID();
  const {scene, setScene, setCamera} = useCssTrois();

  function setup(){
    var domObject = new CSS3DObject( ref );
    //scene.add( domObject );
    scene().add( domObject );
  }

  onMount(() => {
    setup();

  });

  onCleanup(()=>{
    if(domObject){
      console.log("remove cssobject...")
      scene().remove( domObject );
    }
  })

  return (
    <>
      <div id={id} ref={ref}>
        {props.children}
      </div>
    </>
  );
}
//<label>Hello World</label>