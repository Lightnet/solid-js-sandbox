/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';
import * as THREE from 'three';

export default function SimpleScene() {

  const [name, setName] = createSignal('Three');
  let canvas;
  let renderer;
  let controls;
  const id = crypto.randomUUID();

  const _camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  _camera.position.z = 1;
  const scene = new THREE.Scene();

  //setScene(scene)

  function animationFrame( time ) {
    renderer.render( scene, _camera );
  }

  function windowResize(){
    //console.log("resize", renderer)
    if(renderer){
      let width = getActualWidth();
      let height = getActualHeight();
      _camera.aspect = width / height;
      _camera.updateProjectionMatrix();
      renderer.setSize( width, height );
    }
  }

  function getActualWidth() {
    var actualWidth = //window.innerWidth ||
                      //document.documentElement.clientWidth ||
                      document.body.clientWidth ||
                      document.body.offsetWidth;

    return actualWidth;
  }

  function getActualHeight() {
    var actualHeight = //window.innerHeight ||
                      //document.documentElement.clientHeight ||
                      document.body.clientHeight ||
                      document.body.offsetHeight;

    return actualHeight;
  }

  function setupLights(){
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    light.intensity=10;
    scene.add( light );
  }

  function setupCube(){
    const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
  }

  function setup(){
    renderer = new THREE.WebGLRenderer( { antialias: true,canvas:canvas } );
    renderer.setSize( getActualWidth(), getActualHeight() );
    renderer.setAnimationLoop( animationFrame );
    window.addEventListener("resize", windowResize)
    controls = new OrbitControls( _camera, renderer.domElement );
  }

  function cleanUpScene(){
    //console.log("cleanUpScene: ",scene)
    while (scene.children.length)
    {
      //console.log("remove...")
      scene.remove(scene.children[0]);
    }
  }
  
  onMount(() => {
    setup();
    setupLights();
    setupCube();
    //console.log("canvas scene")
    //console.log(canvas)
  });

  createEffect(() => {
    //console.log(statethree.eObject3Ds)
    //console.log(statethree)
  });

  onCleanup(()=>{
    cleanUpScene();
    //console.log("clean up")
    window.removeEventListener("resize", windowResize)
  })

  return (
    <>
      <canvas id={id} ref={canvas}>
        
      </canvas>
    </>
  );
}