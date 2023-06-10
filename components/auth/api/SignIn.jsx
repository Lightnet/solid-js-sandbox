/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { Link, useNavigate } from '@solidjs/router'
import { createEffect, createSignal } from 'solid-js'
import { jwtUser } from '../../../libs/clientapi.js'
import { useAuth } from './AuthProvider.jsx'

export default function SignIn() {

  const [alias, setAlias] = createSignal('test')
  const [passphrase, setPassphrase] = createSignal('pass')
  const [email, setEmail] = createSignal('test@test.test')

  const [,{setToken}] = useAuth();

  const navigate = useNavigate();

  const btnLogin = async (e)=>{
    //console.log(alias())
    //console.log(passphrase())
    try{
      const resp = await fetch('/api/auth/login',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          alias:alias(),
          passphrase:passphrase(),
          email:email()
        })
      })
      const data = await resp.json()
      //console.log(data)
      if(data){
        if(data?.api=='TOKEN'){
          setToken(data.token)
          //console.log(jwtUser(data.token))
          navigate("/", { replace: true })
        }
      }
    }catch(e){
      console.log(e)
    }
  }

  const btnSignUp = (e)=>{
    navigate("/signup", { replace: true })
  }

  const btnRecovery = ()=>{
    navigate("/recovery", { replace: true })
  }

  return (<div>  
    <table>
      <thead>
            <tr class="wPanel_header">
              <td colSpan="2" >
                <label>Sign In</label>
              </td>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <label> Alias: </label>
            </td>
            <td>
            <input value={alias()} onInput={(e)=>setAlias(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
            <label> E-Mail: </label>
            </td>
            <td>
            <input value={email()} onInput={(e)=>setEmail(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
            <label> Passphrase: </label>
            </td>
            <td>
            <input value={passphrase()} onInput={(e)=>setPassphrase(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={btnLogin} class="wbtn wButton" style="width:100%"> Login </button>
            </td>
          </tr>
          <tr>
          <td colSpan="2">
              <button class="wbtn " onClick={btnSignUp}> Sign Up </button>
              <button class="wbtn " onClick={btnSignUp}> Recovery </button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>)
}