/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createMemo, createSignal } from "solid-js"
import Modal from "../../modal/Modal"

export default function MIPanelView(props){

  const [showHomeBase, setShowHomeBase] = createSignal(false)
  const isHomeBase = createMemo(()=>{
    console.log("showHomeBase: ",showHomeBase())
    return showHomeBase()
  })
  function onOpenHomeBase(){
    setShowHomeBase(true)
  }
  function onCloseHomeBase(){
    setShowHomeBase(false)
  }

  return (<>
  <div>
    <button onClick={onOpenHomeBase}> Home Base </button>
    <button> Buildings </button>
    <button> Warehouse </button>
    <button> Out Post </button>
    <button> Units </button>
    <button> Fleet </button>
    <button> Battle </button>
    <button> Map </button>
    <button> Settings </button>
  </div>
  <div>
    <Modal isopen={isHomeBase} onClose={onCloseHomeBase} enabledrag={true}>

    </Modal>
  </div>
  </>)
}

