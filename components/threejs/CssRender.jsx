/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/
// https://jsfiddle.net/trusktr/jc6j1wmf/
// https://github.com/mrdoob/three.js/blob/master/examples/jsm/renderers/CSS3DRenderer.js

import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';

import * as THREE from 'three';
//import * as three from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { useCssTrois } from './CssTroisProvider';
//import 'three';
//import { CSS3DRenderer } from 'three';
//import {CSS3DObject } from 'three';
//console.log(THREE)
//console.log(CSS3DRenderer)

export default function CssRender(props) {

  const [name, setName] = createSignal('Three');
  let canvas;
  let renderer;
  let controls;
  const id = crypto.randomUUID();
  const {setScene, setCamera} = useCssTrois();

  const _camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  //_camera.position.z = 1;
  _camera.position.set( 0, 0, 500 );
  const scene = new THREE.Scene();

  setScene(scene)

  function animationFrame( time ) {
    renderer.render( scene, _camera );
    //console.log(scene)
    //console.log(_camera)
    //console.log(renderer)
    //console.log("loop?")

    window.requestAnimationFrame(animationFrame);
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
    let divelement = document.getElementById(id)
    console.log(divelement)

    //renderer = new THREE.CSS3DRenderer( { canvas:canvas } );
    renderer = new CSS3DRenderer( divelement );
    //renderer = new CSS3DRenderer();
    renderer.setSize( getActualWidth(), getActualHeight() );
    //renderer.setClearColor( 0x000000, 0 );
    //renderer.domElement.style.position = 'absolute';
    //renderer.domElement.style.top = 0;
    //renderer.setAnimationLoop( animationFrame );

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.zIndex = 0;
    renderer.domElement.style.top = 100;
    //document.body.append(renderer.domElement)
    divelement.append(renderer.domElement)

    window.requestAnimationFrame(animationFrame);

    window.addEventListener("resize", windowResize)
    //controls = new OrbitControls( _camera, renderer.domElement );
  }

  function setupCssObj3D(){
    var element = document.createElement( 'div' );
    element.style.width = '100px';
    element.style.height = '100px';
    //element.style.opacity = 0.999;
    element.style.background = new THREE.Color(
      Math.random() * 0.21568627451 + 0.462745098039,
      Math.random() * 0.21568627451 + 0.462745098039,
      Math.random() * 0.21568627451 + 0.462745098039,
    ).getStyle();
    element.textContent = "Hellow!"
    //element.setAttribute('contenteditable', '')
    //element.addEventListener( 'click', function(){
      // delete the column here
      //console.log("Hssello?")
    //} );

    var btnEl = document.createElement( 'button' );
    //btnEl.textContent = "Button";
    btnEl.innerHTML = 'Hello, World!';
    //btnEl.onclick =function(){
      //console.log("Hello?")
    //};
    btnEl.addEventListener( 'click', function(){
      // delete the column here
      console.log("Hello?")
    } );

    element.append(btnEl)

    var domObject = new CSS3DObject( element );
    //domObject.position.x = Math.random() * 600 - 300;
    //domObject.position.y = Math.random() * 600 - 300;
    //domObject.position.z = Math.random() * 800 - 600;
    //domObject.rotation.x = Math.random();
    //domObject.rotation.y = Math.random();
    //domObject.rotation.z = Math.random();
    //domObject.scale.x = Math.random() + 0.5;
    //domObject.scale.y = Math.random() + 0.5;
    scene.add( domObject );
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
    //setupCssObj3D();
    //setupLights();
    //setupCube();
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
      <div id={id} ref={canvas}>
        {props.children}
      </div>
    </>
  );
}