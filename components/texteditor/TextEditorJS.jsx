/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://stackoverflow.com/questions/62414553/how-to-make-editor-js-scrollable-after-some-fixed-height
// https://github.com/codex-team/editor.js/issues/2097
// https://github.com/codex-team/editor.js/issues/1097
// 
// https://github.com/codex-team/editor.js/issues/724
// 
// https://editorjs.io/configuration

import { createEffect, createSignal, onMount } from 'solid-js'

import EditorJS from '@editorjs/editorjs';
import Table from '@editorjs/table';
import LinkTool from'@editorjs/link';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';
import Underline from '@editorjs/underline';
import RawTool from '@editorjs/raw';
import Checklist from '@editorjs/checklist';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code';
import Quote from '@editorjs/quote';
import InlineCode from '@editorjs/inline-code';
import Warning from '@editorjs/warning';
import Marker from '@editorjs/marker';


export default function TextEditorJS(props){

  const [textEditor, setTextEditor] = createSignal(null)
  const [editorID, setEditorID] = createSignal(crypto.randomUUID())

  onMount(()=>{
    if(textEditor()==null){
      console.log(props.value)
      let data = {};
      if(props?.value){
        if(typeof props?.value == 'string'){
          data = JSON.parse(props.value);
        }
      }
      let readOnly;
      console.log(props?.readOnly)
      if(typeof props?.readOnly == 'boolean'){
        readOnly = props.readOnly
      }

      const editor = new EditorJS({
        //autofocus: true,
        minHeight : 0,
        placeholder: 'Write Text...',
        //readOnly: true,
        readOnly: readOnly || false,
        //holder: 'editorjs',
        holder: editorID(),
        tools: {
          table: Table,
          embed: Embed,
          underline: Underline,
          raw: RawTool,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
          code: CodeTool,
          quote: Quote,
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          warning: Warning,
          Marker: {
            class: Marker,
            //shortcut: 'CMD+SHIFT+M',
          }
        },
        onReady: () => {
          //console.log('Editor.js is ready to work!')
          //console.log(editor)
        },
        onChange: async (api, event) => {
          
          //console.log('Now I know that Editor\'s content changed!', event)
          //console.log(api)
          try{
            if(typeof props?.onChange == 'function'){
              //let data = await event.detail.target.save()
              //console.log(data)
              let valueData = await textEditor().save();
              //console.log(valueData)
              props.onChange(valueData)
              //console.log("FINISH?")
            }
          }catch(e){
            console.log(e)
            console.log("TEXT EDITOR CHANGE ERROR!")
          }
        },
        // Previously saved data that should be rendered
        //data: {}
        data: data
      });

      setTextEditor(editor)
    }
  })

  //function createBlog(){
    //const editor = textEditor()
    //editor.save().then((outputData) => {
      //console.log('Article data: ', outputData)
      //console.log(JSON.stringify(outputData))
    //}).catch((error) => {
      //console.log('Saving failed: ', error)
    //});
  //}

  return (<>
    <div style="background-color:white; width:600px;min-height:100px;" id={editorID()}></div>   
  </>)
  //<button onClick={createBlog}> Create Blog </button>
}