/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://www.w3schools.com/howto/howto_css_flip_card.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card

import { createSignal } from 'solid-js';

import './flipsample.css';

export default function FlipTime(){

  const [count, setCount] = createSignal(0)

  return (<>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"/>
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  </>)
};
