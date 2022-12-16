/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createMemo, createSignal } from "solid-js"
import Modal from "../../modal/Modal.jsx"
import BaseBuildings from "./BaseBuildings.jsx"
import BaseConstruction from "./BaseConstruction.jsx"
import Comms from "./Comms.jsx"
import HomeBase from "./HomeBase.jsx"

export default function MIPanelView(props){

  const [showHomeBase, setShowHomeBase] = createSignal(false)
  const isHomeBase = createMemo(()=>{
    return showHomeBase()
  })
  function onOpenHomeBase(){
    setShowHomeBase(true)
  }
  function onCloseHomeBase(){
    setShowHomeBase(false)
  }

  const [showBaseConstruction, setShowBaseConstruction] = createSignal(false)
  const isBaseConstruction = createMemo(()=>{
    return showBaseConstruction()
  })
  function onOpenBaseConstruction(){
    setShowBaseConstruction(true)
  }
  function onCloseBaseConstruction(){
    setShowBaseConstruction(false)
  }

  const [showBaseBuildings, setShowBaseBuildings] = createSignal(false)
  const isBaseBuildings = createMemo(()=>{
    return showBaseBuildings()
  })
  function onOpenBaseBuildings(){
    setShowBaseBuildings(true)
  }
  function onCloseBaseBuildings(){
    setShowBaseBuildings(false)
  }

  return (<>
  <div>
    <button onClick={onOpenHomeBase}> Home Base </button>
    <button onClick={onOpenBaseConstruction}> Construction </button>
    <button onClick={onOpenBaseBuildings}> Buildings </button>
    <button> Warehouse </button>
    <button> Out Post </button>
    <button> Units </button>
    <button> Fleet </button>
    <button> Battle </button>
    <button> Map </button>
    <button> Settings </button>
  </div>

  <Comms/>
  
  <div>
    <Modal isopen={isHomeBase} onClose={onCloseHomeBase} enabledrag={true} width={400} height={200}>
      <HomeBase/>
    </Modal>
    <Modal isopen={isBaseConstruction} onClose={onCloseBaseConstruction} enabledrag={true} width={400} height={200}>
      <BaseConstruction />
    </Modal>
    <Modal isopen={isBaseBuildings} onClose={onCloseBaseBuildings} enabledrag={true} width={400} height={200}>
      <BaseBuildings />
    </Modal>
  </div>
  </>)
}

