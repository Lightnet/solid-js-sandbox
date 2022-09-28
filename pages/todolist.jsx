/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect, createSignal, For } from 'solid-js'
//import { supabase } from '../libs/supabaseclient'
//import PublicChat from "../components/publicchat/PublicChat";
import { useAuth } from '../components/auth/api/AuthProvider';

function PageToDoList(){

  const [todos, setTodos] = createSignal([]);
  const [newTask, setNewTask] = createSignal("");
  const [errorText, setError] = createSignal("");

  const [editContent, setEditContent] = createSignal("");
  const [editID, setEditID] = createSignal("");

  //const [,{}] = useAuth();

  const fetchTodos = async () => {
    try{
      let resp = await fetch('/api/todolist/list')
      let data = await resp.json()
      console.log(data)
      if(data.api !== null && data.api == 'TASKS'){
        console.log(data.tasks)
        setTodos(data.tasks);
      }
    }catch(e){
      console.log(e);
    }
  };

  const deleteTodo = async (id) => {
    try{
      let resp = await fetch('/api/todolist/delete',{
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
        setTodos(state=>state.filter(item=>item.id!==id))
      }

      //setError("");
    }catch(e){
      console.log(e);
    }
  };

  const addTodo = async () => {
    let taskText = newTask();
    let task = taskText.trim();
    try{
      let resp = await fetch('/api/todolist/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          content:task
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api!==null && data.api =='CREATED'){
        let item = data.task;
        setTodos(state=>[...state, item])
      }

      //setError("");
      //setNewTask("")
    }catch(e){
      console.log(e);
    }
  };

  async function updateToDo(){
    try{
      let resp = await fetch('/api/todolist/update',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id:editID(),
          content:editContent()
        })
      })
      let data = await resp.json()
      console.log(data)
      if(data.api !== null && data.api == 'UPDATE'){
        setTodos(state=>state.map(item=>{
          if(item.id == data.task.id){
            let content = data.task.content;
            return {...item, content}
          }
          return item;
        }))
      }

      setEditID("");
      //setError("");
      //setNewTask("")
    }catch(e){
      console.log(e);
    }
  }

  fetchTodos();

  function inputNewTask(e){
    setNewTask(e.target.value)
  }

  return (<>
    <label>ToDoList</label>
    <input value={newTask()} onInput={inputNewTask} /><button onClick={addTodo}>Add</button>
    <label>{errorText()}</label>
    <div>
      <For each={todos()} fallback={<div>Loading...</div>}>
      {(item, index) => (
        <div id={index()}>
          {editID()==item.id?(<>
            <input value={item.content} onInput={(e)=>setEditContent(e.target.value)}/>
            <button onClick={()=>updateToDo()}> Update </button>
          </>):(<>
            <label > Item: {item.content} </label>
            <button onClick={()=>setEditID(item.id)}> Edit </button>
            <button onClick={()=>deleteTodo(item.id)}> Del </button>
          </>)}
        </div>
      )}
      </For>
    </div>
  </>)
}

export default PageToDoList;