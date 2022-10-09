/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal } from 'solid-js'
import TextQuill from '../components/texteditor/TextQuill';

export default function PageBlog() {

  const [blogs, setBlogs] = createSignal([]);
  const [newContent, setNewContent] = createSignal("");
  const [blogID, setBlogID] = createSignal("");
  const [editContent, setEditContent] = createSignal("");
  const [errorText, setError] = createSignal("");

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

  return (<div>
    <label>Blog</label>
    <div>
      <TextQuill/>
      <input value={newContent()} onInput={(e)=>setNewContent(e.target.value)} />
      <button onClick={addBlog}>Create</button>
      <label>{errorText()}</label>
    </div>
    <div>
      <For each={blogs()} fallback={<div>Loading...</div>}>
      {(item, index) => (
        <div id={index()}>
          {blogID()==item.id?(<>
            <input value={item.content} onInput={(e)=>setEditContent(e.target.value)}/>
            <button onClick={()=>updateBlog()}> Update </button>
          </>):(<>
            <label > Item: {item.content} </label>
            <button onClick={()=>setBlogID(item.id)}> Edit </button>
            <button onClick={()=>deleteBlog(item.id)}> Del </button>
          </>)}
        </div>
      )}
      </For>
    </div>
  </div>)
}