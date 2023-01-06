/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';

export default function AdminView(){

  const [view, setView] = createSignal('home');

  function renderView(){
    if(view()=='home'){

    }
    return <></>;
  }

  return (<>
    <label>AdminView</label>
    {renderView()}
  </>)
};
