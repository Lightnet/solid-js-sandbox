/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createEffect } from 'solid-js'
import { Link, useLocation } from '@solidjs/router';

export default function PageExamples() {

  return (<>
    <div>
      <Link class="" href="/testlab">Test Lab</Link><span> | </span>
      <Link class="" href="/mobilebase">Mobile Base</Link><span> | </span>
      <Link class="" href="/admin">admin</Link><span> | </span>
    </div>
    <label> Samples: </label>
    <div>
      <Link class="" href="/publicchat">Chat</Link><span> | </span>
      <Link class="" href="/fliptime">fliptime</Link><span> | </span>
      <Link class="" href="/todolist">To Do List</Link><span> | </span>
      <Link class="" href="/threecss">threecss</Link><span> | </span>
      <Link class="" href="/uicss">uicss</Link><span> | </span>
    </div>

  
  </>)
}