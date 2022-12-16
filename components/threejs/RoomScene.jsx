/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';
import * as THREE from 'three';

export default function RoomScene() {

  const [name, setName] = createSignal('Three');
  let canvas;
  let renderer;
  let controls;
  const id = crypto.randomUUID();

  const _camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 2000 );
  _camera.position.z = 64;
  //_camera.position.y = 64;
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

  function setupFloor(){
    const geometry = new THREE.BoxGeometry( 128, 8, 128 );
    //const material = new THREE.MeshNormalMaterial();
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
  }


  function setupCeiling(){
    const geometry = new THREE.BoxGeometry( 128, 8, 128 );
    //const material = new THREE.MeshNormalMaterial();
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 128;
    scene.add( mesh );
  }

  function setupWalls(){
    const geometry = new THREE.BoxGeometry( 128, 128, 8 );
    //const material = new THREE.MeshNormalMaterial();
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 64;
    //mesh.position.x = 64;
    mesh.position.z = -64;
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
    setupFloor();
    setupCeiling();
    setupWalls();
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