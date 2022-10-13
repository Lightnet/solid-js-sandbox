/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, onMount } from 'solid-js'

import Quill from 'quill';
//import 'https://cdn.quilljs.com/1.3.6/quill.core.css';
//import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
//<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"></link>
export default function TextQuill(){
  const [textEditor, setTextEditor] = createSignal(null)
  const [editorID, setEditorID] = createSignal(crypto.randomUUID())

  onMount(()=>{
    if(textEditor()==null){
      //var quill = new Quill('#'+editorID(), {});
      const editorEL = document.getElementById(editorID())
      var quill = new Quill(editorEL, {
        modules: {
          //toolbar: false    // Snow includes toolbar by default
        },
        formats:{
          background:'blue'
        },
        placeholder: 'Compose an epic...',
        //readOnly: true,
        //theme: 'snow'
        theme: 'bubble'
      });
      quill.focus();
      setTextEditor(quill)
    }
  })

  function createBlog(){
    console.log(textEditor())
    let delta;
    //delta = textEditor().getContents();
    //console.log(delta)

    delta = textEditor().getText();
    console.log(delta)
  }


  /*
  <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.core.css"></link>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"></link>
  <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">
  */
  return (<>
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css"></link>
    <div style="background-color:white; width:400px;height:200px;" id={editorID()}></div>
    <button onClick={createBlog}> Create Blog </button>

  </>)
}