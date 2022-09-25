/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
//import { supabase } from '../libs/supabaseclient.js';
//import Auth from '../components/auth/api/Auth.jsx';
//import Account  from '../components/auth/api/Account.jsx';
//import { useAuth } from '../components/auth/api/AuthProvider.jsx';
import { createMemo, createSignal } from "solid-js";
import Modal from "../components/modal/Modal"
import NotifyTest from "../components/notify/NotifyTest"

export default function PageTestLab() {

  //const [session, {setSession}] = useAuth();
  const [isOpenModal, setIsOpenModal] = createSignal(false);
  function isCloseModal(){
    setIsOpenModal(false)
  }

  function openModal(){
    setIsOpenModal(true)
  }

  const isModal = createMemo(()=>{
    console.log("isOpenModal: ",isOpenModal())
    return isOpenModal()
  })

  return (
    <div>
      <label> Test Lab </label>
      <NotifyTest />
      <button onClick={openModal}> Modal </button>
      <Modal isopen={isModal} onClose={isCloseModal} enabledrag={true}>
        <label> Hello! </label>
      </Modal>
    </div>
  )
}