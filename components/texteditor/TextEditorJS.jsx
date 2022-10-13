/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, onMount } from 'solid-js'

import EditorJS from '@editorjs/editorjs';

export default function TextEditorJS(props){

  const [textEditor, setTextEditor] = createSignal(null)
  const [editorID, setEditorID] = createSignal(crypto.randomUUID())

  onMount(()=>{
    if(textEditor()==null){
      const editor = new EditorJS({
        //holder: 'editorjs'
        holder: editorID()
      });

      setTextEditor(editor)
    }
  })

  function createBlog(){
    const editor = textEditor()
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
      console.log(JSON.stringify(outputData))
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }

  return (<>
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css"></link>
    <div style="background-color:white; width:600px;height:400px;" id={editorID()}></div>
    <button onClick={createBlog}> Create Blog </button>
  </>)
}