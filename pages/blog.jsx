/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, Show } from 'solid-js'
import TextEditorJS from '../components/texteditor/TextEditorJS';
//import TextQuill from '../components/texteditor/TextQuill';

export default function PageBlog() {

  const [blogs, setBlogs] = createSignal([]);
  const [newContent, setNewContent] = createSignal(null);
  const [blogID, setBlogID] = createSignal("");
  const [editContent, setEditContent] = createSignal("");
  const [errorText, setError] = createSignal("");

  const [showCreateBlog, setShowCreateBlog] = createSignal(false);

  const fetchBlogs = async () => {
    try{
      let resp = await fetch('/api/blog/list')
      let data = await resp.json()
      console.log(data)
      if(data.api !== null && data.api == 'BLOGS'){
        console.log(data.blogs)
        setBlogs(data.blogs);
      }
    }catch(e){
      console.log(e);
    }
  };

  const addBlog = async () => {
    let textContent = newContent();
    textContent = textContent.trim();
    try{
      let resp = await fetch('/api/blog/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          content:textContent
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api!==null && data.api =='CREATED'){
        let item = data.blog;
        setBlogs(state=>[...state, item])
      }

      //setError("");
      //setNewTask("")
    }catch(e){
      console.log(e);
    }
  };

  async function updateBlog(){
    try{
      let resp = await fetch('/api/blog/update',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id:blogID(),
          content:editContent()
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api !== null && data.api == 'UPDATE'){
        setBlogs(state=>state.map(item=>{
          if(item.id == data.blog.id){
            let content = data.blog.content;
            return {...item, content}
          }
          return item;
        }))
      }

      setBlogID("");
      //setError("");
      //setNewTask("")
    }catch(e){
      console.log(e);
    }
  }

  const deleteBlog = async (id) => {
    try{
      let resp = await fetch('/api/blog/delete',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id:id
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api !== null && data.api == 'DELETE'){
        setBlogs(state=>state.filter(item=>item.id!==id))
      }

      //setError("");
    }catch(e){
      console.log(e);
    }
  };

  fetchBlogs();

  function onChangeBlogPost(data){
    //console.log(data)
    setNewContent(data)
  }

  async function btnPostBlog(){
    console.log("Hello?")
    try{
      
      let textContent = JSON.stringify(newContent());
      console.log("Teest")
      let resp = await fetch('/api/blog/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          content:textContent
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api!==null && data.api =='CREATED'){
        let item = data.blog;
        setBlogs(state=>[...state, item])
      }
      
      //setError("");
      //setNewTask("")
    }catch(e){
      console.log(e);
    }
  }

  function btnCreateBlog(){
    setShowCreateBlog(true)
  }

  function btnCloseBlog(){
    setShowCreateBlog(false)
  }

  // <input value={newContent()} onInput={(e)=>setNewContent(e.target.value)} />
  return (<div>
    <label>Blog</label>
    <div>
      <button onClick={btnCreateBlog}> Create Post </button>
    </div>
    <div>
      <For each={blogs()} fallback={<div>Empty!</div>}>
      {(item, index) => (
        <div id={index()}>
          {blogID()==item.id?(<>
            <input value={item.content} onInput={(e)=>setEditContent(e.target.value)}/>
            <button onClick={()=>updateBlog()}> Update </button>
          </>):(<>
            <TextEditorJS value={item.content} readOnly/>
            <button onClick={()=>setBlogID(item.id)}> Edit </button>
            <button onClick={()=>deleteBlog(item.id)}> Del </button>
          </>)}
        </div>
      )}
      </For>
    </div>
    <Show when={showCreateBlog()}>
      <div style="position:fixed; float:right; top:32px;left:20px;z-index:1;">
        <TextEditorJS onChange={onChangeBlogPost}/>
        <button onClick={btnPostBlog}>Create Blog</button>
        <button onClick={btnCloseBlog}>Close</button>
        <label>{errorText()}</label>
      </div>
    </Show>
  </div>)
}