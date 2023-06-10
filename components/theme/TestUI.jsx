/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://www.w3schools.com/colors/colors_picker.asp
// https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch


import { createSignal } from 'solid-js';

export default function TestUI(){

  //const [count, setCount] = createSignal(0)

  return (<>
    <div>
      <button class="wbtn">Primary</button>
      <button class="wbtnsecndary">Secondary</button>
      <button class="wbtntertiary">Tertiary</button>
      <span>
      <input class="wInputCB" type="checkbox" /> Hello World
      </span>
      


    </div>
  </>)
};
