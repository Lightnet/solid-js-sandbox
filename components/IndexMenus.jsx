/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, createMemo
, createEffect 
, onCleanup
} from 'solid-js';

import { Link, useLocation } from '@solidjs/router';
import ToggleTheme from './theme/ToggleTheme';

const IndexMenus = () => {

  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  //for menu display
  let whitelist = [
    "/",
    "/about",
    "/account",
    "/blog",
    "/signin",
    "/signup",
    "/signout",
    "/testlab",
    "/publicchat",
    "/mobilebase",
    "/todolist",
    "/examples",
    "/uicss",
    "/threecss"
  ];

  const displayMenu = createMemo(()=>{
    //console.log("FIND:",whitelist.find((item)=>{
      //return item === pathname()      
    //}))
    if(
      whitelist.find((item)=>{return item === pathname()})
    ){
      //console.log("FOUND")
      // <ToggleTheme /> //does not work here layer?
      // <Link class="btnLink" href="/game">Game</Link><span> | </span>
      return ( <div>
        <Link class="btnLink" href="/">Home</Link><span> | </span>
        <Link class="btnLink" href="/about">About</Link><span> | </span>
        <Link class="btnLink" href="/blog">Blog</Link><span> | </span>
        <Link class="btnLink" href="/account">Account</Link><span> | </span>
        <Link class="btnLink" href="/testlab">Test Lab</Link><span> | </span>
        <Link class="btnLink" href="/publicchat">Chat</Link><span> | </span>
        <Link class="btnLink" href="/todolist">To Do List</Link><span> | </span>
        <Link class="btnLink" href="/mobilebase">Mobile Base</Link><span> | </span>
        <Link class="btnLink" href="/threecss">threecss</Link><span> | </span>
        <Link class="btnLink" href="/uicss">uicss</Link><span> | </span>
        <Link class="btnLink" href="/admin">admin</Link><span> | </span>
        <ToggleTheme />
        </div>)
    }else{
      //console.log("NOT FOUND")
      return (<>
      </>)
    }
  })

  return (<>
  {displayMenu}
  </>)

}

export default IndexMenus;